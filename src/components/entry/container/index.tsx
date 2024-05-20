import { EntryProps } from '@/model/entryProps'
import styles from './index.module.scss'
import Entry from '..'

export default function EntriesWrap({
    entries
}: {
    entries?: EntryProps[]
}) {
    return (
        <div className={styles.entries_wrap}>
            <Entry nsfw={false} candidates={159} tags={['아이돌','남돌', '고화질']} title="남돌 이상형 월드컵 (움짤)" subTitle="남자 아이돌 '얼굴'만 보고 판단하세요" thumbnail="https://i.namu.wiki/i/KcKj5aPSgxIglfCU91Ots3LZWHOCJRYx2uryWZFAF1dTVwFzzMHE0Dzq7iP0y6N8u7K-QIfBd9t7SOa9fKrStA.gif" entry={1} createdAt={1715842189540} playCount={5584} ></Entry>
            <Entry nsfw={false} candidates={62} tags={['아이돌','여돌','고화질','움짤']} title="[고화질] 여자 아이돌/솔로 움짤 이상형 월드컵" subTitle="128강 / 댓글 많이 달아주세요 ^0^~ (2024.04.26 업데이트)" thumbnail="https://blog.kakaocdn.net/dn/cc057E/btsubKVGQxz/3Q6my2hbVBmR4ITyYTwh81/img.gif" entry={2} createdAt={1715142189540} playCount={2398} ></Entry>
            <Entry nsfw={false} candidates={56} tags={['음식','메뉴','움짤','고화질']} title="오늘 뭐먹지? 음식메뉴 월드컵" subTitle="먹고싶은게 너무 많아서 고민될 때, 저녁메뉴 정해드려요" thumbnail="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5Ekp/image/3Box4GGMUWQqdif4jg342HwgNOo.gif" entry={3} createdAt={1715142189540} playCount={1354} ></Entry>
            <Entry nsfw={false} candidates={38} tags={['발로란트','스킨','게임']} title="발로란트 칼 스킨 월드컵" subTitle="내게 가장 잘 맞는 칼 스킨은?? 2024.05.16 기준 미스트블룸 쿠나이까지 포함됐어요" thumbnail="https://valorantstrike.com/wp-content/uploads/2021/03/Valorant-Prime-2-Collection-Knife-HD.jpg" entry={4} createdAt={1715842189540} playCount={589} ></Entry>
            <Entry nsfw={false} candidates={24} tags={['동물','귀여움','고양이']} title="새끼 동물 월드컵" subTitle="취향에 가장 맞는 새끼동물을 뽑아보세요. (*주의* 제작자는 외모지상주의를 따지지 않기 때문에 포유류만 아니라 조류 파충류 양서류 어류 곤충 절지류도 엄연히 동물이기에 포함됩니다)" thumbnail="https://t1.daumcdn.net/news/202403/18/animalplanet/20240318110634501lexf.gif" entry={5} createdAt={1715142189540} playCount={219} ></Entry>
            <Entry nsfw={true} candidates={1024} tags={['애니','여캐']} title="[움짤] 애니 여자 캐릭터 월드컵 1024강" subTitle="[애니 여캐 움짤] 이중에 니 취향 한명쯤은 있겠지!　여러분이 좋아하는 캐릭터 댓글로 남겨주세요~" thumbnail="https://image.myanimelist.net/ui/xUjg9eFRCjwANWb4t4P8QcHDBk3fB1ElIFTzRGX0O2opFiv2ocUDYGsGj7hg-qgIfiIQf8BeV4MuHke2tyzaLr090os6K_Wy0AK3LfEzEII" entry={6} createdAt={1715142189540} playCount={1230} ></Entry>
        </div>
    )
}