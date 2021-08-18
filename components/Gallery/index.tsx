/* React Module */
import { Component, ReactElement } from "react";

/* External Module */
import { motion } from 'framer-motion'

/* Lib */
import { validateYouTubeUrl } from '../../lib/utility'

/* Styles */
import styles from './styles.module.css'

/* Components */
import Youtube from '../MainLayout/YoutubeIframe'
import { ModalActive } from '../MainLayout/Modal'

interface IReciept {
    imageList: Array<string>,
    key?: string | number
}

class Gallery extends Component<IReciept> {

    state = {
        isFinishDelay: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isFinishDelay: true })
        }, 500);
    }

    render() {
        const { imageList, key, children } = this.props
        return <>
            <div className={styles.imageList} key={key}>
                <div className={styles.imageOverflow} style={{ height: 270 }}>
                    { this.state.isFinishDelay &&
                        imageList.map((ctx, i)=>{
                            let imgBox: ReactElement
                            if(validateYouTubeUrl(ctx))
                                imgBox = <Youtube src={ctx} styles={{
                                    width: '100%',
                                    height: 260
                                }}/>
                            else
                                imgBox = <>
                                    <ModalActive layoutId={`img-${ctx}`}
                                        closeAnyWhere={true}
                                        modalStyle={{
                                            width: '90vw'
                                        }}
                                        modalChildren={<>
                                            <img src={ctx} width="100%" height="100%" alt="image"/>
                                            <p style={{ textAlign: 'center', color: 'white' }}>Click any where to close image.</p>
                                        </>}
                                    >
                                        <img src={ctx} alt="image"/>
                                    </ModalActive>
                                </>
                            
                            return <motion.div key={i}
                                className={styles.image}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >{imgBox}</motion.div>
                        })
                    }
                </div>
            </div>
        </>
    }

}

export default Gallery;