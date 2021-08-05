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
        isLoaded: false,
        isMobile: false
    }

    componentDidMount() {
        window.addEventListener("load", ()=>{
            setTimeout(() => {
                this.setState({ isLoaded: true })
            }, 1000);
        })

        let isMobile = checkIsMobile();
        this.setState({isMobile})
          
    }   

    render() {
        const { Component, pageProps, router } = this.props

        const { isLoaded, isMobile } = this.state

        return (
            <>
                <Head>
                    <title>Jaruwat Pohong</title>
                    <meta name="keywords" content="Jaruwat Pohong, l3lackMegas, Resume, HTML, CSS, JavaScript"></meta>
                    <meta name="description"
                        content="I am Jaruwat Pohong, Frontend Developer.
                            Actually I am a student in university who would like to do anything about web design and frontend development.
                            I understand HTML, CSS and JavaScript as well. And I can use modern library like React.js, TypeScript, etc."
                    />

                    <meta property="og:url" content="https://jaruwat.fucking-thai.dev" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Jaruwat Pohong - Résumé" />
                    <meta property="og:description"
                        content="I am Jaruwat Pohong, Frontend Developer.
                            Actually I am a student in university who would like to do anything about web design and frontend development.
                            I understand HTML, CSS and JavaScript as well. And I can use modern library like React.js, TypeScript, etc."
                    />
                    <meta property="og:image" content="https://jaruwat.fucking-thai.dev/img/og-image.jpg" />
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
                                }}>Just a sec <span style={{fontSize: 30, lineHeight: '22px'}}>...</span></p>
                            </motion.div>
                        }
                        {isLoaded &&
                            <SmoothScroll isMobile={isMobile}>
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