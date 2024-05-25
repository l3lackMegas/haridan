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
import Youtube from '../MainLayout/YoutubeIframe'
import { ModalActive } from "../MainLayout/Modal";
import { validateYouTubeUrl } from "../../../lib/utility";

interface IReciept {
    id: number
    title: string
    tags?: Array<string>
    describe?: string
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
        const { id, title, describe, img, date, link, imageList, color } = this.props

        let imageListItems = imageList?.filter((img: string, i: number) => {
            return validateYouTubeUrl(img) == false
        })

        let youtubeListItems = imageList?.filter((img: string, i: number) => {
            return validateYouTubeUrl(img) == true
        })

        return <>
            <motion.div className={styles.modal}>
                <motion.div className={styles.content}
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                            ease: [0.5, 0.025, 0, 1],
                            delay: .1
                        }
                    }}
                >
                    <motion.div className={styles.logoArea}
                        style={{
                            backgroundColor: color,
                            // backgroundImage: `url(${img})`
                        }}
                    >
                        <motion.div className={styles.subGradient}></motion.div>
                        <motion.img className={styles.img} src={img} />
                    </motion.div>
                    <motion.h2 >{title}</motion.h2>
                    <motion.p >({date})</motion.p>
                    <motion.div className={styles.tagList}>
                        {this.props.tags?.map((tag: string, i: number) => <motion.div key={i} className={styles.tag}>{tag}</motion.div>)}
                    </motion.div>
                    {describe && <motion.p className={styles.describe}>{describe}</motion.p>}
                    {/* {imageList && <Gallery imageList={imageList} />} */}
                    {link &&
                        <Link to={link} target="_blank" rel="noreferrer">
                            <button className={styles.btnViewProject}>Visit a website</button>
                        </Link>
                    }
                </motion.div>
                <motion.div className={styles.rightSide}
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                            ease: [0.5, 0.025, 0, 1],
                            delay: .2
                        }
                    }}
                >
                    {youtubeListItems != null && youtubeListItems?.length > 0 && <motion.div className={styles.padding}>
                        <motion.div className={styles.youtubeIframe}>
                            <Youtube src={youtubeListItems[0]} styles={{
                                width: '100%',
                                height: 600
                            }}/>
                        </motion.div>
                    </motion.div>}
                    <motion.div className={styles.gallery}>
                        {imageListItems?.map((img: string, i: number) => {
                            return <ModalActive layoutId={`img-${img}`}
                                isDisableScrollHandle={true}
                                layoutUniqueId={`img-${img}`}
                                closeAnyWhere={true}
                                modalStyle={{
                                    width: '90vw'
                                }}
                                modalChildren={<>
                                    <img src={img} width="100%" height="100%" alt="image" style={{ objectFit: 'contain' }}/>
                                </>}
                            >
                                <motion.div className={styles.galleryItem} key={i}>
                                    <img src={img} alt={title} key={i} style={{ backgroundColor: color }} />
                                </motion.div>
                            </ModalActive>
                    })}
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    }

}

export default ModalContent;