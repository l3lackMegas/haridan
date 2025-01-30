import * as React from 'react';
import {
    useLocation,
    Routes,
	Route
} from 'react-router-dom';
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion';

// Components
import Header from './common/header';
import LoadingIcon from './common/LoadingIcon';

// Pages
import LandingPage from './landing';
import AboutPage from './about';
import ResumePage from './resume';
import StoryPage from './story';
import MusicPage from './music';

import ContextWraper, { AppMainContext, IThemeState } from './context';

import './App.scss';
import { checkIsMobile, isSafari } from './lib/utility';
import SmoothScroll from './common/SmoothScroll';
import NotFoundPage from './404';
import PortfolioPage from './portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faWarning } from '@fortawesome/free-solid-svg-icons';
import MusicBackdrop from './music/MusicBackdrop';

export default function App() {
	const location = useLocation();
	  
	return (
        <LayoutGroup key={'mainLayoutGroup'}>
            <SmoothScroll>
                <ContextWraper>
                    <AnimatePresence mode='sync' key="headerAnimated">
                        <Header key={'nav-header'} />
                    </AnimatePresence>
                    <AppClass>
                        <AnimatePresence mode='sync' key="routeAnimated">
                                <Routes location={location} key={location.pathname}>
                                    <Route key={'resume-route'} path="/" element={<ResumePage key={'resume'}/>} />
                                    <Route key={'portfolio-route'} path="/portfolio" element={<PortfolioPage key={'portfolio'}/>} />
                                    <Route key={'music-route'} path="/music" element={<MusicPage key={'music'}/>} />
                                    {/* <Route key={'story'} path="/story" element={<StoryPage key={'playlistPage'} />} /> */}
                                    <Route key={'404'} path="*" element={<NotFoundPage key={'404'}/>} />
                                </Routes>
                        </AnimatePresence>
                    </AppClass>
                    <AnimatePresence mode='sync' key="MusicPlayerAnimated">
                        <MusicBackdrop />
                    </AnimatePresence>
                </ContextWraper>
            </SmoothScroll>
        </LayoutGroup>
	);
}

declare global {
    interface Window {
        onLoadSuccessfully: Function;
        onFirstMounted: boolean;
        translateWithToggleNav: boolean;
        isMobile: boolean;
        isSafari: boolean;
        player: any;
    }
}

interface IAppClassProps {
    children?: React.ReactNode;
}

interface IAppClassState {
    isLoaded: boolean;
    performanceMode: boolean;
    performanceModeTimerLeft: number;
}
class AppClass extends React.Component<IAppClassProps, IAppClassState, IThemeState> {
    context!: IThemeState;

    state: IAppClassState = {
        isLoaded: false,
        performanceMode: false,
        performanceModeTimerLeft: 8
    }

    constructor(props: IAppClassProps) {
        super(props);
        window.isMobile = checkIsMobile();
        window.isSafari = isSafari();
        this.hidePerformanceDialog = this.hidePerformanceDialog.bind(this);
    }

    componentDidMount(): void {
        document.getElementById('preloaderTxt')?.remove();
        document.getElementById('IE-Message')?.remove();
        window.onLoadSuccessfully = () => {
            window.onFirstMounted = true;
            setTimeout(() => {
                if(window.isMobile || window.isSafari) {
                    this.setState({
                        performanceMode: true,
                    });
                    this.performanceModeTimerInterval = window.setInterval(() => {
                        if(this.state.performanceModeTimerLeft <= 1) {
                            this.hidePerformanceDialog();
                            return;
                        }
                        this.setState({
                            performanceModeTimerLeft: this.state.performanceModeTimerLeft - 1
                        })
                    }, 1000);
                    return;
                }

                this.setState({
                    isLoaded: true,
                });
            }, 1000);
        }
    }

    performanceModeTimerInterval = 0;
    hidePerformanceDialog() {
        window.clearInterval(this.performanceModeTimerInterval);
        this.setState({
            isLoaded: true,
            performanceMode: false
        });
    }
    
    render() {
        return (
            <>
                {this.state.isLoaded && this.props.children}
                {/* {!this.state.isLoaded && <motion.div style={{
                    opacity: 0,
                    zIndex: -1,
                }}>{this.props.children}
                </motion.div>} */}
                {/* <div style={{
                    height: this.context.crrPageHeight,
                }}></div> */}
                <AnimatePresence mode='sync' key="landing-loader">
                    {!this.state.isLoaded && !this.state.performanceMode && <motion.div className="loadingCenter"
                        key={'root-loading'}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 1,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: .35,
                            }
                        }}
                    >
                        <motion.div className="sub"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                }
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0,
                            }}
                        >
                            <LoadingIcon/>
                        </motion.div>
                    </motion.div>}

                    {this.state.performanceMode && <motion.div className="loadingCenter"
                        key={'root-performance-mode'}
                        style={{
                            width: '90%',
                            color: "white",
                            textAlign: 'center',
                            fontSize: 18
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 1,
                            }
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <motion.div initial={{ opacity: 0, y: 100 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: .5,
                                }
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >
                            {/* <FontAwesomeIcon icon={faWarning} size='4x' color='yellow' /> */}
                            <img src="/img/icon50.jpg" alt='website-logo'/>
                        </motion.div>
                        <br/>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .5,
                                    delay: 0.25
                                }
                            }}
                        >Performance Mode Enabled</motion.h1>
                        <br/>
                        <motion.div
                            initial={{ opacity: 0, y: 75 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .5,
                                    delay: 0.5
                                }
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >
                            {window.isMobile && <>
                                <motion.p>This website is best viewed on a desktop.</motion.p>
                                <motion.p>Some features don't  work on your device.</motion.p>
                            </>}
                            { !window.isMobile && window.isSafari && <>
                                <motion.p>Some features don't work on your browser.</motion.p>
                                <motion.p>but don't worry, you can still use this website.</motion.p>
                            </>}
                        </motion.div>
                        <br/>
                        <motion.button className='commonBtn'
                            onClick={this.hidePerformanceDialog}
                            initial={{ opacity: 0, y: 75 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .5,
                                    delay: .75
                                }
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >{`Continue (${this.state.performanceModeTimerLeft}s)`}</motion.button>
                    </motion.div>}
                </AnimatePresence>
            </>
        );
    }
}

AppClass.contextType = AppMainContext;