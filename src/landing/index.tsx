import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

import { TextColor, IThemeState } from '../context';

import PageContainer from '../common/PageContainer';

import Section from "./components/MainLayout/Section"
import NameCard from './components/NameCard';
import Resume from './components/Resume'
import Education from "./components/Resume/Education"
import Experience from "./components/Resume/Experience"
import Rewards from "./components/Resume/Rewards"
import SkillCard from "./components/SkillCard"
import WorkList from './components/Works/List'

type PageProps = {
};
type PageState = {
    mounted: boolean;
    workItems: any[];
    resume: {
        experience: any[];
        rewards: any[];
        education: any[];
    }
};
class LandingPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        mounted: false,
        workItems: [],
        resume: {
            experience: [],
            rewards: [],
            education: []
        },
    };

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('white');
        // setCrrFeature('/');
        setTimeout(() => {
            this.setState({
                mounted: true
            });
        }, window.onFirstMounted ? 750 : 1250);
    }

    componentWillUnmount(): void {
        console.log('unmount', "/");
        const { setTextColor, crrFeature, setCrrFeature, scrollTop }: IThemeState = this.context;
        if(crrFeature === '/') {
            setTextColor('white');
        }
    }

    render() {
        const { mounted, workItems, resume } = this.state;
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
                        style={{
                            // backgroundPositionY: this.context.parallaxPos / 2
                        }}
                    >
                        <motion.div className='sub'>
                            <motion.div className="gradient"></motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                    }}>
                        <NameCard isReady={mounted} />
                    </motion.div>
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                    }}>
                        <NameCard isReady={mounted} />
                    </motion.div>
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                    }}>
                        <NameCard isReady={mounted} />
                    </motion.div>
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                    }}>
                        <NameCard isReady={mounted} />
                    </motion.div>
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                    }}>
                        <NameCard isReady={mounted} />
                    </motion.div>
                </motion.div>
            </PageContainer>
        );
    }
}

LandingPage.contextType = TextColor;

export default LandingPage;