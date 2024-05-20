"use client"

import EntryInfo from "@/model/entryInfo";
import getEntryInfo from "@/services/getEntryInfo";

import { StageSelectionScreen } from "./_stage-selection/stage-selection";
import { useEffect, useState } from "react";

import styles from './page.module.scss'
import Loader from "@/components/loader";
import PlayScreen from "./_play-screen/play-screen";
import shuffleArray from "@/utils/shuffleArray";
import Candidate from "@/model/candidate";
import { Metadata } from "next";

// export async function generateMetadata({
//     params,
// }: {
//     params: { [key: string]: number }
// }): Promise<Metadata> {

//     const entryInfo = await getEntryInfo(params.entry)

//     return {
//         title: entryInfo.title,
//         openGraph: {
//             images: entryInfo.thumbnail,
//         },
//     }
// }

export default function WorldcupPlayPage({
    params,
}: {
    params: { [key: string]: number }
}) {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [startedPlaying, setStartedPlaying] = useState<boolean>(false)
    const [entryInfo, setEntryInfo] = useState<null | EntryInfo>(null)
    const [maxRounds, setMaxRounds] = useState<number>(0)

    const entryIndex = params.entry

    useEffect(() => {
        loadInfo()
    }, [])

    const loadInfo = async () => {
        getEntryInfo(entryIndex)
            .then(setEntryInfo)
            .then(() => setIsLoading(false))
    }

    const loader = <Loader />

    const startPlaying = (maxCandidates: number) => {
        setMaxRounds(maxCandidates)
        setStartedPlaying(true)
    }
    const stageSelection = isLoading ? <></> : <StageSelectionScreen totalCandidates={entryInfo!.candidates.length} onStartPlaying={startPlaying} />
    const playScreen = startedPlaying ? <PlayScreen candidatesList={shuffleArray(entryInfo!.candidates).slice(0, maxRounds)} onPlayEnd={(winner: Candidate) => console.log(`your winner is ${winner.name!}`)} /> : <></>

    return (
        isLoading ? loader :
            !startedPlaying ? stageSelection :
                playScreen
    )
}

