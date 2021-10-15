/* Next Module */
import { AppProps } from "next/app";
import App from 'next/app'

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
            }, 500);
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
                <AnimateSharedLayout type='crossfade'>
                    <AnimatePresence exitBeforeEnter>
                        {!isLoaded &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{
                                    opacity: 0,
                                    scale: .5,
                                    transition:{ duration: .75 }
                                }}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                                transition={{ duration: .5 }}
                            >
                                <PreLoader>&lt;/&gt; Just a sec.</PreLoader>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <AnimatePresence exitBeforeEnter onExitComplete={()=>{ window.scroll(0, 0)}}>
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