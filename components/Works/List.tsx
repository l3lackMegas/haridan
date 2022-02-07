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
    date: {
        from: Date | string
        to: Date | string
    }
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
                    let date = {
                        from: new Date(ctx.date.from),
                        to: new Date(ctx.date.to)
                    },
                    dateString: string = date.from.getFullYear() == date.to.getFullYear() ? 
                                date.from.getFullYear().toString() :
                                `${date.from.getFullYear()} - ${date.to.getFullYear()}`
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
                            modalStyle={{ width: 500, height: 600 }}
                            modalChildren={
                                <ModalContent
                                    id={ctx.id}
                                    title={ctx.title}
                                    img={ctx.img}
                                    date={dateString}
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
                            <motion.p layoutId={`modalTitle-${ctx.id}`} className={styles.title}>{ctx.title}</motion.p>
                            <motion.p layoutId={`modalDate-${ctx.id}`}>({dateString})</motion.p>
                            
                        </ModalActive>
                    </motion.div>
                })}
                
            </div>
        </>
    }

}

export default List;