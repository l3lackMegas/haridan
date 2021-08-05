/* React Module */
import React, { Component } from "react";

/* Next Module */
import Head from "next/head"
import Link from "next/link"

/* External Module */
import { AnimationProps, motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Crefit from './MainLayout/Credit'

const animFadeIn = {
    hidden: {
        opacity: 0,
        transition: {
            duration: .1
        }
    },

    show: {
        opacity: 1,
        transition: {
            duration: .25
        }
    }
}

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
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    state = {
        isMounted: false,
        y: 0
    }

    componentDidMount() {
        this.setState({
            isMounted: true,
            y: window.scrollY
        })
        window.addEventListener("scroll", this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler() {
        this.setState({ y: window.scrollY })
    }


    render() {
        const { isReady, className, pageTitle, children } = this.props

        const { isMounted, y } = this.state

        return <>
            <Head>
                <title>{ `${pageTitle} - Résumé`}</title>
                <link rel="icon" href="/img/favicon.jpg" type="image/gif" sizes="16x16"/>
            </Head>
            <motion.div className={`container ${className}`} >
                { children }
            </motion.div>
            <Crefit/>
        </>
    }

}

export default Page;