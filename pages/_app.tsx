/* Next Module */
import { AppProps } from "next/app";
import App from 'next/app'
import Head from 'next/head'

/* Styles */
import '../styles/globals.css'

/* External Module */
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

/* Components */

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
                    <meta name="keywords" content="Dyztiny, Dyztiny Service, Service, Graphic, Script, Custom Script, Model"/>
                </Head>
                <AnimateSharedLayout type='crossfade'>
                    <AnimatePresence exitBeforeEnter onExitComplete={()=>{ window.scroll(0, 0)}}>
                        {!isLoaded &&
                            <motion.div className="centerContain"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <p>Just a sec.</p>
                            </motion.div>
                        }
                        {isLoaded &&
                            <Component {...pageProps} key={router.route}  />
                        }
                    </AnimatePresence>
                </AnimateSharedLayout>
            </>
        )
    }
}
 
export default MyApp