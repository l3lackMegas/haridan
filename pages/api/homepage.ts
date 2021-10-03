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

type Data = {
    workItem: Array<WorkStructure>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        workItem: workItems
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
]