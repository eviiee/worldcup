"use client"

import Image from "next/image";
import EntriesWrap from "@/components/entry/container";

import styles from './page.module.scss'

import hotIcon from "../../public/icon/hot.svg"
import recentIcon from "../../public/icon/recent.svg"
import randomIcon from "../../public/icon/random.svg"
import Link from "next/link";

export default function Home() {
  return (<>
    <div className={styles.title}>
      <Image src={hotIcon} alt="인기" width={24} height={24} />
      <h2>가장 인기있어요</h2>
      <Link href={'/popular'}>더 보기 &gt;</Link>
    </div>
    <EntriesWrap />
    <div className={styles.title}>
      <Image src={recentIcon} alt="인기" width={24} height={24} />
      <h2>새롭게 등록됐어요</h2>
      <Link href={'/recent'}>더 보기 &gt;</Link>
    </div>
    <EntriesWrap />
    <div className={styles.title}>
      <Image src={randomIcon} alt="인기" width={24} height={24} />
      <h2>이런건 어때요?</h2>
      <Link href={'/random'}>더 보기 &gt;</Link>
    </div>
    <EntriesWrap />
  </>
  );
}
