/* React Module */
import React, { Component } from "react";

/* Next Module */
import Head from "next/head"

/* External Module */
import { AnimationProps, motion } from 'framer-motion'

/* Components */
import Credit from './MainLayout/Credit'

interface IReciept {
    isReady?: boolean
    className?: string,
    disableAnimExit?: boolean,
    animVariants?: AnimationProps["variants"],
    onSelected?: string,
    pageTitle: string
}

class Page extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {
        const { className, pageTitle, children } = this.props

        return <>
            <Head>
                <title>{ `${pageTitle} - Résumé`}</title>
            </Head>
            <motion.div className={`container ${className}`} >
                { children }
            </motion.div>
            <Credit/>
        </>
    }

}

export default Page;