/* React Module */
import { Children, Component } from "react";

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
    isReady: Boolean
}

class Landing extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    state = {
        isMounted: false,
        y: 0
    }

    componentDidMount() {
        this.setState({
            isMounted: true,
            y: window.scrollY
        })
        window.addEventListener("scroll", this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler() {
        this.setState({ y: window.scrollY })
    }

    render() {

        const { isReady } = this.props

        const { y } = this.state
        
        return <>
            <div style={{position: 'absolute', width: '100%', height: '100%', overflow: 'hidden'}}>
                <div className="sub">
                    <motion.div className="parallaxHero" style={{
                        backgroundImage: 'url(/img/bg-blur.jpg)',
                        backgroundPositionY: y / 2
                    }}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5 }}
                >
                    <div className="sub" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #06243c)' }}>
                    {isReady && 
                        <motion.div className="scrollDown"
                            variants={animFadeIn}
                            initial="hidden"
                            animate="show"
                        >
                            <p style={{ fontSize: 15 }}>SCROLL DOWN</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
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