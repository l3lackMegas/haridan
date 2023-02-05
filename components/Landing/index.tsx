/* React Module */
import React, { Component } from "react";

/* Next Module */
import Link from 'next/link'

/* External Module */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* Styles */
import styles from './styles.module.css'

/* Components */
import NameCard from './NameCard'

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
    isReady: Boolean,
    y: number
}

class Landing extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { isReady, y } = this.props
        
        return <>
            <div style={{position: 'absolute', width: '100%', height: '100%', overflow: 'hidden'}}>
                <div className="sub">
                    <Link legacyBehavior href="https://webring.wonderful.software#jaruwat.dev">
                        <a title="วงแหวนเว็บ" style={{ position: 'absolute', top: 10, right: 10, zIndex: 100}}>
                            <motion.div
                                style={{width: 32, height: 32}}
                                initial={{ 
                                    opacity: 0,
                                    transform: 'rotate(0deg)'
                                }}
                                animate={{ 
                                    opacity: 1,
                                    transform: 'rotate(360deg)',
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                whileHover={{
                                    transform: 'rotate(0deg)',
                                    transition:{
                                        ease: 'linear',
                                        repeat: Infinity
                                    }
                                }}
                            >
                                <img
                                    alt="วงแหวนเว็บ"
                                    width="32"
                                    height="32"
                                    src="https://webring.wonderful.software/webring.white.svg"
                                />
                            </motion.div>
                        </a>
                    </Link>
                    <motion.div className="parallaxHero" style={{
                        backgroundImage: 'url(/img/bg-blur.jpg)',
                        backgroundPositionY: y / 2
                    }}
                    initial={{ opacity: 0, scale: 1.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 1 }}
                    transition={{
                        duration: 2,
                        ease: [0.5, 0.025, 0, 1]
                    }}
                >
                    <div className="sub" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #06243c)' }}>
                    {isReady && 
                        <motion.div className="scrollDown"
                            variants={animFadeIn}
                            initial="hidden"
                            animate="show"
                        >
                            <Link legacyBehavior href="#information">
                                <a onClick={()=>window.scrollTo(0, window.innerHeight) }>
                                    <p style={{ fontSize: 15 }}>SCROLL DOWN</p>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </a>
                            </Link>
                        </motion.div>
                    }
                    </div>
                </motion.div>
                </div>
            </div>
            <div className={`centerContain ${styles.cardMobile}`} style={{
                zIndex: 1000
            }}>
                <NameCard isReady={isReady} />
            </div>
        </>
    }

}

export default Landing;