/* Next Module */
import { AppProps } from "next/app";
import App from 'next/app'
import Head from 'next/head'

/* Styles */
import '../styles/globals.css'

/* External Module */
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

/* Library */
import { checkIsMobile } from '../lib/utility'

/* Components */
import SmoothScroll from '../components/SmoothScrol'

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
          
    }   

    render() {
        const { Component, pageProps, router } = this.props

        const { isLoaded } = this.state

        return (
            <>
                <Head>
                    <title>Jaruwat Pohong</title>
                </Head>
                <AnimateSharedLayout type='crossfade'>
                    <AnimatePresence exitBeforeEnter onExitComplete={()=>{ window.scroll(0, 0)}}>
                        {!isLoaded &&
                            <motion.div className="centerContain"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <p style={{
                                    padding: "5px 15px",
                                    border: '1px rgba(255, 255, 255, .5) solid'
                                }}>Just a sec.</p>
                            </motion.div>
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