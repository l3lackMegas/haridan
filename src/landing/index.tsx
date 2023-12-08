import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

import { TextColor, IThemeState } from '../context';

import PageContainer from '../common/PageContainer';


import LandingData from '../data/landing'

type PageProps = {
};
type PageState = {
    mounted: boolean;
};
class LandingPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        mounted: false,
    };

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('#895252', '#fd9595');
        // setCrrFeature('/');
        setTimeout(() => {
            this.setState({
                mounted: true,
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

    landingTextAnimateVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: .25,
                ease: 'easeInOut',
                delay: .5,
                staggerChildren: 0.025,
                delayChildren: 0.5,
            },
        },
    }

    variantEachLetter = {
        hidden: {
            opacity: 0,
            // x: 150,
            y: 150,
        },
        show: {
            opacity: 1,
            // x: 0,
            y: 0,
            transition: {
                duration: .5,
                ease: 'easeInOut',
            },
        },
    }

    render() {
        const { mounted, } = this.state;
        return (
            <PageContainer key={'home'} pathName='/'>
                <motion.div
                    className='landing-page'
                    key={'landingPage'}
                    style={{
                        fontSize: 'calc(150/1920*100*1vw)',
                        lineHeight: 1,
                    }}
                >
                    <br/>
                    <motion.div
                        className='centerContain'
                        // style={{
                        //     textAlign: 'right',
                        // }}
                    >
                        <motion.p
                            variants={this.landingTextAnimateVariant}
                            initial="hidden"
                            animate="show"
                            style={{
                                whiteSpace: 'nowrap',
                                fontWeight: 'normal',
                            }}
                        >
                           
                            <this.wrapLetterAnimated letter='l' />
                            <this.wrapLetterAnimated letter="3" />
                            <this.wrapLetterAnimated letter='l' />
                            <this.wrapLetterAnimated letter='a' />
                            <this.wrapLetterAnimated letter='c' />
                            <this.wrapLetterAnimated letter='k' />
                            <this.wrapLetterAnimated letter='M' />
                            <this.wrapLetterAnimated letter='e' />
                            <this.wrapLetterAnimated letter='g' />
                            <this.wrapLetterAnimated letter='a' />
                            <this.wrapLetterAnimated letter='s' />
                            {/* <motion.div style={{
                                display: 'inline-block',
                                width: 'calc(100/2920*100*1vw)',
                            }}></motion.div>
                            <this.wrapLetterAnimated letter='I' />
                            <this.wrapLetterAnimated letter='S' /> */}
                        </motion.p>
                        <motion.p
                            style={{
                                whiteSpace: 'nowrap',
                                fontWeight: 'bold',
                                fontSize: '0.5em',
                                backgroundColor: '#895252',
                                color: 'white',
                                display: 'inline-block',
                                padding: '0 10px',
                                overflow: 'hidden',
                            }}
                            initial={{
                                opacity: 0,
                                // x: 150,
                                y: 150,
                            }}
                            animate={{
                                opacity: 1,
                                // x: 0,
                                y: 0,
                                transition: {
                                    duration: .5,
                                    ease: 'easeInOut',
                                    delay: .65,
                                },
                            }}
                        >SOFTWARE DEVELOPER</motion.p>
                    </motion.div>
                </motion.div>
            </PageContainer>
        );
    }

    wrapLetterAnimated = ({letter} : {
        letter?: string,
    }) => {
        return (
            <motion.span
                variants={this.variantEachLetter}
                style={{
                    display: 'inline-block',
                }}
            >{letter}</motion.span>
        );
    }
}

LandingPage.contextType = TextColor;

export default LandingPage;