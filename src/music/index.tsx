import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

type PageProps = {
};
type PageState = {
    
};
class MusicPage extends React.Component<PageProps, PageState> {
    state: PageState = {
        
    };

    render() {
        return (
            <motion.div
                key={'musicPage'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ y: -500, opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <h1>Landing Page</h1>
                <Link to='/'>Home</Link>
            </motion.div>
        );
    }
}

export default MusicPage;