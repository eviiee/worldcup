"use client";
import { useEffect, useState } from "react";
import styles from './stage-selection.module.scss';
import { AnimatePresence, motion } from "framer-motion";

export const StageSelectionScreen = ({
    totalCandidates, onStartPlaying,
}: {
    totalCandidates: number;
    onStartPlaying: (candidatesLimit: number) => void;
}) => {

    const [selectedRound, selectRound] = useState<number>(totalCandidates >= 32 ? 32 : totalCandidates);
    const [options, setOptions] = useState<number[]>([]);

    useEffect(() => {

        const stageOptions: number[] = getPossibleOptions();
        setOptions([...stageOptions]);

    }, []);

    const getPossibleOptions = (): number[] => {

        let possibleOptions: number[] = [];

        for (let i = 4; i < totalCandidates; i = i * 2) {
            possibleOptions.push(i);
        }
        possibleOptions.push(totalCandidates);

        return possibleOptions;
    };

    const stageSelectButtons = options.map((option) => {
        return (
            <button key={option} className={`${option == selectedRound ? styles.selected : ''} ${styles.roundSelectButton}`} onClick={() => selectRound(option)}>
                {option}강
            </button>
        );
    });

    const animationVertical = {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 25, opacity: 0 },
    };

    const roundDisplay = <span className={styles.transition_container}>
        <span className={styles.width_decider}>{selectedRound}</span>
        <AnimatePresence>
            <motion.span
                className={styles.highlight}
                key={Date.now()}
                {...animationVertical}>
                {selectedRound}
            </motion.span>
        </AnimatePresence>
    </span>;

    const maximumCandidates = selectedRound == totalCandidates;

    const text_partial = <span className={`${styles.notifier} ${styles.partial} ${!maximumCandidates ? styles.show : ''}`}>중 무작위 {roundDisplay}명의 후보가 출전해요.</span>;
    const text_all = <span className={`${styles.notifier} ${styles.all} ${maximumCandidates ? styles.show : ''}`}><span className={styles.highlight}>모두</span>가 출전해요.</span>;

    const selection_notifier_animated = <span className={styles.transition_container}>
        {text_partial}
        {text_all}
    </span>;

    const estimatedTime: number = 4 * getTotalMatchCount(selectedRound);
    const getEstimatedTimeText = (): string => {
        if (estimatedTime <= 300) return '5분 미만';
        else {
            return `${Math.floor(estimatedTime / 60)}분`;
        }
    };

    const startPlaying = () => onStartPlaying(selectedRound)

    return (
        <div className={styles.stageSelectionScreen}>
            <h2>몇강부터 시작할까요?</h2>
            <h3>총
                <span className={styles.highlight}>{totalCandidates}</span>명의 후보 {selection_notifier_animated}
            </h3>
            <div className={styles.buttons}>{stageSelectButtons}</div>
            <p className={`${styles.bye} ${isPowerOfTwo(selectedRound) ? '' : styles.show}`}>🚨 일부 후보는 부전승 처리돼요.</p>
            <div className={styles.playButtonContainer}>
                <button className={styles.playButton} onClick={startPlaying}>시작하기</button>
                <span>{getEstimatedTimeText()} 소요 예상</span>
            </div>
        </div>
    );
};


const isPowerOfTwo = (n: number): boolean => {
    return n > 0 && (n & (n - 1)) === 0;
};


const getTotalMatchCount = (n: number): number => {
    if (n <= 2) return 1;
    return Math.floor(n / 2) + getTotalMatchCount(Math.floor(n / 2) + n % 2);
};
