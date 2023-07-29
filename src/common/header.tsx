import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

import { TextColor, IThemeState } from '../context';

import './header.scss';

type Props = {
};
type State = {
    
};
class Header extends React.Component<Props, State, IThemeState> {
    context!: IThemeState;

    state: State = {
        
    };

    containerVariant = {
        hidden: { 
            
        },
        show: {
            // transition: {
            //     staggerChildren: .2,
            //     staggerDirection: 1
            // }
        }
    }

    linkItem = {
        hidden: {
            y: -1000,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [1, .0, .15, 1],
            }
        }
    }

    constructor(props: Props) {
        super(props);
        this.LinkItem = this.LinkItem.bind(this);
    }

    componentDidMount(): void {
        
    }

    render() {
        const { textColor, crrFeature, isToggleNav }: IThemeState = this.context;
        // console.log(this.context)

        let crrPageName = '';
        switch(crrFeature) {
            case '/':
                crrPageName = 'Portfolio';
                break;
            case '/playlist':
                crrPageName = 'Playlist';
                break;
            case '/contact':
                crrPageName = 'Contact';
                break;
            default:
                crrPageName = '';
                break;
        }

        return (
            <>
                <motion.div
                    layoutId='nav-header'
                    className='header'
                    key={'Header'}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: isToggleNav ? 1 : 0,
                        transition: {
                            duration: .5,
                            delay: isToggleNav ? 0.5 : 1,
                        }
                    }}
                >
                    <motion.div className="sub"
                        animate={{
                            y: isToggleNav ? 0 : -100,
                            opacity: isToggleNav ? 1 : 0,
                            transition: {
                                duration: .5,
                                delay: isToggleNav ? .4 : 1,
                                ease: [0.5, 0.025, 0, 1],
                            }
                        }}
                    >
                        <motion.div className="link-contain"
                            variants={this.containerVariant}
                            initial='hidden'
                            animate='show'
                        >
                            <this.LinkItem path="/">Portfolio</this.LinkItem>
                            <this.LinkItem path="/playlist">Playlist</this.LinkItem>
                            <this.LinkItem path="/contact">Contact</this.LinkItem>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="small-nav"
                    initial={{
                        // y: -200,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            delay: 1,
                        }
                    }}
                >
                    <h3 className="siteName" style={{
                        color: textColor.value
                    }}>Jaruwat Pohong</h3>
                    
                    <AnimatePresence mode='wait' key="pageNameAnimated">
                        {!isToggleNav && crrPageName !== '' &&
                            <motion.h3
                                className="pageName" style={{
                                    color: textColor.value
                                }}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: .5,
                                        duration: .5,
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: .5,
                                    }
                                }}
                            >
                                <motion.div
                                    layoutId={'link-item-crr-page'}
                                >{crrPageName}</motion.div>
                            </motion.h3>   
                        }
                    </AnimatePresence>
                    <AnimatePresence mode='wait' key="pageNameWebringAnimated">
                        {isToggleNav &&
                            <motion.h3
                                className="pageName" style={{
                                    color: textColor.value
                                }}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: .5,
                                        duration: .5,
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: .5,
                                    }
                                }}
                            >
                                <this.WebRing/>
                            </motion.h3>
                        }
                    </AnimatePresence>
                    <div style={{
                        opacity: 0,
                        pointerEvents: 'none'
                    }}><this.WebRing/></div>
                </motion.div>

                <motion.div className="socialLink">
                    <motion.div className="sub"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            y: isToggleNav ? 0 : -100,
                            opacity: isToggleNav ? 1 : 0,
                            transition: {
                                duration: .5,
                                delay: isToggleNav ? 0.25 : 1,
                                ease: [0.5, 0.025, 0, 1],
                            }
                        }}
                    >
                        <a href="https://www.facebook.com/Jaruwat.P" target="_blank" rel="noreferrer" style={{
                            color: textColor.value
                        }}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="mailto:contact@jaruwat.dev" target="_blank" rel="noreferrer" style={{
                            color: textColor.value
                        }}>
                            <FontAwesomeIcon icon={faAt} />
                        </a>
                        <a href="https://github.com/l3lackMegas" target="_blank" rel="noreferrer" style={{
                            color: textColor.value
                        }}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </motion.div>
                </motion.div>
            </>
        );
    }

    LinkItem({
        path,
        children
    }: {
        path: string,
        children?: React.ReactNode
    }) {
        const { textColor, crrFeature }: IThemeState = this.context;
        return <motion.div  className={'link-item'  + (crrFeature === path ? ' active' : '')}
            whileTap={{
                scale: .9,
            }}
        >
            <Link to={path} style={{
                color: textColor.value
            }}>{children}</Link>
            <motion.div className={"underline-text"} style={{
                backgroundColor: textColor.value
            }}></motion.div>
        </motion.div>;
    }

    WebRing() {
        return <motion.a href="https://webring.wonderful.software#jaruwat.dev" title="วงแหวนเว็บ" style={{ position: 'absolute', top: 10, right: 10, zIndex: 100}}>
            <motion.div
                style={{
                    width: 32,
                    height: 32
                }}
                initial={{ 
                    opacity: 0,
                    transform: 'rotate(0deg)'
                }}
                animate={{ 
                    opacity: 1,
                    transform: 'rotate(360deg)',
                    transition: {
                        duration: 1
                    }
                }}
                whileHover={{
                    transform: 'rotate(0deg)',
                    transition:{
                        ease: 'linear',
                        repeat: Infinity
                    }
                }}
            >
                <img
                    alt="วงแหวนเว็บ"
                    width="32"
                    height="32"
                    src="https://webring.wonderful.software/webring.white.svg"
                />
            </motion.div>
        </motion.a>;
    }
}

Header.contextType = TextColor;

export default Header;