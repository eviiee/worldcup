"use client"

import clsx from 'clsx'

import { motion } from "framer-motion"
import styles from './index.module.scss'

interface Props {
    label: String
    onClick: (myArg: void) => void
}

export default function AnimatedButton({
    label, onClick,
}: Props) {
    return (
        <motion.div className={clsx(styles.commonButton)}>{label}</motion.div>
    )
}