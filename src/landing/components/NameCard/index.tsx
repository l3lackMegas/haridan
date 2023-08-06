/* React Module */
import { Component } from "react";

/* Next Module */
import { Link } from 'react-router-dom';

/* External Module */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faGithub } from '@fortawesome/free-brands-svg-icons'

/* Styles */
import styles from './styles.module.scss'

interface IReciept {
    isReady: Boolean
    nextFn?: Function
}

class NameCard extends Component<IReciept> {

    render() {

        const { isReady } = this.props
        
        return <div className={`centerContain ${styles.cardMobile}`} style={{
            // zIndex: 1000
        }}>
            <div className={styles.nameCard}
                // initial={{ opacity: 0, scale: .5 }}
                // animate={ isReady ? { opacity: 1, scale: 1 } : {}}
                // transition={{ duration: .45 }}
            >
                <div
                    // initial={{ opacity: 0, y: 300 }}
                    // animate={ isReady ? { opacity: 1, y: 0 } : {}}
                    // transition={{ duration: .45, ease: [0.5, 0.025, 0, 1] }}
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
                        <p>l3lackMegas ༼ つ ◕_◕ ༽つ</p>
                    </div>
                </div>
                <div className={styles.buttonPanel}
                    // initial={{ opacity: 0, y: 300 }}
                    // animate={ isReady ? { opacity: 1, y: 0 } : {}}
                    // transition={{ delay: .1, duration: .45, ease: [0.5, 0.025, 0, 1] }}
                >
                    <div style={{ margin: '20px 0'}}>
                        <Link to="mailto:contact@jaruwat.dev">
                            contact@jaruwat.dev
                        </Link>
                    </div>
                    <Link to="https://m.me/Jaruwat.P" target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.facebook}`}>
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                            <span>Messenger</span>
                        </button>
                    </Link>
                    <Link to="https://github.com/l3lackMegas" target="_blank" rel="noreferrer">
                        <button className={`${styles.btn} ${styles.github}`}>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </button>
                    </Link>
                    <Link to="/docs/Jaruwat Pohong - Resume.pdf" target="_blank" rel="noreferrer">
                        <button
                            className={styles.btn}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Résumé</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    }

}

export default NameCard;