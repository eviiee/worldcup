'use client'

import Candidate from '@/model/candidate'
import styles from './play-screen.module.scss'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import shuffleArray from '@/utils/shuffleArray'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlayScreen({
    title,
    index,
    candidatesList,
    onPlayEnd,
}: {
    title: string,
    index: number,
    candidatesList: Candidate[],
    onPlayEnd: (winner: Candidate) => void,
}) {

    const [currentMatch, setCurrentMatch] = useState<number>(1)
    const [currentRoundCandidates, setCurrentRoundCandidates] = useState<Candidate[]>(candidatesList)
    const [winners, setWinners] = useState<Candidate[]>([])

    useEffect(() => {
        if (winners.length > 0) toNextMatch()
    }, [winners])

    const selectLeft = () => {
        const nextRoundCandidates = [...winners, currentRoundCandidates[currentMatch * 2 - 2]]
        setWinners(nextRoundCandidates)
    }
    const selectRight = () => {
        const nextRoundCandidates = [...winners, currentRoundCandidates[currentMatch * 2 - 1]]
        setWinners(nextRoundCandidates)
    }

    const toNextMatch = () => {
        const nextMatch = currentMatch + 1
        if (nextMatch * 2 <= currentRoundCandidates.length) {
            setCurrentMatch(nextMatch)
        } else {
            toNextRound()
        }
    }

    const toNextRound = () => {
        if (currentRoundCandidates.length > 2) {
            setCurrentMatch(1)
            let nextRoundCandidates = [...winners]
            if (currentRoundCandidates.length % 2 != 0) {
                nextRoundCandidates.push(currentRoundCandidates.pop()!)
            }
            setCurrentRoundCandidates(shuffleArray(nextRoundCandidates))
            setWinners([])
        } else {
            finishPlaying()
        }
    }

    const finishPlaying = () => {
        onPlayEnd(winners[0])
    }

    const totalMatch = Math.floor(currentRoundCandidates.length / 2)
    const leftCandidate = currentRoundCandidates[currentMatch * 2 - 2]
    const rightCandidate = currentRoundCandidates[currentMatch * 2 - 1]

    return (
        <div className={styles.play_screen}>
            <Header title={title} index={index} currentMatch={currentMatch} totalMatch={totalMatch} currentStage={currentRoundCandidates.length} />
            <div className={styles.candidates}>
                <Section candidate={leftCandidate} onSelect={selectLeft} />
                <Section candidate={rightCandidate} onSelect={selectRight} />
            </div>
        </div>
    )
}

const Header = ({
    title,
    index,
    currentMatch,
    totalMatch,
    currentStage,
}: {
    title: string,
    index: number,
    currentMatch: number,
    totalMatch: number,
    currentStage: number,
}) => {

    const getCurrentProgression = () => {
        return `${currentMatch / totalMatch * 100}%`
    }
    const progressText = currentStage > 2 ? `${currentStage}강 진행중` : '결승전'

    return (
        <div className={styles.header}>
            <Link href={`/worldcup/${index}`}>
                <h1>{title}</h1>
            </Link>
            <div className={styles.progress}>
                <div className={styles.progress_bar}>
                    <motion.div animate={{ width: getCurrentProgression() }}></motion.div>
                </div>
                <div className={styles.text}>
                    <span>{progressText}</span>
                    <span>{currentMatch} / {totalMatch}</span>
                </div>
            </div>
        </div>
    )
}

const Section = ({
    candidate,
    onSelect,
}: {
    candidate: Candidate,
    onSelect: () => void,
}): React.ReactNode => {

    const initialState = {
        y: -40,
        opacity: 0,
    }

    const finalState = {
        y: 0,
        opacity: 1,
    }

    const selectedState = {
        y: 0,
        opacity: 1,
        width: '100vw',
    }

    return (
        <motion.div initial={initialState} animate={selectedState} className={styles.candidate} onClick={onSelect}>
            <img src={candidate.image} alt={candidate.name} />
            <span>{candidate.name}</span>
        </motion.div>
    )
}