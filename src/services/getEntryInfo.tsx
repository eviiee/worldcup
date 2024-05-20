import Comment from "@/model/comment";
import EntryInfo from "@/model/entryInfo";


export default async function getEntryInfo(entryIndex: number): Promise<EntryInfo> {

    const entryPicker : {[key: number] : number} = {
        1 : 159,
        2: 62,
        3: 56,
        4: 38,
        5: 24,
        6: 1024,
    }

    let candidates = [
        {
            key: 1,
            name: '남돌1',
            image: 'https://s3.orbi.kr/data/file/united/939d72ba961db3455fda0532613ae0e5.jpeg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌2',
            image: 'https://img.segye.com/content/image/2021/05/21/20210521511441.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌3',
            image: 'https://img.wkorea.com/w/2022/02/style_62149da627752.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌4',
            image: 'https://cdn.hankyung.com/photo/202201/BF.28471701.1.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌5',
            image: 'https://img.allurekorea.com/allure/2023/06/style_64901969ee834-1200x1200.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌6',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmUA22o4iAfixZGVSpHon34R3VVeFsJg_0jbZIV3cdQ&s',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌7',
            image: 'https://thumb.mtstarnews.com/06/2023/05/2023051207121045581_1.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌8',
            image: 'https://thumb.pann.com/tc_480/http://fimg5.pann.com/new/download.jsp?FileID=60478428',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌9',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHDyaee1lpx78FNJWUP9us4J82Y69Xuh8VPewJ8-Dmw&s',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌10',
            image: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/01/25/cbeeb031-61a4-41bb-97c4-706c6b2e66c6.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌11',
            image: 'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202308/08/kinolights/20230808165003142stcx.jpg',
            wins: 100,
        },
        {
            key: 1,
            name: '남돌12',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9o4AnAoh79boajNvzM-GmtMO91FXv0G3rM4cRqlos2g&s',
            wins: 10,
        },
        {
            key: 1,
            name: '남돌13',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNAjiQZ9AfilrosKMgWHM-uXuPPcQJ1e2X4jrtkMV8g&s',
            wins: 5,
        },
        {
            key: 1,
            name: '남돌14',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjR8G02uO7ZdEzf65Jz1q5hIK7fKBjFto7MWABSiBYg&s',
            wins: 3,
        },
        {
            key: 1,
            name: '남돌15',
            image: 'https://cdn.k-trendynews.com/news/photo/202202/139026_178864_3913.jpg',
            wins: 0,
        },
        {
            key: 1,
            name: '남돌16',
            image: 'https://i.pinimg.com/originals/a5/7f/73/a57f73666e9a16bafe767b5bc3b20005.jpg',
            wins: 10,
        },
        {
            key: 1,
            name: '남돌17',
            image: 'https://i.pinimg.com/originals/a5/7f/73/a57f73666e9a16bafe767b5bc3b20005.jpg',
            wins: 10,
        },
    ]

    for (let i = 18; i < entryPicker[entryIndex] + 1 ; i++) {
        candidates.push({
            key: 1,
            name: `남돌${i}`,
            image: 'https://i.pinimg.com/originals/a5/7f/73/a57f73666e9a16bafe767b5bc3b20005.jpg',
            wins: 0
        })
    }

    const comments: Comment[] = [
        {
            key: 0,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: '세븐틴 겁나많누',
            likes: 0,
            disLikes: 0,
        },
        {
            key: 1,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: '세븐틴사랑해ㅐㅐㅐㅐ영원해내사랑정하니',
            likes: 0,
            disLikes: 0,
        },
        {
            key: 2,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: 'ㅎㅎㅎㅎ',
            likes: 0,
            disLikes: 0,
        },
        {
            key: 3,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: '박원빈 이라 쓰고 개존잘이라구 읽는다...',
            likes: 0,
            disLikes: 0,
        },
        {
            key: 4,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: `힝... 스키즈 아이엔 없나요?
            아... 그래도 세븐틴 원우는 인정입니다!
            사실 예전에 캐럿이 었고 최애가 원우 였느데 여기서 다시 보게 될 줄은 몰랐네요... 게임보이 안경 고`,
            likes: 0,
            disLikes: 0,
        },
        {
            key: 5,
            author: {
                key: 0,
                name: '익명',
                profile: null,
            },
            createdAt: 1715842189540,
            content: '워누ㅜㅜㅜ밍구ㅜ 세봉이들아 사랑한다!!세븐틴-마에스트로 많이 들어주세요!!많관부!!!',
            likes: 0,
            disLikes: 0,
        },
    ]

    return {
        index: 1,
        createdAt: 1715842189540,
        thumbnail: 'https://i.namu.wiki/i/KcKj5aPSgxIglfCU91Ots3LZWHOCJRYx2uryWZFAF1dTVwFzzMHE0Dzq7iP0y6N8u7K-QIfBd9t7SOa9fKrStA.gif',
        title: '남돌 이상형 월드컵 (움짤)',
        subTitle: "남자 아이돌 '얼굴'만 보고 판단하세요",
        description: "남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 남자 아이돌 '얼굴'만 보고 판단하세요 ",
        tags: ['남돌', '아이돌', '고화질', '움짤'],
        likes: 1548,
        disLikes: 23,
        playCount: 5584,
        author: {
            key: 1,
            name: '월드컵메이커',
            profile: 'https://i.pinimg.com/736x/22/5e/6c/225e6c8db24c0c0237c98314b5bd6083.jpg',
        },
        comments: comments,
        candidates: candidates,
        nsfw: false,
    }
}