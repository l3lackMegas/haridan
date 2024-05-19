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

import ContextWraper, { TextColor, IThemeState } from './context';

import './App.scss';
import { checkIsMobile } from './lib/utility';
import SmoothScroll from './common/SmoothScroll';
import NotFoundPage from './404';
import PortfolioPage from './portfolio';

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
                                    <Route key={'resume'} path="/" element={<ResumePage key={'resume'}/>} />
                                    <Route key={'portfolio'} path="/portfolio" element={<PortfolioPage key={'portfolio'}/>} />
                                    {/* <Route key={'story'} path="/story" element={<StoryPage key={'playlistPage'} />} /> */}
                                    <Route key={'404'} path="*" element={<NotFoundPage key={'404'}/>} />
                                </Routes>
                        </AnimatePresence>
                    </AppClass>
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
    }
}

interface IAppClassProps {
    children?: React.ReactNode;
}

interface IAppClassState {
    isLoaded: boolean;
}
class AppClass extends React.Component<IAppClassProps, IAppClassState, IThemeState> {
    context!: IThemeState;

    state: IAppClassState = {
        isLoaded: false,
    }

    constructor(props: IAppClassProps) {
        super(props);
        window.isMobile = checkIsMobile();
    }

    componentDidMount(): void {
        document.getElementById('preloaderTxt')?.remove();
        window.onLoadSuccessfully = () => {
            window.onFirstMounted = true;
            setTimeout(() => {
                this.setState({
                    isLoaded: true,
                });
            }, 1000);
        }
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
                {!this.state.isLoaded && <motion.div className="loadingCenter">
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
                </AnimatePresence>
            </>
        );
    }
}

AppClass.contextType = TextColor;