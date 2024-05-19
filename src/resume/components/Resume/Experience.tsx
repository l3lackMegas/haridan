/* React Module */
import React, { Component } from "react";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

class Experience extends Component {

    render() {

        return <>
            <ColumnResume title="Experience">
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

                <CardInfo
                    title="internship at Meteorological Department of Thailand."
                    date="2018 (March - May)"
                    org="Telecommunication Technology Sub-division"
                    link={[
                        "https://tmd.go.th",
                        {
                            name: 'View Internship-Certificate',
                            link: "/docs/Internship-Certificate.pdf"
                        }
                    ]}
                >
                    <p>I work as IT Support staff here.</p>
                    <p>My duty is Maintain the IT system in the organization.</p>
                </CardInfo>
            </ColumnResume>
        </>
    }

}

export default Experience;