import getEntryInfo from "@/services/getEntryInfo"
import EntryInfo from "@/model/entryInfo"

import styles from './page.module.scss'
import timeStampToDate from "@/utils/timeStampToDate"
import commaSeparate from "@/utils/numberSeparator"
import Link from "next/link"

import Image from 'next/image'
import shareIcon from '../../../../public/icon/share.svg'
import getOtherEntries from "@/services/getOtherEntries"
import Candidate from "@/model/candidate"
import Comment from "@/model/comment"
import emptyProfile from '../../../../public/images/empty_profile.jpg'

import goldMedal from '../../../../public/icon/gold_medal.svg'
import silverMedal from '../../../../public/icon/silver_medal.svg'
import bronzeMedal from '../../../../public/icon/bronze_medal.svg'
import { Metadata } from "next"

export async function generateMetadata({
    params,
}: {
    params: { [key: string]: number }
}): Promise<Metadata> {

    const entryInfo = await getEntryInfo(params.entry)

    return {
        title: `${entryInfo.title} - #999FFF`,
        openGraph: {
            images: entryInfo.thumbnail,
        },
    }
}

export default async function EntryInfoPage({
    params,
}: {
    params: { [key: string]: number }
}) {

    const entryIndex = params.entry
    const entryInfo: EntryInfo = await getEntryInfo(entryIndex)
    const otherEntries: EntryInfo[] = await getOtherEntries(entryIndex)

    return (
        <div className={styles.entry_info_page}>
            <EntryInfoSection entryInfo={entryInfo} />
            <OtherEntries entries={otherEntries} />
        </div>
    )
}

const EntryInfoSection = ({ entryInfo }: { entryInfo: EntryInfo }) => {
    return (
        <section className={styles.entry_info_wrapper}>
            <div className={styles.entry_info_title}>
                {entryInfo.tags.length > 0 &&
                    <div className={styles.entry_info_tags}>
                        {entryInfo.tags.map((tag, index) => {
                            return <span key={index}>{tag}</span>
                        })}
                    </div>
                }
                <h1>{entryInfo.title}</h1>
                <div className={styles.entry_info_etc}>
                    <img src={entryInfo.author.profile!} alt={entryInfo.author.name} />
                    <span>
                        <span>{entryInfo.author.name}</span>
                    </span>
                    <span>
                        {timeStampToDate(entryInfo.createdAt)}
                    </span>
                    <span>
                        {commaSeparate(entryInfo.playCount)}회 플레이
                    </span>
                </div>
                <h3>{entryInfo.subTitle}</h3>
                <p>{entryInfo.description}</p>
                <div className={styles.buttons}>
                    <Link className={styles.play} href='play/'>▶&nbsp;&nbsp;지금 플레이</Link>
                    <Link className={styles.share} href='./play'>
                        <Image src={shareIcon} alt='검색' />
                        공유
                    </Link>
                </div>
            </div>
            <Ranking candidates={entryInfo.candidates} />
            <Comments comments={entryInfo.comments} />
        </section>
    )
}

const Ranking = ({ candidates }: { candidates: Candidate[] }) => {

    const sortedCandidates = candidates.sort((a, b) => b.wins - a.wins)

    let currentRanking: number = 0
    let tieCount: number = 1
    let currentLeastWin: number = sortedCandidates[0].wins + 1

    const medalImage: string[] = [
        goldMedal,
        silverMedal,
        bronzeMedal,
    ]

    const candidatesComponents = sortedCandidates.map((candidate) => {

        if (candidate.wins == currentLeastWin) {
            tieCount++
        } else {
            currentLeastWin = candidate.wins
            currentRanking = currentRanking + tieCount
            tieCount = 1
        }

        let className = styles.ranking_row
        if (currentRanking == 1) className += ` ${styles.gold}`
        else if (currentRanking == 2) className += ` ${styles.silver}`
        else if (currentRanking == 3) className += ` ${styles.bronze}`

        return (
            <div className={className} key={candidate.key}>
                {currentRanking <= 3 ?
                    <Image className={styles.medal} src={medalImage[currentRanking - 1]} alt={`${currentRanking}등`} /> :
                    <span className={styles.rank}>{currentRanking}</span>}
                <img className={styles.thumbnail} src={candidate.image} alt={candidate.name} />
                <span className={styles.name}>{candidate.name}</span>
                <span className={styles.winCount}>{candidate.wins}회 우승</span>
            </div>
        )
    })

    return (
        <div className={styles.ranking}>
            {candidatesComponents}
        </div>
    )
}

const Comments = ({ comments }: { comments: Comment[] }) => {

    const commentComponents = comments.map(comment => {
        return (
            <div key={comment.key} className={styles.comment}>
                <Image src={comment.author.profile ?? emptyProfile} alt={comment.author.name} />
                <div>
                    <div className={styles.author}>
                        <span className={styles.name}>{comment.author.name}</span>
                        <span className={styles.date}>{timeStampToDate(comment.createdAt)}</span>
                        <span className={styles.spacer}></span>
                        <Link href={''}>신고</Link>
                    </div>
                    <span className={styles.content}>{comment.content}</span>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.comments}>
            {commentComponents}
        </div>
    )
}

const OtherEntries = ({ entries }: { entries: EntryInfo[] }) => {

    const entriesList = entries.map((entry, index) => {
        return (
            <Link href={`./${entry.index}`} key={index}>
                <img src={entry.thumbnail} alt={entry.title} />
                <div>
                    <span>{entry.title}</span>
                </div>
            </Link>
        )
    })

    return (
        <section className={styles.other_entries}>
            {entriesList}
        </section>
    )
}