import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

import { TextColor, IThemeState } from '../context';

import PageContainer from '../common/PageContainer';

type PageProps = {
};
type PageState = {
    
};
class LandingPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        
    };

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('white');
        setCrrFeature('/');
    }

    componentWillUnmount(): void {
        console.log('unmount', "/");
        const { setTextColor, crrFeature, setCrrFeature, scrollTop }: IThemeState = this.context;
        if(crrFeature === '/') {
            setTextColor('white');
        }
    }

    render() {
        return (
            <PageContainer key={'home'} pathName='/'>
                <motion.div
                    className='landing-page'
                    key={'landingPage'}
                >
                    <motion.div className="parallaxHero"
                        initial={{ opacity: 0, scale: 1.8 }}
                        animate={{ 
                            opacity: 1,
                            scale: 1,
                        }}
                        // transition={{ duration: 1 }}
                        transition={{
                            delay: .5,
                            duration: 5,
                            ease: [0.05, 0.025, 0, 1]
                        }}
                    >
                        <motion.div className="gradient"></motion.div>
                    </motion.div>
                </motion.div>
            </PageContainer>
        );
    }
}

LandingPage.contextType = TextColor;

export default LandingPage;