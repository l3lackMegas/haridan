/* Next Module */
import { AppProps } from "next/app";
import App from 'next/app'
import Head from 'next/head'

/* Styles */
import '../styles/globals.css'

/* External Module */
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

/* Components */
import PreLoader from '../components/MainLayout/PreLoader'
import SmoothScroll from '../components/SmoothScroll'

class MyApp extends App<AppProps> {

    state = {
        isLoaded: false
    }

    componentDidMount() {
        window.addEventListener("load", ()=>{
            setTimeout(() => {
                this.setState({ isLoaded: true })
            }, 1000);
        })
        setTimeout(() => {
            this.setState({ isLoaded: true })
        }, 3000);
    }   

    render() {
        const { Component, pageProps, router } = this.props

        const { isLoaded } = this.state
        return (
            <>
                <Head>
                    <title>l3lackMegas</title>
                </Head>
                <AnimateSharedLayout type='crossfade'>
                    <AnimatePresence exitBeforeEnter onExitComplete={()=>{ window.scroll(0, 0)}}>
                        {!isLoaded &&
                            <PreLoader>&lt;/&gt; Just a sec.</PreLoader>
                        }
                        {isLoaded &&
                            <SmoothScroll>
                                <Component {...pageProps} key={router.route}  />
                            </SmoothScroll>
                        }
                    </AnimatePresence>
                </AnimateSharedLayout>
            </>
        )
    }
}
 
export default MyApp