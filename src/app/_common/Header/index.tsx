
import Button from '@/components/buttons/default'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import searchIcon from '../../../../public/icon/search.svg'

export default function Header() {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_desktop}>
                <div className={styles.header_desktop_left}>
                    <Link href='/'>
                        <div>
                            <span>#999FFF</span>
                            <span>이상형 월드컵</span>
                        </div>
                    </Link>
                    <div className={styles.header_contents_wrapper}>
                        <Link className={styles.header_link} href='/popular'>인기 있는</Link>
                        <Link className={styles.header_link} href='/recent'>새로 나온</Link>
                        <Link className={styles.header_link} href='/worldcup'>전체 보기</Link>
                    </div>
                </div>
                <div className={styles.header_desktop_right}>
                    <button className={styles.search_button}>
                        <Image src={searchIcon} alt='검색' />
                        관심있는 주제를 검색해보세요.
                    </button>
                    <Link className={styles.header_link} href='/'>로그인</Link>
                    <Link className={`${styles.header_link} ${styles.create_worldcup}`} href='/'>월드컵 만들기</Link>
                </div>
            </div>

            <div className={styles.header_mobile}>
                이것은 모바일 헤더입니다.
            </div>
        </header>
    )
}