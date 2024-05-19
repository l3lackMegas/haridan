// /* Next Module */
export interface WorkStructure {
    pin?: boolean,
    id: number
    title: string
    describe?: string
    img: string
    tags?: Array<string>
    date: {
        from: Date | string
        to: Date | string
    }
    link?: string
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
        id: 7,
        title: "Film Reporter Assistance",
        describe: `This is my undergraduate thesis project. It took three people to develop this project.
Project Description
        In order to reduce unnecessary steps and facilitate the work of various departments, the Film's Reporter Assistance system was developed. This system helps store footage files and save details into a database. It also uses artificial intelligence to analyze various elements within the footage. The program is designed to be easy to use for storing files and can be accessed quickly. This allows reporters to finish their work faster without having to manage folders. They can simply drag and drop footage files, preview the content, and type in the file details immediately.`,
        img: "/img/works/film-reporter-assistance/logo-white.png",
        tags: [
            "Next.js",
            "Fastify",
            "Prisma",
            "Google Vision API",
            "Learning",
        ],
        date: {
            from: new Date(2024, 1, 1),
            to: new Date(2024, 1, 1)
        },
        
        imageList: [
            "https://www.youtube.com/watch?v=X_Sy1vVP_y8",
        ],
        color: '#191c23'
    },
    {
        id: 6,
        title: "Flutter Image Color Summarizer",
        describe: `This project is an experiment to create color summaries for 50 images simultaneously. Optimization is done to enable multi-threaded operation to reduce UI rendering latency.`,
        img: "/img/works/flutter-image-color-summarizer/logo.png",
        tags: [
            "Flutter",
            "Learning",
            "Hobby"
        ],
        date: {
            from: new Date(2023, 8, 14),
            to: new Date(2023, 8, 14)
        },
        
        imageList: [
            "https://youtube.com/watch?v=L0RlK03-yQ8",
        ],
        color: 'white'
    },
    {
        id: 5,
        title: "Valorant TH Ignition - Verify Riot ID",
        describe: `This project is an identity verification system using Riot ID for the Valorant TH Ignition community. I was involved in the development of the entire frontend.`,
        img: "/img/works/valorantth-ignition/03.png",
        tags: [
            "React.js",
            "Framer-motion",
            "Hobby"
        ],
        date: {
            from: new Date(2023, 5, 31),
            to: new Date(2023, 5, 31)
        },
        link: 'https://rso.vlr.in.th/oauth/finished',
        imageList: [
            "https://www.youtube.com/watch?v=Q_W3r4n66R8",
            "/img/works/valorantth-ignition/01.png",
            "/img/works/valorantth-ignition/02.png",
            "/img/works/valorantth-ignition/03.png",
            "/img/works/valorantth-ignition/04.png",
        ],
        color: '#181818'
    },
    {
        id: 8,
        title: "Whiteboard",
        describe: `This project was an assignment for a university course. It utilized Konva.js to implement a board and Socket.io to allow multiple users to join a room and interact with the same board`,
        img: "/img/works/whiteboard/01.png",
        tags: [
            "Fastify",
            "Konva.js",
            "Learning",
        ],
        link: 'https://whiteboard.jaruwat.dev/',
        date: {
            from: new Date(2023, 5, 2),
            to: new Date(2023, 5, 2)
        },
        
        imageList: [
            "https://www.youtube.com/watch?v=ajyAJZkOS2w",
            "/img/works/whiteboard/01.png",
            "/img/works/whiteboard/02.png",
            "/img/works/whiteboard/03.png",
        ],
        color: '#f5f5f5'
    },
    {
        pin: true,
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
        pin: true,
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
        pin: true,
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
    },
    {
        id: 4,
        title: "Shortest Path - Homework",
        describe: `This project was an assignment for an algorithms course. My partner and I paired up to write an algorithm and create a simple visualization using React for a classroom presentation.`,
        img: "/img/works/maze-homework/05.png",
        tags: [
            "JavaScript",
            "Visualization",
            "Learning"
        ],
        date: {
            from: new Date(2022, 11, 8),
            to: new Date(2022, 11, 8)
        },
        link: 'https://maze-hw10.pages.dev/',
        imageList: [
            "/img/works/maze-homework/01.png",
            "/img/works/maze-homework/02.png",
            "/img/works/maze-homework/03.png",
            "/img/works/maze-homework/04.png",
            "/img/works/maze-homework/05.png"
        ],
        color: '#181818'
    }
];