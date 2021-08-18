/* React Module */
import React, { Component } from "react";

/* External Module */
import { AnimatePresence, motion } from 'framer-motion'

/* Styles */
import styles from './styles.module.css'

/* Components */
import { ModalActive } from '../MainLayout/Modal'
import ModalContent from './ModalContent'

interface ItemStructures {
    id: number
    title: string
    img: string
    date: string
    link?: string
    imageList?: Array<string>
    color?: string
}

interface IReciept {
    items: Array<ItemStructures>
}

class List extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {
        const { items, children } = this.props

        return <>
            <div className={styles.container}>

                { items.map((ctx: ItemStructures, i)=>{
                    return <motion.div
                        key={i}
                        whileHover={{
                            y: -5
                        }}
                        whileTap={{
                            y: -5,
                            scale: 1.02
                        }}
                        className={styles.item}
                    >
                        <ModalActive layoutId={ctx.id}
                            isDelay={true}
                            modalStyle={{ width: 500 }}
                            modalChildren={
                                <ModalContent
                                    id={ctx.id}
                                    title={ctx.title}
                                    img={ctx.img}
                                    date={ctx.date}
                                    link={ctx.link}
                                    imageList={ctx.imageList}
                                    color={ctx.color}
                                />
                            }
                        >
                            <motion.div layoutId={`modalCard-${ctx.id}`} className={styles.imgContain}>
                                <motion.div layoutId={`modalLogo-${ctx.id}`} className={styles.img} style={{
                                    backgroundImage: `url(${ctx.img})`
                                }}></motion.div>
                            </motion.div>
                            <motion.h3 layoutId={`modalTitle-${ctx.id}`} className={styles.title}>{ctx.title}</motion.h3>
                            <motion.p layoutId={`modalDate-${ctx.id}`}>({ctx.date})</motion.p>
                            
                        </ModalActive>
                    </motion.div>
                })}
                
            </div>
        </>
    }

}

export default List;