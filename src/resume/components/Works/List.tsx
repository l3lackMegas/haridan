/* React Module */
import React, { Component } from "react";

/* External Module */
import { AnimatePresence, motion } from 'framer-motion'

/* Styles */
import styles from './styles.module.scss'

/* Components */
import { ModalActive } from '../MainLayout/Modal'
import ModalContent from './ModalContent'
import { WorkStructure } from "../../../data/work-list";

interface IReciept {
    items: Array<WorkStructure>
    layoutUniqueId: string
    children?: React.ReactNode
}

class WorkList extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {
        const { items, layoutUniqueId, children } = this.props

        return <>
            <motion.div className={styles.container}>

                { items.map((ctx: WorkStructure, i)=>{
                    let date = {
                        from: new Date(ctx.date.from),
                        to: new Date(ctx.date.to)
                    },
                    dateString: string = date.from.getFullYear() == date.to.getFullYear() ? 
                                date.from.getFullYear().toString() :
                                `${date.from.getFullYear()} - ${date.to.getFullYear()}`
                    return <motion.div
                        key={ctx.id}
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
                            layoutUniqueId={`modal-${layoutUniqueId}-${ctx.id}`}
                            isDelay={false}
                            modalStyle={{ width: '100vw', height: '100vh', maxWidth: 'unset', maxHeight: 'unset' }}
                            modalChildren={
                                <ModalContent
                                    id={ctx.id}
                                    title={ctx.title}
                                    tags={ctx.tags}
                                    describe={ctx.describe}
                                    img={ctx.img}
                                    date={dateString}
                                    link={ctx.link}
                                    imageList={ctx.imageList}
                                    color={ctx.color}
                                />
                            }
                        >
                            <motion.div 
                                // layoutId={`modalCard-${ctx.id}`}
                                style={{
                                    backgroundColor: ctx.color
                                }}
                                className={styles.imgContain}>
                                <motion.div 
                                    // layoutId={`modalLogo-${ctx.id}`}
                                    className={styles.img} style={{
                                    backgroundImage: `url(${ctx.img})`
                                }}></motion.div>
                            </motion.div>
                            <br/>
                            <motion.p 
                                // layoutId={`modalTitle-${ctx.id}`}
                                className={styles.title}>{ctx.title}</motion.p>
                            <motion.p 
                                // layoutId={`modalDate-${ctx.id}`}
                            >({dateString})</motion.p>
                            
                            <motion.div className={styles.tagList}>
                                {ctx.tags?.map((tag: string, i: number) => <motion.div key={i} className={styles.tag}>{tag}</motion.div>)}
                            </motion.div>
                            
                        </ModalActive>
                    </motion.div>
                })}
                
            </motion.div>
        </>
    }

}

export default WorkList;