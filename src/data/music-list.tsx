// /* Next Module */
export interface MusicStructure {
    pin?: boolean
    id: number
    title: string
    url: string
    videoUrl?: string
    author: string
}

type Data = {
    songList: Array<MusicStructure>
}

export default function MusicListData() {
    return {
        songList: songList,
    };
}

let songList: Array<MusicStructure> = [
    {
        pin: true,
        id: 3,
        title: "Utopiosphere",
        url: "https://youtu.be/X4sFRgbtvDQ",
        author: "Mili",
    },
    {
        pin: true,
        id: 19,
        title: "Cinderella Step",
        url: "https://youtu.be/q7LWz0QzOrI",
        author: "Daoko",
    },
    

    {
        id: 20,
        title: "ゲシュタルト",
        url: "https://youtu.be/B-wmpKLLv9A",
        videoUrl: "https://youtu.be/ac6ImT50j9s",
        author: "KAF",
    },
    {
        id: 4,
        title: "RTRT",
        url: "https://youtu.be/uDfRUdbwpVY",
        author: "Mili",
    },{
        id: 8,
        title: "Astrogirl",
        url: "https://youtu.be/JB3C9i2TcKM",
        videoUrl: "https://youtu.be/R8y1aWMlPOs",
        author: "Tsukumo Sana & Snail’s House",
    },
    {
        id: 1,
        title: "Lone Digger",
        url: "https://youtu.be/Mq6xQHInaHI",
        videoUrl: "https://youtu.be/UbQgXeY_zi4",
        author: "Caravan Palace",
    },
    {
        id: 2,
        title: "惑星ラビット (feat. TORIENA)",
        url: "https://youtu.be/m_G5RMsteDk",
        author: "Yunomi",
    },
    {
        id: 5,
        title: "Common World Domination (feat. HATSUNE MIKU)",
        url: "https://youtu.be/Ecg6ziEJ-MI",
        author: "PinocchioP",
    },
    {
        id: 21,
        title: "モンタージュ",
        url: "https://youtu.be/5FnZ83UvRts",
        author: "KAF",
    },
    {
        id: 6,
        title: "livetune feat. 初音ミク「Redial」",
        url: "https://youtu.be/8JUcFfxL9cU",
        videoUrl: "https://youtu.be/243vPl8HdVk",
        author: "livetune",
    },
    {
        id: 7,
        title: "GHOST FOOD (feat. TORIENA)",
        url: "https://youtu.be/Lh1k2cnjknk",
        author: "Moe Shop",
    },
    {
        id: 9,
        title: "Time-out",
        url: "https://youtu.be/uFwAfCXznUg",
        author: "Nyarons",
    },
    {
        id: 22,
        title: "奇縁ロマンス - Kien Romance",
        url: "https://youtu.be/9GGDbVHz3yU",
        videoUrl: "https://youtu.be/wlTMXFbPfKw",
        author: "ナナヲアカリ",
    },
    {
        id: 23,
        title: "奇縁ロマンス - Kien Romance",
        url: "https://youtu.be/GkFqe3tZVpg",
        author: "WEDNESDAY CAMPANELLA",
    },
    {
        id: 10,
        title: "Night Club Junkie",
        url: "https://youtu.be/VTMeQcgOdK0",
        author: "YUC'e",
    },
    {
        id: 11,
        title: "Doggy god's street",
        url: "https://youtu.be/MWb_OkT6XZk",
        videoUrl: "https://youtu.be/wLNTAMY1NZA",
        author: "Inugami Korone",
    },
    {
        id: 12,
        title: "YELLOW",
        url: "https://youtu.be/-dUZabw9uGc",
        videoUrl: "https://youtu.be/1_lap6dzSUc",
        author: "YOH KAMIYAMA",
    },
    {
        id: 13,
        title: "宵々古今 - Yoiyoi Kokon",
        url: "https://youtu.be/M_I6tASrnwk",
        videoUrl: "https://youtu.be/8IK6eLTNV1k",
        author: "REOL",  
    },
    {
        id: 14,
        title: "アイドル",
        url: "https://youtu.be/m9SMT5ipbxk",
        videoUrl: "https://youtu.be/ZRtdQ81jPUQ",
        author: "YOASOBI",
    },
    {
        id: 24,
        title: "UNDEAD",
        url: "https://youtu.be/BryspbM6s3E",
        videoUrl: "https://youtu.be/jAAZDIGWcio",
        author: "YOASOBI",
    },
    {
        id: 25,
        title: "メズマライザー",
        url: "https://youtu.be/ibjWftkJrd4",
        videoUrl: "https://youtu.be/19y8YTbvri8",
        author: "サツキ 初音ミク & 重音テト",
    },
    {
        id: 26,
        title: "スターマイン",
        url: "https://youtu.be/hTnpGG4B5HI",
        videoUrl: "https://youtu.be/YB_St-YN3Y8",
        author: "Da-iCE",
    },
    {
        id: 15,
        title: "Shelter",
        url: "https://youtu.be/5UZ4V16d8eU",
        videoUrl: "https://youtu.be/fzQ6gRAEoy0",
        author: "Porter Robinson & Madeon",
    },
    {
        id: 16,
        title: "M@GICAL☆CURE! LOVE ♥ SHOT! / SAWTOWNE feat. Hatsune Miku",
        url: "https://youtu.be/17JZKJlx5uI",
        videoUrl: "https://youtu.be/LaEgpNBt-bQ",
        author: "SAWTOWNE",
    },
    {
        id: 17,
        title: "粛聖!! ロリ神レクイエム☆",
        url: "https://youtu.be/Ci_zad39Uhw",
        videoUrl: "https://youtu.be/Ci_zad39Uhw",
        author: "Ui Shigure",
    },
    {
        id: 18,
        title: "唱 - Show",
        url: "https://youtu.be/vwZAqxL8rgs",
        videoUrl: "https://youtu.be/pgXpM4l_MwI",
        author: "Ado",
    },
    {
        id: 18,
        title: "それは小さな光のような - Sorewa Chiisana Hikarinoyouna",
        url: "https://youtu.be/5_pdEtZS08A",
        videoUrl: "https://youtu.be/M1ajQuujwKk",
        author: "SAYURI",
    },
];
