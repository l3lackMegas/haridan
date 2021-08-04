/* React Module */
import React, { Component } from "react";

/* Next Module */
import Link from "next/link"

/* External Module */
import { AnimationProps, motion } from 'framer-motion'

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
                <CardInfo title="FPSMember - Website Team" date="2000 - Present" org="FPSThailand">
                    <p>ออกแบบ Frontend และระบบสุ่มของรางวัล</p>
                </CardInfo>
            </Column2>
        </>
    }

}

export default Education;