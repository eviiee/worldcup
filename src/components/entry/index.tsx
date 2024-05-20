import { EntryProps } from '@/model/entryProps'
import styles from './index.module.scss'
import timeStampToDate from '@/utils/timeStampToDate'
import Link from 'next/link'
import commaSeparate from '@/utils/numberSeparator'

export default function Entry({
    thumbnail,
    title,
    subTitle,
    entry,
    createdAt,
    playCount,
    tags,
    candidates,
    nsfw,
}: EntryProps) {

    const tagList = tags.sort().map((tag, index) => {
        return <Link href={`/search?tag=${tag}`} key={`tag${index}`}>
            # {tag}
        </Link>
    })

    return (
        <div className={styles.entry_container}>
            <Link className={`${styles.thumbnail} ${nsfw ? styles.nsfw : ''}`} href={`/worldcup/${entry}/play`}>
                <img src={thumbnail} alt={title} />
                <span className={styles.candidates}>{candidates}강</span>
            </Link>
            <div className={styles.entry_info}>
                <span className={styles.date}>{timeStampToDate(createdAt)}</span>
                <span className={styles.playCount}>{commaSeparate(playCount)}회 플레이됨</span>
            </div>
            <Link href={`/worldcup/${entry}`} className={styles.entry_title}>{title}</Link>
            <span className={styles.entry_subTitle}>{subTitle}</span>
            {
                tags.length > 0 &&
                <div className={styles.entry_tags}>
                    {tagList}
                </div>
            }
        </div>
    )

}