// /* Next Module */
export interface WorkStructure {
    id: number
    title: string
    describe?: string
    img: string
    tags?: Array<string>
    date: {
        from: Date | string
        to: Date | string
    }
    link: string
    imageList: Array<string>
    color?: string
}

type Data = {
    workItem: Array<WorkStructure>
}

export default function WorkListData() {
    return {
        workItem: workItems,
    };
}

let workItems: Array<WorkStructure> = [
    {
        id: 1,
        title: "FPSThailand Member",
        describe: `This project was commissioned by FPSThailand to allow their Twitch members to participate in random prize giveaways from their favorite streamers. I was involved in the design and development of the frontend and the prize giveaway algorithm.`,
        img: "/img/works/fpsmember/logo.png",
        tags: [
            "JavaScript",
            "Frontend Dev",
            "Commission"
        ],
        date: {
            from: new Date(2020, 2, 30),
            to: new Date(2022, 1, 1)
        },
        link: 'https://member.fpsthailand.com/',
        imageList: ["https://www.youtube.com/watch?v=b7fKYZ81JKg"],
        color: '#181818'
    },
    {
        id: 2,
        title: "Website BUMIT",
        describe: `This project was developed during my sophomore year of undergraduate studies. I was involved in the development of the frontend and integration with the backend system.`,
        img: "/img/works/website-bumit/logo.png",
        tags: [
            "Next.js",
            "Frontend Dev",
            "Learning"
        ],
        date: {
            from: new Date(2021, 5, 30),
            to: new Date(2022, 4, 30)
        },
        link: 'https://mit.bu.ac.th/',
        imageList: [
            "/img/works/website-bumit/1.png",
            "/img/works/website-bumit/3.png",
            "/img/works/website-bumit/4.png",
            "/img/works/website-bumit/5.png",
            "/img/works/website-bumit/6.png",
            "/img/works/website-bumit/7.png",
            "/img/works/website-bumit/8.png",
            // "/img/works/website-bumit/9.png",
            "/img/works/website-bumit/10.png",
            "/img/works/website-bumit/11.png",
            "/img/works/website-bumit/12.png",
            "/img/works/website-bumit/13.png"
        ],
        color: 'white'
    },
    {
        id: 3,
        title: "Flight Visualization",
        describe: `This project was developed during my sophomore year of undergraduate studies. I was involved in the development of the frontend and integration with the backend system.`,
        img: "/img/works/flight-visualization/logo.png",
        date: {
            from: new Date(2021, 0, 30),
            to: new Date(2021, 7, 30)
        },
        tags: [
            "React.js",
            "Framer-Motion",
            "Frontend Dev",
            "Learning"
        ],
        link: 'https://mit.bu.ac.th/visualization/',
        imageList: [
            "/img/works/flight-visualization/1.png",
            "/img/works/flight-visualization/2.png",
            "/img/works/flight-visualization/3.png",
            "/img/works/flight-visualization/4.png",
            "/img/works/flight-visualization/5.png",
            "/img/works/flight-visualization/6.png",
            "/img/works/flight-visualization/7.png",
            "/img/works/flight-visualization/8.png",
            "/img/works/flight-visualization/9.png",
            "/img/works/flight-visualization/10.png",
            "/img/works/flight-visualization/11.png",
            "/img/works/flight-visualization/12.png",
            "/img/works/flight-visualization/13.png",
            "/img/works/flight-visualization/14.png",
            "/img/works/flight-visualization/15.png"
        ],
        color: '#181818'
    }
];