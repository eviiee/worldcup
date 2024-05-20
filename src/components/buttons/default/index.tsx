import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
    label: string
    type: ButtonType
    strong?: boolean
}

type ButtonType = 'primary' | 'red' | 'blue' | 'black' | 'yellow'

export default function Button({
    label,
    type,
    strong = false,
}: Props) {

    return (
        <button className={`${styles.common_button} ${styles[type]} ${strong ? styles.strong : ''}`}
        >
            {label}
        </button>
    )
}