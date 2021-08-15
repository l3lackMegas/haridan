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
    link?: string | Array<string | object>
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
                {link && typeof(link) == "string" &&
                    <Link href={link}>
                        <a className={styles.link} target="_blank" rel="noreferrer">{link}</a>
                    </Link>
                }

                {link && typeof(link) == "object" &&
                    link.map((ctx: string | any, i)=>{
                        if(typeof(ctx) == "string")
                            return <Link key={i} href={ctx}>
                                <a className={styles.link} target="_blank" rel="noreferrer">{ctx}</a>
                            </Link>
                        else if(typeof(ctx) == "object")
                            return <Link key={i} href={ctx.link}>
                                <a className={styles.link} target="_blank" rel="noreferrer">{ctx.name}</a>
                            </Link>
                    })
                }
            </div>
        </div>
    }

}

export default CardInfo;