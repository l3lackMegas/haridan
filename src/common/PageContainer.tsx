import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { TextColor, IThemeState } from '../context';

import './PageContainer.scss';

type Props = {
    children: React.ReactNode
};
type State = {
    toggleNav: Boolean,
    mounted: Boolean
};
class PageContainer extends React.Component<Props, State, IThemeState> {
    context!: IThemeState;

    state: State = {
        toggleNav: false,
        mounted: false,
    };

    containerVariant = {
        initial: {
            y: '100vh',
            scale: .8,
            borderRadius: 50,
        },
        // animate: {
        //     y: 0,
        //     scale: 1,
        //     transition: {
        //         duration: 1,
        //         ease: [1, .1, .35, 1],
        //     }
        // },
        exit: {
            y: '-100vh',
            scale: .1,
            // opacity: 0,
            borderRadius: 50,
            maxHeight: 0,
            transition: {
                duration: .75,
                ease: [1, .1, .35, 1],
            }
        }
    }

    componentWillUnmount(): void {
        this.context.setIsToggleNav(false);
    }

    render() {
        const { textColor, isToggleNav, setIsToggleNav }: IThemeState = this.context;
        const { toggleNav, mounted } = this.state;

        return (
            <motion.div
                className='PageContainer'
                key={'PageContainer'}
                variants={this.containerVariant}
                initial='initial'
                animate={{
                    y: toggleNav ? 140 : 0,
                    scale: toggleNav ? 0.95 : 1,
                    opacity: 1,
                    borderRadius: toggleNav ? 50 : 0,
                    transition: {
                        duration: mounted ? 0.75 : 1,
                        ease: !window.onFirstMounted || mounted ? [0.5, 0.025, 0, 1] : [1, .1, .35, 1],
                    }
                }}
                exit='exit'
                onAnimationComplete={() => {
                    this.setState({
                        mounted: true
                    })
                }}
            >
                <AnimatePresence mode='wait' key="pageDimer">
                    { toggleNav &&
                        <motion.div
                            className='dimPullMenu'
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: .75,
                                    ease: [0.5, 0.025, 0, 1],
                                }
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: .75,
                                    ease: [0.5, 0.025, 0, 1],
                                }
                            }}
                            onClick={() => {
                                this.setState({
                                    toggleNav: !toggleNav
                                });
                                setIsToggleNav(!toggleNav);
                            }}
                        ></motion.div>
                    }
                </AnimatePresence>
                <motion.button className={'btnTopCenter' + (toggleNav ? ' active' : '')} style={{
                    color: textColor.value
                }}
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: .5,
                        duration: .5,
                        ease: [1, .1, .35, 1],
                    }
                }}
                onClick={() => {
                    this.setState({
                        toggleNav: !toggleNav
                    });
                    setIsToggleNav(!toggleNav);
                }}
                >
                    <motion.div className="sub" style={{ overflow: 'hidden' }}>
                        <motion.div className="bgPullMenu" style={{
                            backgroundColor: textColor.value
                        }}></motion.div>
                        
                        { toggleNav && <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: .25,
                                }
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: .25,
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </motion.div>}
                        
                        { !toggleNav && <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: .25,
                                }
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: .25,
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </motion.div>}
                    </motion.div>
                </motion.button>
                {this.props.children}
            </motion.div>
        );
    }
}

PageContainer.contextType = TextColor;

export default PageContainer;