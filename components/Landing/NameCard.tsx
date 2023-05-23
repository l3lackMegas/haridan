/* React Module */
import { Component } from "react";

/* Next Module */
import Link from 'next/link'

/* External Module */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faGithub } from '@fortawesome/free-brands-svg-icons'

/* Styles */
import styles from './styles.module.css'

interface IReciept {
    isReady: Boolean
    nextFn?: Function
}

class NameCard extends Component<IReciept> {

    render() {

        const { isReady } = this.props
        
        return <motion.div className={styles.nameCard}
            initial={{ opacity: 0, scale: .5 }}
            animate={ isReady ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: .65 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={ isReady ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .75 }}
            >
                <div className={styles.circlePic}>
                    <div className={styles.img}
                        style={{ backgroundImage: 'url(/img/profile-portrait.jpg)' }}
                    ></div>
                </div>
                <div className={styles.identity}>
                    <p className={styles.name}>JARUWAT POHONG</p>
                    <p className={styles.subName}>Software Developer</p>
                </div>
                <div className={styles.statusQuote}>
                    <p><span>“</span>AKA: l3lackMegas<span>”</span></p>
                </div>
            </motion.div>
            <motion.div className={styles.buttonPanel}
                initial={{ opacity: 0, y: 200 }}
                animate={ isReady ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: .1, duration: .75 }}
            >
                <div style={{ margin: '20px 0'}}>
                    <Link legacyBehavior href="mailto:contact@jaruwat.dev">
                        <a>contact@jaruwat.dev</a>
                    </Link>
                </div>
                <Link legacyBehavior href="https://m.me/Jaruwat.P">
                    <a target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.facebook}`}>
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                            <span>Messenger</span>
                        </button>
                    </a>
                </Link>
                <Link legacyBehavior href="https://github.com/l3lackMegas">
                    <a target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.github}`}>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </button>
                    </a>
                </Link>
                <Link legacyBehavior href="/docs/Jaruwat Pohong - Resume.pdf">
                    <a target="_blank" rel="noreferrer">
                        <button
                            className={styles.btn}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Résumé</span>
                        </button>
                    </a>
                </Link>
            </motion.div>
        </motion.div>
    }

}

export default NameCard;