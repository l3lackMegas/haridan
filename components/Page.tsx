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
            </Head>
            <motion.div className={className} >
                <div style={{position: 'absolute', width: '100%', height: '100%', minHeight: '750px', overflow: 'hidden'}}>
                    <div className="sub">
                        <motion.div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/img/bg-blur.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPositionY: y / 2
                        }}
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={ isReady ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: .5 }}
                    >
                        <div className="sub" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #06243c)' }}>
                        {isReady && 
                            <motion.div className="scrollDown"
                                variants={animFadeIn}
                                initial="hidden"
                                animate="show"
                            >
                                <p style={{ fontSize: 15 }}>SCROLL DOWN</p>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </motion.div>
                        }
                        </div>
                    </motion.div>
                    </div>
                </div>
                <div className="container">
                    { children }
                </div>
            </motion.div>
            <Crefit/>
        </>
    }

}

export default Page;