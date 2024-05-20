import styles from './index.module.scss'

export default function Loader() {
    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
            <span>로딩중</span>
        </div>
    )
}