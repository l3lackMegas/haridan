import * as React from 'react';
import {
    useLocation,
    Routes,
	Route
} from 'react-router-dom';
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion';

// Components
import Header from './common/header';

// Pages
import LandingPage from './landing';
import MusicPage from './music';

import './App.scss';
import LoadingIcon from './common/LoadingIcon';

export default function App() {
	const location = useLocation();
	  
	return (
        <LayoutGroup>
            <AnimatePresence mode='sync'>
                <Header key={'nav-header'} />
            </AnimatePresence>
                <AppClass>
                    <AnimatePresence mode='sync'>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/playlist" element={<MusicPage  />} />
                        </Routes>
                    </AnimatePresence>
                </AppClass>
        </LayoutGroup>
	);
}

declare global {
    interface Window {
        onLoadSuccessfully: Function;
        onFirstMounted: boolean;
    }
}

interface IAppClassProps {
    children?: React.ReactNode;
}

interface IAppClassState {
    isLoaded: boolean;
}
class AppClass extends React.Component<IAppClassProps, IAppClassState> {

    state: IAppClassState = {
        isLoaded: false,
    }

    componentDidMount(): void {
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
                <AnimatePresence mode='wait' key="landing-loader">
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