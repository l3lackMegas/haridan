/* React Module */
import { Children, Component } from "react";

/* Next Module */
import Image from 'next/image'
import Link from 'next/link'

/* External Module */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* Styles */
import styles from './styles.module.css'

/* Components */
import NameCard from './NameCard'

interface IReciept {
    isReady: Boolean
    nextFn?: Function
}

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

class Landing extends Component<IReciept> {

    render() {

        const { isReady, nextFn } = this.props
        
        return <>
            <div className={`centerContain ${styles.cardMobile}`} style={{
                zIndex: 1000
            }}>
                <NameCard isReady={isReady} />
            </div>
            {isReady && 
                <motion.div className={styles.scrollDown}
                    variants={animFadeIn}
                    initial="hidden"
                    animate="show"
                >
                    <p style={{ fontSize: 15 }}>SCROLL DOWN</p>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </motion.div>
            }
        </>
    }

}

export default Landing;