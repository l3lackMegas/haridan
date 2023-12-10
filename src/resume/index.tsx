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

import resumeData from '../data/resume'
import Credit from './components/MainLayout/Credit';

type PageProps = {
};
type PageState = {
    mounted: boolean
    workItems: any[]
    resume: {
        experience: any[]
        rewards: any[]
        education: any[]
    },
    parallaxPos: number
    landingParallax: number
    skillParallax: number
    resumeParallax: number
};
class resumePage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        mounted: false,
        workItems: [],
        resume: {
            experience: [],
            rewards: [],
            education: []
        },
        parallaxPos: 0,
        landingParallax: 0,
        skillParallax: 0,
        resumeParallax: 0,
    };

    constructor(props: PageProps) {
        super(props);
        this.parallaxCallback = this.parallaxCallback.bind(this);
    }

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('white');
        setCrrFeature('/');
        setTimeout(() => {
            this.setState({
                mounted: true,
                workItems: resumeData().workItem,
                resume: resumeData().resume
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

    parallaxCallback = (pos: number) => {
        let currentScroll = pos,
            informationObject: HTMLElement | null = document.querySelector('#information'),
            skillParallax: HTMLElement | null = document.querySelector('#skill-section'),
            resumeParallax: HTMLElement | null = document.querySelector('#resume-section'),
            parallaxObjec = {
                landing: this.state.landingParallax,
                skill: this.state.skillParallax,
                resume: this.state.resumeParallax
            }

        // Check is skill landing appear
        if(currentScroll <= window.innerHeight)
            parallaxObjec.landing = currentScroll

        // Check is skill section appear
        let skillParallaxOffset = skillParallax ? skillParallax.getBoundingClientRect().top : 0
        if(informationObject && skillParallax &&
            skillParallaxOffset - window.innerHeight <=0 &&
            skillParallaxOffset + skillParallax.offsetHeight >= 0
        ) parallaxObjec.skill = informationObject.offsetHeight + (currentScroll / 2)

        // Check is resume section appear
        let resumeParallaxOffset = resumeParallax ? resumeParallax.getBoundingClientRect().top : 0
        if(informationObject && resumeParallax && skillParallax &&
            resumeParallaxOffset - window.innerHeight <=0 &&
            resumeParallaxOffset + resumeParallax.offsetHeight >= 0
        ) parallaxObjec.resume = skillParallax.offsetHeight + (currentScroll / 2)


        this.setState({ 
            parallaxPos: currentScroll,
            landingParallax: this.context.isCanNotSmooth ? 0 : parallaxObjec.landing,
            skillParallax: this.context.isCanNotSmooth ? 0 : parallaxObjec.skill,
            resumeParallax: this.context.isCanNotSmooth ? 0 : parallaxObjec.resume
        })
    }

    render() {
        const { mounted, workItems, resume } = this.state;
        return (
            <PageContainer key={'home'} pathName='/' parallaxCallback={this.parallaxCallback}>
                <motion.div
                    className='resume-page'
                    key={'resumePage'}
                >
                    <motion.div style={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                        overflow: 'hidden',
                    }}>
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
                                backgroundPositionY: this.state.landingParallax / 2.5
                            }}
                        >
                        </motion.div>
                        <motion.div className="parallaxHero" style={{
                            backgroundImage: 'unset'
                        }}>
                            <motion.div className='sub'>
                                <motion.div className="gradient"></motion.div>
                            </motion.div>
                        </motion.div>
                        <NameCard isReady={mounted} />
                    </motion.div>
                    <Section id="information" style={{ textAlign: 'left' }}>
                        <div style={{ padding: '0 20px'}}>
                            <h1 className="infoTitle">Hi there!</h1>
                            <div style={{ color: 'rgba(255, 255, 255, .75)' }}>
                                <div style={{ lineHeight: '30px' }}>
                                    <p>I am Jaruwat Pohong, a Software Developer who work in Web, Desktop and Mobile application.</p>
                                    <p>Actually, I am a Frontend Dev and I would like to do anything about web design and frontend development.</p>
                                    <p>But even if it{"'s"} not a frontend job, I can still enjoy with it. {"<3"}</p>
                                </div>
                                <div className="understandCSS">
                                    <div className="frame">
                                        <h1 style={{marginTop: 40}}>CSS</h1>
                                        <h1>IS</h1>
                                        <h1 style={{transform: 'translateX(-23px)'}}>AWESOME</h1>
                                    </div>
                                    <p style={{textAlign: 'center'}}>Just kidding</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section
                        id="skill-section"
                        style={{
                            textAlign: 'center',
                            backgroundImage: 'url(/img/skill-background.jpg)',
                            backgroundSize: 'cover',
                            backgroundPositionY: this.state.skillParallax
                    }}>
                        <div style={{ padding: '0 20px'}}>
                            <h1 className="infoTitle">My Skill</h1>
                            <SkillCard/>
                        </div>
                    </Section>

                    <h1 className="work-list" style={{ textAlign: 'center' }}>My Works</h1>
                    <Section id="work-section">
                        <div style={{ padding: '0 10px'}}>
                            <WorkList layoutUniqueId={`layoutWorklist`} items={ workItems } />
                        </div>
                    </Section>

                    <h1 className="infoTitle" style={{ textAlign: 'center' }}>Résumé</h1>
                    <Section id="resume-section"
                        style={{
                            backgroundImage: 'url(/img/mobile-background.jpg)',
                            backgroundSize: 'cover',
                            backgroundPositionY: this.state.resumeParallax
                    }}>
                        <div style={{ padding: '0 10px'}}>
                            <Resume title="Experience" data={resume.experience}/>
                            <Resume title="Rewards" data={resume.rewards}/>
                            <Resume title="Education" data={resume.education}/>
                        </div>
                    </Section>
                </motion.div>
                <Credit/>
            </PageContainer>
        );
    }
}

resumePage.contextType = TextColor;

export default resumePage;