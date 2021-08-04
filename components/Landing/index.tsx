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

class Landing extends Component<IReciept> {

    render() {

        const { isReady, nextFn } = this.props
        
        return <>
            <div className={`centerContain ${styles.cardMobile}`} style={{
                zIndex: 1000
            }}>
                <NameCard isReady={isReady} />
            </div>
        </>
    }

}

export default Landing;