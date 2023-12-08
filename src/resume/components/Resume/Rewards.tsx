/* React Module */
import React, { Component } from "react";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

class Rewards extends Component {

    render() {

        return <>
            <ColumnResume title="Rewards">
                <CardInfo
                    title="BUCreative Scholarship"
                    date="2019 - Present"
                    org="Bangkok University"
                    link={[{
                        name: "Scholarships Website",
                        link: "https://www.bu.ac.th/en/curriculum/bachelors-degree/scholarships"
                    }]}
                >
                </CardInfo>

                <CardInfo
                    title="Gold Medal, Invention Competition, Innovation"
                    date="2018"
                    org="Restaurant System"
                    link={[{
                        name: "View Certificate",
                        link: "/docs/Gold Medal, Invention Competition, Innovation.pdf"
                    }]}
                >
                </CardInfo>
            </ColumnResume>
        </>
    }

}

export default Rewards;