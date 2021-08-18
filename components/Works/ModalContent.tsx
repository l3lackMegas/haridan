/* React Module */
import React, { Component } from "react";

/* Next Module */
import Link from 'next/link'

/* External Module */
import { motion } from 'framer-motion'

/* Styles */
import styles from './styles.module.css'

/* Components */
import Gallery from "../Gallery";
import ImageSlider from '../ImageSlider'

interface IReciept {
    id: number
    title: string
    img: string
    date: string,
    link?: string,
    imageList?: Array<string>
    color?: string
}

class ModalContent extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {
        const { id, title, img, date, link, imageList, color } = this.props

        return <>
            <div className={styles.modal}>
                <motion.div layoutId={`modalLogo-${id}`} className={styles.logo} style={{
                    backgroundImage: `url(${img})`,
                    backgroundColor: color
                }}></motion.div>
                <div className={styles.content}>
                    <motion.h2 layoutId={`modalTitle-${id}`}>{title}</motion.h2>
                    <motion.p layoutId={`modalDate-${id}`}>({date})</motion.p>
                    {/* {imageList && <Gallery imageList={imageList} />} */}
                    {imageList && <ImageSlider images={imageList} />}
                    {link &&
                        <Link href={link}><a target="_blank" rel="noreferrer">
                            <button className="btn">Visit a website</button>
                        </a></Link>
                    }
                </div>
            </div>
        </>
    }

}

export default ModalContent;