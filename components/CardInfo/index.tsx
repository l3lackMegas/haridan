/* React Module */
import { Component } from "react";

/* Next Module */
import Link from "next/link"

/* External Module */
import { AnimationProps, motion } from 'framer-motion'

/* Styles */
import styles from './styles.module.css'

/* Components */

interface IReciept {
    title: string
    date: string
    org: string
}

class CardInfo extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { title, date, org, children } = this. props

        return <div className={styles.container}>
            <p className={styles.date}>{ date }</p>
            <div className={styles.infoZone}>
                <p className={styles.title}>{ title }</p>
                <p className={styles.org}>{ org }</p>
                <div className={styles.detail}>
                    { children }
                </div>
            </div>
        </div>
    }

}

export default CardInfo;