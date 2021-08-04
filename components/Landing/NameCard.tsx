/* React Module */
import { Component } from "react";

/* Next Module */
import Image from 'next/image'
import Link from 'next/link'

/* External Module */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import LoadingIcons from 'react-loading-icons'

/* Styles */
import styles from './styles.module.css'

/* Components */

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

class NameCard extends Component<IReciept> {

    render() {

        const { isReady, nextFn } = this.props
        
        return <motion.div className={styles.nameCard}
            initial={{ opacity: 0, scale: .8 }}
            animate={ isReady ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: .5 }}
        >
            <div className={styles.circlePic}>
                <div className={styles.img}
                    style={{backgroundImage: 'url(/img/profile-img.jpg)'}}
                ></div>
            </div>
            <div className={styles.identity}>
                <p className={styles.name}>JARUWAT POHONG</p>
                <p className={styles.subName}>(Frontend Developer)</p>
            </div>
            <div className={styles.statusQuote}>
                <p>I love cat, but cat NEVER love me.</p>
            </div>
            <div className={styles.buttonPanel}>
                <div style={{ margin: '20px 0'}}>
                    <Link href="mailto:jaruwat.is@fucking-thai.dev">
                        <a>jaruwat.is@fucking-thai.dev</a>
                    </Link>
                </div>
                <Link href="https://m.me/Jaruwat.P">
                    <a target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.facebook}`}>
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                            <span>Messenger</span>
                        </button>
                    </a>
                </Link>
                <Link href="#information">
                    <a>
                        <button disabled={isReady ? false : true} className={styles.btn} style={{ width: 146 }}
                            onClick={()=>nextFn ? nextFn() : null }
                        >
                            <span>Information</span>
                        </button>
                    </a>
                </Link>
            </div>
        </motion.div>
    }

}

export default NameCard;