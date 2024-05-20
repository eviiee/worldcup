'use client'

import Candidate from '@/model/candidate'
import styles from './play-screen.module.scss'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import shuffleArray from '@/utils/shuffleArray'
import { motion } from 'framer-motion'

export default function PlayScreen({
    candidatesList,
    onPlayEnd,
}: {
    candidatesList: Candidate[],
    onPlayEnd: (winner: Candidate) => void,
}) {

    const [currentStage, setCurrentStage] = useState<number>(1)
    const [currentRoundCandidates, setCurrentRoundCandidates] = useState<Candidate[]>(candidatesList)
    const [winners, setWinners] = useState<Candidate[]>([])

    useEffect(() => {
        if (winners.length > 0) toNextMatch()
    }, [winners])

    const selectLeft = () => {
        const nextRoundCandidates = [...winners, currentRoundCandidates[currentStage * 2 - 2]]
        setWinners(nextRoundCandidates)
    }
    const selectRight = () => {
        const nextRoundCandidates = [...winners, currentRoundCandidates[currentStage * 2 - 1]]
        setWinners(nextRoundCandidates)
    }

    const toNextMatch = () => {
        const nextMatch = currentStage + 1
        if (nextMatch * 2 <= currentRoundCandidates.length) {
            setCurrentStage(nextMatch)
        } else {
            toNextRound()
        }
    }

    const toNextRound = () => {
        if (currentRoundCandidates.length > 2) {
            setCurrentStage(1)
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

    const totalStage = Math.floor(currentRoundCandidates.length / 2)
    const leftCandidate = currentRoundCandidates[currentStage * 2 - 2]
    const rightCandidate = currentRoundCandidates[currentStage * 2 - 1]

    const getCurrentProgression = () => {
        return `${currentStage / totalStage * 100}%`
    }
    const progressText = currentRoundCandidates.length > 2 ? `${currentRoundCandidates.length}강 진행중` : '결승전'

    return (
        <div className={styles.play_screen}>
            <div className={styles.progress}>
                <div className={styles.progress_bar}>
                    <motion.div animate={{ width: getCurrentProgression() }}></motion.div>
                </div>
                <div className={styles.text}>
                    <span>{progressText}</span>
                    <span>{currentStage} / {totalStage}</span>
                </div>
            </div>
            <div className={styles.candidates}>
                <Section image={leftCandidate.image} label={leftCandidate.name} onSelect={selectLeft} />
                <Section image={rightCandidate.image} label={rightCandidate.name} onSelect={selectRight} />
            </div>
        </div>
    )
}

const Section = ({
    image,
    label,
    onSelect,
}: {
    image: string,
    label: string,
    onSelect: () => void,
}): React.ReactNode => {
    return (
        <div className={styles.candidate} onClick={onSelect}>
            <img src={image} alt={label} />
            <span>{label}</span>
        </div>
    )
}