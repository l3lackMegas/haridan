/* React Module */
import { Component } from "react";

/* Next Module */
import Head from "next/head"
import Link from "next/link"

/* External Module */
import { AnimationProps, motion } from 'framer-motion'

/* Components */

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
                <div style={{position: 'absolute', width: '100%', minHeight: '100vh', overflow: 'hidden'}}>
                    <div className="sub">
                        <motion.div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100vh',
                            backgroundImage: 'url(/img/bg-blur.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPositionY: y / 2
                        }}
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={ isReady ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: .5 }}
                    >
                        <div className="sub" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #06243c)' }}></div>
                    </motion.div>
                    </div>
                </div>
                <div className="container">
                    { children }
                </div>
            </motion.div>
            <div className="credit">
                <span>Ⓒ Since 2021. Powered by </span>
                <Link href="http://fb.com/Jaruwat.P">
                    <a target="_blank" rel="noreferrer">Jaruwat Pohong</a>
                </Link>
                <span>. </span>
                <p className="blockMobile">
                    <span>Background Image by </span>
                    <Link href="http://www.freepik.com">
                        <a target="_blank" rel="noreferrer">fanjianhua / Freepik</a>
                    </Link>
                </p>
            </div>
        </>
    }

}

export default Page;