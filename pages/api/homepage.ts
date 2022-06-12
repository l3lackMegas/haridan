/* Next Module */
import type { NextApiRequest, NextApiResponse } from 'next'

interface WorkStructure {
    id: number
    title: string
    img: string
    date: {
        from: Date | string
        to: Date | string
    }
    link: string
    imageList: Array<string>
    color?: string
}

interface ResumeStructure {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    describe?: string | Array<string>
}

interface ResumeObject {
    experiance: Array<ResumeStructure>
    education: Array<ResumeStructure>
    rewards: Array<ResumeStructure>
}

type Data = {
    workItem: Array<WorkStructure>
    resume: ResumeObject
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        workItem: workItems,
        resume: resumeItem
    })
}

let workItems: Array<WorkStructure> = [
    {
        id: 1,
        title: "FPSThailand Member",
        img: "/img/works/fpsmember/logo.png",
        date: {
            from: new Date(2020, 2, 30),
            to: new Date()
        },
        link: 'https://member.fpsthailand.com/',
        imageList: ["https://www.youtube.com/watch?v=b7fKYZ81JKg"]
    },
    {
        id: 2,
        title: "Website BUMIT",
        img: "/img/works/website-bumit/logo.png",
        date: {
            from: new Date(2021, 0, 30),
            to: new Date()
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
            "/img/works/website-bumit/9.png",
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
        img: "/img/works/flight-visualization/logo.png",
        date: {
            from: new Date(2021, 0, 30),
            to: new Date(2021, 7, 30)
        },
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
        ]
    }
],
resumeItem: ResumeObject = {
    experiance: [
        {
            title: 'Research and Development',
            date: '2022 - Present',
            org: 'Taximail Co.,Ltd.',
            link: 'https://taximail.com/',
            describe: [
                'Develop products for company and their customers',
                'Junior Full-stack Developer',
            ]
        },
        {
            title: 'BUMIT Website',
            date: '2021',
            org: 'BUMIT (Bangkok University Multimedia Intelligent Technology)',
            link: 'https://mit.bu.ac.th',
            describe: [
                'Implement all new website with Next.js',
                "BUMIT's Lab Project"
            ]
        },
        {
            title: 'Flight - Visualization',
            date: '2020 - 2021',
            org: 'BUMIT (Bangkok University Multimedia Intelligent Technology)',
            link: 'https://mit.bu.ac.th/visualization',
            describe: [
                'Re-Design Frontend',
                "BUMIT's Lab Project"
            ]
        },
        {
            title: 'FPSMember - Website Team',
            date: '2020 - 2021',
            org: 'FPSThailand',
            link: 'https://member.fpsthailand.com',
            describe: [
                'Freelance Work',
                'Frontend Developer'
            ]
        },
        {
            title: 'Intership at Meteorological Department of Thailand.',
            date: '2018 (March - May)',
            org: 'Telecommunication Technology Sub-division',
            link: [
                "https://tmd.go.th",
                {
                    name: 'View Internship-Certificate',
                    link: "/docs/Internship-Certificate.pdf"
                }
            ],
            describe: [
                'I work as IT Support staff here.',
                'My duty is Maintain the IT system in the organization.'
            ]
        },
    ],
    rewards: [
        {
            title: 'BUCreative Scholarship',
            date: '2019 - 2022',
            org: 'Bangkok University',
            link: [
                {
                    name: "Scholarships Website",
                    link: "https://www.bu.ac.th/en/curriculum/bachelors-degree/scholarships"
                }
            ]
        },
        {
            title: 'Gold Medal, Invention Competition, Innovation',
            date: '2018',
            org: 'Restaurant System',
            link: [
                {
                    name: "View Certificate",
                    link: "/docs/Gold Medal, Invention Competition, Innovation.pdf"
                }
            ]
        }
    ],
    education: [
        {
            title: 'Bangkok University',
            date: '2019 - Present',
            org: 'Pathum Thani - Thailand',
            link: 'https://www.bu.ac.th',
            describe: [
                'School of Information Technology and Innovation',
                'Computer Science'
            ]
        },
        {
            title: 'Young Creator Camp #1',
            date: '2019',
            org: 'Bangkok - Thailand',
            link: 'https://ycc.in.th',
            describe: [
                'Change the dreamer to be an innovator.'
            ]
        },
        {
            title: 'Sahapanich Business Technological College',
            date: '2016 - 2018',
            org: 'Bangkok - Thailand',
            link: 'https://saha.ac.th',
            describe: [
                'Computer Business'
            ]
        },
        {
            title: 'Sirirattanathorn School',
            date: '2013 - 2015',
            org: 'Bangkok - Thailand',
            link: 'https://srt.ac.th'
        },
        {
            title: 'Samahan Suksa School',
            date: '2013 - 2015',
            org: 'Bangkok - Thailand',
            link: 'https://samaharn.thai.ac'
        }
    ]
}