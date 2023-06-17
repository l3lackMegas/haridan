import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

type PageProps = {
};
type PageState = {
    
};
class LandingPage extends React.Component<PageProps, PageState> {
    state: PageState = {
        
    };

    render() {
        return (
            <motion.div
                className='landing-page'
                key={'landingPage'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ y: -500, opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <h1>Music Page</h1>
                <Link to='/music'>Landing</Link>
            </motion.div>
        );
    }
}

export default LandingPage;