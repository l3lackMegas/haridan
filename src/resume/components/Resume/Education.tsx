/* React Module */
import React, { Component } from "react";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

class Education extends Component {

    render() {

        return <>
            <ColumnResume title="Education">
                <CardInfo
                    title="Bangkok University"
                    date="2019 - 2023"
                    org="Pathum Thani - Thailand"
                >
                    <p>School of Information Technology and Innovation</p>
                    <p>Computer Science</p>
                </CardInfo>

                <CardInfo
                    title="Young Creator Camp #1"
                    date="2019"
                    org="Bangkok - Thailand"
                    link="https://ycc.in.th"
                >
                    <p>Change the dreamer to be an innovator.</p>
                </CardInfo>

                <CardInfo
                    title="Sahapanich Business Technological College"
                    date="2016 - 2018"
                    org="Bangkok - Thailand"
                >
                    <p>Computer Business</p>
                </CardInfo>

                <CardInfo
                    title="Sirirattanathorn School"
                    date="2013 - 2015"
                    org="Bangkok - Thailand"
                ></CardInfo>

                <CardInfo
                    title="Samahan Suksa School"
                    date="2005 - 2012"
                    org="Bangkok - Thailand"
                ></CardInfo>
            </ColumnResume>
        </>
    }

}

export default Education;