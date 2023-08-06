/* React Module */
import { Component } from "react";

/* Next Module */
import { Link } from 'react-router-dom';

/* Styles */
import styles from './styles.module.scss'

/* Components */

interface IReciept {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    children?: React.ReactNode
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
                    <Link to={link} className={styles.link} target="_blank" rel="noreferrer">
                        {link}
                    </Link>
                }

                {link && typeof(link) == "object" &&
                    link.map((ctx: string | any, i)=>{
                        if(typeof(ctx) == "string")
                            return <Link key={i} to={ctx} className={styles.link} target="_blank" rel="noreferrer">
                                {ctx}
                            </Link>
                        else if(typeof(ctx) == "object")
                            return <Link key={i} to={ctx.link} className={styles.link} target="_blank" rel="noreferrer">
                                {ctx.name}
                            </Link>
                    })
                }
            </div>
        </div>
    }

}

export default CardInfo;