/* React Module */
import * as React from "react";
import { useState } from "react";

/* Next Module */
import Link from 'next/link'

/* External Module */
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* Library */
import { validateYouTubeUrl } from '../../lib/utility' 

/* Styles */
import styles from './styles.module.css'

/* Components */
import Youtube from '../MainLayout/YoutubeIframe'
import { ModalActive } from "../MainLayout/Modal";


/* Other Library */
import { sleep } from '../../lib/utility'

const variants = {
    enter: (direction: number) => {
        return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface IReciept {
    images: Array<string>
}

const SliderImage: React.FC<IReciept> = (props) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isShow, setShow] = useState(false);
    const [isPause, setPause] = useState(false);

    const [isImgLoaded, setImgLoadState] = useState(false);

    const { images } = props
    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = async (newDirection: number, force?: boolean) => {
        if(isPause && !force) return false
        if(force && images.length > 1) {
            setImgLoadState(false)
            await sleep(150)
        }
        if(images.length > 1) {
            setPage([page + newDirection, newDirection]);
        }
    };

    React.useEffect(()=>{
        setTimeout(() => {
            setShow(true)
        }, 500);
        let slideAutomation = setInterval(()=>paginate(1), 5000)
        return () => {
            clearInterval(slideAutomation)
        };
    })

    return ( <>
        <div className={styles['ImageSlider-container']}>
            <div className="sub">
            {isShow && <>
                <AnimatePresence>
                    <ModalActive
                        onClose={()=>{
                            setPause(false)
                        }}
                        isDisableScrollHandle={true}
                        modalStyle={{
                            backgroundColor: 'transparent'
                        }}
                        modalChildren={<div style={{ textAlign: 'center' }}>
                            <motion.div
                                initial={{ scale: .5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: .5 }}
                                transition={{ duration: .25 }}
                            >
                                {images.length > 1 && <>
                                    <div className={styles['slider-next']} onClick={() => paginate(1, true)}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                    <div className={styles['slider-prev']} onClick={() => paginate(-1, true)}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </div>
                                </>}
                                <p style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    padding: '0 20px',
                                    lineHeight: '35px',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, .5)',
                                    zIndex: 1000
                                }}>{imageIndex + 1}/{images.length}{!isImgLoaded ? ' Loading...' : ''}</p>
                                <img src={images[imageIndex]} style={{
                                    maxWidth: '100vw',
                                    maxHeight: '90vh',
                                    transitionDuration: '.15s',
                                    opacity: isImgLoaded ? 1 : 0
                                }}
                                onLoad={() => setImgLoadState(true)}
                                alt="image"/>
                            </motion.div>
                        </div>}
                    >
                        <motion.div
                            onClick={()=>setPause(true)}
                            className={styles.slideContainer}
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            {validateYouTubeUrl(images[imageIndex]) ? 
                                <Youtube src={images[imageIndex]} styles={{
                                    width: '100%',
                                    height: 260
                                }}/>
                                :
                                <img
                                    src={images[imageIndex]}
                                    alt="Slider Image"
                                />
                            }
                            
                        </motion.div>
                    </ModalActive>
                </AnimatePresence>
                {images.length > 1 && <>
                    <div className={styles['slider-next']} onClick={() => paginate(1)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className={styles['slider-prev']} onClick={() => paginate(-1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </>}
            </>}
            </div>
        </div>
    </>);
};

export default SliderImage;