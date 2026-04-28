/* React Module */
import React, { Component } from "react";
import { motion, Variants } from "framer-motion";

/* Components */
import ColumnResume from "../MainLayout/ColumnResume";
import CardInfo from '../CardInfo'

interface ResumeStructure {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    describe?: string | Array<string>
}

interface IReciept {
    title: string
    data?: Array<ResumeStructure> | any
}

const listVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.5, 0.025, 0, 1] },
    },
}

class Resume extends Component<IReciept> {

    render() {

        const { title, data } = this.props;

        return <>
            <ColumnResume title={title}>
                <motion.div
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    { data.map((ctx: ResumeStructure, i: number)=>{
                        return <motion.div key={i} variants={itemVariants}>
                            <CardInfo
                                title={ctx.title}
                                date={ctx.date}
                                org={ctx.org}
                                link={ctx.link}
                            >
                                {ctx.describe && typeof(ctx.describe) == "string" &&
                                    <p>{ctx.describe}</p>
                                }

                                {ctx.describe && typeof(ctx.describe) == "object" &&
                                    ctx.describe.map((dItem, index)=>{
                                        return <p key={index}>{dItem}</p>
                                    })
                                }
                            </CardInfo>
                        </motion.div>
                    })}
                </motion.div>
            </ColumnResume>
        </>
    }

}

export default Resume;