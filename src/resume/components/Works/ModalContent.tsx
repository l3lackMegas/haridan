/* React Module */
import React, { Component } from "react";

/* Next Module */
import { Link } from 'react-router-dom';

/* External Module */
import { motion } from 'framer-motion'

/* Styles */
import styles from './styles.module.scss'

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
            <motion.div className={styles.modal}>
                <motion.div className={styles.logo} style={{
                    backgroundImage: `url(${img})`,
                    backgroundColor: color
                }}></motion.div>
                <motion.div className={styles.content}>
                    <motion.h2 >{title}</motion.h2>
                    <motion.p >({date})</motion.p>
                    {/* {imageList && <Gallery imageList={imageList} />} */}
                    {imageList && <ImageSlider slideLayoutId={`${id}`} images={imageList} />}
                    {link &&
                        <Link to={link} target="_blank" rel="noreferrer">
                            <button className="btn">Visit a website</button>
                        </Link>
                    }
                </motion.div>
            </motion.div>
        </>
    }

}

export default ModalContent;