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

class Education extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        return <>
            <Column2 title="Education">
                <CardInfo
                    title="Bangkok University"
                    date="2019 - Present"
                    org="Pathum Thani - Thailand"
                >
                    <p>School of Information Technology and Innovation</p>
                    <p>Computer Science</p>
                </CardInfo>

                <CardInfo
                    title="Young Creator Camp #1"
                    date="2019"
                    org="Bangkok - Thailand"
                >
                    <p>Change the dreamer to be an innovator.</p>
                </CardInfo>

                <CardInfo
                    title="Sahapanich Business Technological College"
                    date="2016 - 2018"
                    org="Bangkok - Thailand"
                >
                    <p>Compoter Business</p>
                </CardInfo>

                <CardInfo
                    title="Sirirattanathorn School"
                    date="2013 - 2015"
                    org="Bangkok - Thailand"
                >
                    <p>Compoter Business</p>
                </CardInfo>

                <CardInfo
                    title="Samahan Suksa School"
                    date="2005 - 2012"
                    org="Bangkok - Thailand"
                >
                    <p>Compoter Business</p>
                </CardInfo>
            </Column2>
        </>
    }

}

export default Education;