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

export default function App() {
	const location = useLocation();
	  
	return (
    <LayoutGroup>
            <AnimatePresence mode='sync'>
                <Header key={'nav-header'} />
            </AnimatePresence>
            <AnimatePresence mode='sync'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/playlist" element={<MusicPage  />} />
                </Routes>
            </AnimatePresence>
        </LayoutGroup>
	);
}