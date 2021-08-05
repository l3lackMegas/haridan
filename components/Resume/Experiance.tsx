/* React Module */
import React, { Component } from "react";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

class Works extends Component {

    render() {

        return <>
            <ColumnResume title="Experiance">
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
            </ColumnResume>
        </>
    }

}

export default Works;