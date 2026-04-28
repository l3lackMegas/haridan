/* React Module */
import { Component } from "react";

/* Next Module */
import { Link } from 'react-router-dom';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

/* Styles */
import styles from './styles.module.scss'

interface IReciept {
    title: string
    date: string
    org: string
    link?: string | Array<string | object>
    children?: React.ReactNode
}

class CardInfo extends Component<IReciept> {

    /** Normalize all link shapes into [{ name, link }] */
    getLinks(): Array<{ name: string, link: string }> {
        const { link } = this.props
        if (!link) return []
        if (typeof link === "string") {
            return [{ name: link, link }]
        }
        if (Array.isArray(link)) {
            return link.map((ctx: any) => {
                if (typeof ctx === "string") return { name: ctx, link: ctx }
                return { name: ctx.name ?? ctx.link, link: ctx.link }
            })
        }
        return []
    }

    /** Strip protocol for compact display when name === url */
    formatDisplay(url: string, fallback: string) {
        if (url === fallback) {
            return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
        }
        return fallback
    }

    /** Parse date string "YYYY - YYYY" / "YYYY - Present" into [from, to]. */
    parseDateRange(date: string): { from: string, to?: string } {
        const match = date.match(/^\s*(\d{4})\s*[-–]\s*(\d{4}|Present)\s*$/i)
        if (match) {
            return { from: match[1], to: match[2] }
        }
        return { from: date }
    }

    render() {

        const { title, date, org, children } = this.props
        const links = this.getLinks()
        const hasLinks = links.length > 0
        const range = this.parseDateRange(date)

        return (
            <div className={`${styles.container} ${styles.hasMeta}`}>
                <div className={styles.main}>
                    <div className={styles.infoZone}>
                        <p className={styles.title}>{ title }</p>
                        <p className={styles.org}>{ org }</p>
                        <div className={styles.detail}>
                            { children }
                        </div>
                    </div>
                </div>

                <aside className={styles.metaPanel}>
                    <div className={styles.metaSection}>
                        <p className={styles.metaLabel}>Period</p>
                        {range.to ? (
                            <div className={styles.dateRange}>
                                <span className={styles.dateFrom}>{range.from}</span>
                                <span className={styles.dateSep}>→</span>
                                <span className={styles.dateTo}>{range.to}</span>
                            </div>
                        ) : (
                            <p className={styles.date}>{ date }</p>
                        )}
                    </div>

                    {hasLinks && (
                        <div className={styles.metaSection}>
                            <p className={styles.metaLabel}>Links</p>
                            <div className={styles.linksList}>
                                {links.map((l, i) => (
                                    <Link
                                        key={i}
                                        to={l.link}
                                        className={styles.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className={styles.linkText}>
                                            {this.formatDisplay(l.link, l.name)}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            className={styles.linkIcon}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        )
    }

}

export default CardInfo;