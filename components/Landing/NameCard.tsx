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
            <div className={styles.circlePic}>
                <div className={styles.img}
                    style={{backgroundImage: 'url(/img/profile-img.jpg)'}}
                ></div>
            </div>
            <div className={styles.identity}>
                <p className={styles.name}>JARUWAT POHONG</p>
                <p className={styles.subName}>(Web Developer)</p>
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
                <Link href="https://github.com/l3lackMegas">
                    <a target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.github}`}>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </button>
                    </a>
                </Link>
                <Link href="/l3lackMegas - Resume.pdf">
                    <a target="_blank" rel="noreferrer">
                        <button
                            className={styles.btn}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Résumé</span>
                        </button>
                    </a>
                </Link>
            </div>
        </motion.div>
    }

}

export default NameCard;