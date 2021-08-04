/* React Module */
import React, { Component } from "react";

/* Next Module */
import Link from "next/link"

/* External Module */

/* Components */
import Column2 from "../MainLayout/Column2";
import CardInfo from '../CardInfo'

interface IReciept {

}

class Works extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        return <>
            <Column2 title="Experiance">
                <CardInfo
                    title="BUMIT Website"
                    date="2021"
                    org="BUMIT (Bangkok University Multimedia Intelligent Technology)"
                    link="https://mit.bu.ac.th"
                >
                    <p>Implement all new website with Next.js</p>
                    <p>BUMIT&apos;s Lab Project</p>
                </CardInfo>

                <CardInfo
                    title="Flight - Visualization"
                    date="2020 - 2021"
                    org="BUMIT (Bangkok University Multimedia Intelligent Technology)"
                    link="https://mit.bu.ac.th/visualization"
                >
                    <p>Re-Design Frontend</p>
                    <p>BUMIT&apos;s Lab Project</p>
                </CardInfo>

                <CardInfo
                    title="FPSMember - Website Team"
                    date="2020 - 2021"
                    org="FPSThailand"
                    link="https://member.fpsthailand.com"
                >
                    <p>Freelance Work</p>
                    <p>Frontend Developer</p>
                </CardInfo>
            </Column2>
        </>
    }

}

export default Works;