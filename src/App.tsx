import * as React from 'react';
import {
    useLocation,
    Routes,
	Route
} from 'react-router-dom';
import { LayoutGroup, AnimatePresence } from 'framer-motion';

import LandingPage from './landing';
import MusicPage from './music';

import './App.scss';

export default function App() {
	const location = useLocation();
	  
	return (
        <LayoutGroup>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/music" element={<MusicPage  />} />
                </Routes>
            </AnimatePresence>
        </LayoutGroup>
	);
}