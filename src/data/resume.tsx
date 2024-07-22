import WorkListData, { WorkStructure } from "./work-list"

// /* Next Module */

interface ResumeStructure {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    describe?: string | Array<string>
}

interface ResumeObject {
    experience: Array<ResumeStructure>
    education: Array<ResumeStructure>
    rewards: Array<ResumeStructure>
}

type Data = {
    workItem: Array<WorkStructure>
    resume: ResumeObject
}

export default function LandingData() {
    return {
        workItem: workItems,
        resume: resumeItem
    };
}

let workItems: Array<WorkStructure> = WorkListData().workItem.filter((item: WorkStructure) => {
    return item.pin === true
}),
resumeItem: ResumeObject = {
    experience: [
        {
            title: 'Full Stack Developer',
            date: '2024 - Present',
            org: 'Orisma Technology Co., Ltd.',
            link: 'https://www.orisma.com/',
            describe: [
                'Develop products for company and their customers',
                '(Taximail was merging to Orisma Technology)'
            ]
        },
        {
            title: 'Software Developer',
            date: '2022 - 2024',
            org: 'Taximail Co.,Ltd.',
            link: 'https://taximail.com/',
            describe: [
                'Develop products for company and their customers',
                'Junior Full Stack Developer',
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
            title: 'Internship at Meteorological Department of Thailand.',
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
            date: '2019 - 2023',
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
            date: '2005 - 2012',
            org: 'Bangkok - Thailand',
            link: 'https://samaharn.thai.ac'
        }
    ]
}