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
        pin: true,
        id: 11,
        title: "ImaginAsia 2024",
        describe: `This project was a commissioned work from the Department of Creative Arts Faculty of Fine and Applied Arts, Chulalongkorn University Bangkok University.

ImaginAsia 2024 is the international creative arts & design activities sponsored by the “Princess Sirivannavari Cultivated Arts Foundation” and “The Doctor and Master of Fine and Applied Arts Programs in Creative Arts, Faculty of Fine and Applied Arts, Chulalongkorn University”

The project had a total of 4 team members, and I was responsible for developing the entire Front-office.`,
        // img: "/img/works/flight-visualization/logo.png",
        img: "/img/works/imaginasia2024/01.png",
        date: {
            from: new Date(2024, 5, 1),
            to: new Date(2024, 7, 31)
        },
        tags: [
            "Next.js",
            "Framer-Motion",
            "Frontend Dev",
            "Commission"
        ],
        link: 'https://imaginasia2024.art/',
        imageList: [
            "/img/works/imaginasia2024/01.png",
            "/img/works/imaginasia2024/02.png",
            "/img/works/imaginasia2024/03.png",
            "/img/works/imaginasia2024/04.png"
        ],
        color: '#a98573'
    },
    {
        pin: true,
        id: 10,
        title: "BU ShowPro",
        describe: `This project was a commissioned work from the School of Digital Media and Cinematic Arts, Digital Media program, Bangkok University. It was an exhibition showcasing the works of students from each year.

The project had a total of 4 team members, and I was responsible for developing the entire Front-office.`,
        // img: "/img/works/flight-visualization/logo.png",
        img: "/img/works/bu-showpro/01.png",
        date: {
            from: new Date(2024, 5, 1),
            to: new Date(2024, 7, 31)
        },
        tags: [
            "React.js",
            "Framer-Motion",
            "Frontend Dev",
            "Commission"
        ],
        link: 'https://dmthesis.bu.ac.th/',
        imageList: [
            "/img/works/bu-showpro/01.png",
            "/img/works/bu-showpro/02.png",
            "/img/works/bu-showpro/03.png",
            "/img/works/bu-showpro/04.png",
            "/img/works/bu-showpro/05.png",
            "/img/works/bu-showpro/06.png",
            "/img/works/bu-showpro/07.png",
            "/img/works/bu-showpro/08.png",
        ],
        color: '#6f5d2c'
    },
    {
        id: 7,
        title: "Film Reporter Assistance",
        describe: `This is my undergraduate thesis project. It took three people to develop this project.
Project Description

        In order to reduce unnecessary steps and facilitate the work of various departments, the Film's Reporter Assistance system was developed. This system helps store footage files and save details into a database. It also uses artificial intelligence to analyze various elements within the footage. The program is designed to be easy to use for storing files and can be accessed quickly. This allows reporters to finish their work faster without having to manage folders. They can simply drag and drop footage files, preview the content, and type in the file details immediately.`,
        img: "/img/works/film-reporter-assistance/01.png",
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
        color: '#0d3799'
    },
    {
        id: 5,
        title: "Valorant TH Ignition - Verify Riot ID",
        describe: `This project is an identity verification system using Riot ID for the Valorant TH Ignition community.

I was involved in the development of the entire frontend.`,
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
        color: '#dc3d4b'
    },
    {
        id: 6,
        title: "Flutter Image Color Summarizer",
        describe: `This project is an experiment to create color summaries for 50 images simultaneously. Optimization is done to enable multi-threaded operation to reduce UI rendering latency.`,
        img: "/img/works/flutter-image-color-summarizer/02.png",
        tags: [
            "Flutter",
            "Learning",
            "Hobby",
            "Experiment"
        ],
        date: {
            from: new Date(2023, 8, 14),
            to: new Date(2023, 8, 14)
        },
        
        imageList: [
            "https://youtube.com/watch?v=L0RlK03-yQ8",
        ],
        color: 'black'
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
        id: 4,
        title: "Shortest Path - Homework",
        describe: `This project was an assignment for an algorithms course. My partner and I paired up to write an algorithm and create a simple visualization using React for a classroom presentation.`,
        img: "/img/works/maze-homework/05.png",
        tags: [
            "Vanilla JS",
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
        color: '#a37e15'
    },
    {
        id: 9,
        title: "Dyztiny Store",
        describe: `This project is a concept design where I conceptualized and designed the web pages myself. It serves as an experiment in utilizing Framer motion within Next.js.`,
        img: "/img/works/dyz-store/02.png",
        tags: [
            "Next.js",
            "Framer-motion",
            "Frontend-dev",
            "Mockup",
            "Learning",
        ],
        link: 'https://dyz-store.jaruwat.dev/',
        date: {
            from: new Date(2021, 5, 2),
            to: new Date(2021, 5, 2)
        },
        
        imageList: [
            "/img/works/dyz-store/01.png",
            "/img/works/dyz-store/02.png",
            "/img/works/dyz-store/03.png",
            "/img/works/dyz-store/04.png",
            "/img/works/dyz-store/05.png",
            "/img/works/dyz-store/06.png",
            "/img/works/dyz-store/07.png",
            "/img/works/dyz-store/08.png",
            "/img/works/dyz-store/09.png",
            "/img/works/dyz-store/10.png",
            "/img/works/dyz-store/11.png",
            "/img/works/dyz-store/12.png",
        ],
        color: 'rgba(1,29,45)'
    },
    {
        pin: true,
        id: 1,
        title: "FPSThailand Member",
        describe: `This project was commissioned by FPSThailand to allow their Twitch members to participate in random prize giveaways from their favorite streamers.

I was involved in the design and development of the frontend and the prize giveaway algorithm.`,
        img: "/img/works/fpsmember/01.png",
        tags: [
            "Vanilla JS",
            "Frontend Dev",
            "Commission"
        ],
        date: {
            from: new Date(2020, 2, 30),
            to: new Date(2022, 1, 1)
        },
        link: 'https://member.fpsthailand.com/',
        imageList: ["https://www.youtube.com/watch?v=b7fKYZ81JKg"],
        color: '#000929'
    },
    {
        id: 2,
        title: "Website BUMIT",
        describe: `This project was developed during my sophomore year of undergraduate studies.

I was involved in the development of the frontend and integration with the backend system.`,
        img: "/img/works/website-bumit/12.png",
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
        color: '#262045'
    },
    {
        id: 3,
        title: "Flight Visualization",
        describe: `This project was developed during my sophomore year of undergraduate studies.

I was involved in the development of the frontend and integration with the backend system.`,
        // img: "/img/works/flight-visualization/logo.png",
        img: "/img/works/flight-visualization/1.png",
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
        color: '#493416'
    }
];
