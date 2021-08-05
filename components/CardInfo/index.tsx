/* React Module */
import { Component } from "react";

/* Next Module */
import Link from "next/link"

/* Styles */
import styles from './styles.module.css'

/* Components */

interface IReciept {
    title: string
    date: string
    org: string
    link?: string
}

class CardInfo extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { title, date, org, link, children } = this.props

        return <div className={styles.container}>
            <p className={styles.date}>{ date }</p>
            <div className={styles.infoZone}>
                <p className={styles.title}>{ title }</p>
                <p className={styles.org}>{ org }</p>
                <div className={styles.detail}>
                    { children }
                </div>
                {link && 
                    <Link href={link}>
                        <a className={styles.link} target="_blank" rel="noreferrer">{link}</a>
                    </Link>
                }
            </div>
        </div>
    }

}

export default CardInfo;