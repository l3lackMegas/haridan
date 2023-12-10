import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

import { TextColor, IThemeState } from '../context';

import PageContainer from '../common/PageContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';



type PageProps = {
};
type PageState = {
    mounted: boolean
    crrLetter: string | undefined
    letterList: string[]
};
class AboutPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        mounted: false,
        crrLetter: 'SOFTWARE DEVELOPER',
        letterList: [
            'WEB DEVELOPER',
            'FRONT-END DEVELOPER',
            'BACK-END DEVELOPER',
            'FULL-STACK DEVELOPER',
            'CAT LOVER',
            'SOFTWARE DEVELOPER',
        ]
    };

    shuffleInterval: any;

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('white', '#ffb3b3');
        setCrrFeature('/about');
        setTimeout(() => {
            this.setState({
                mounted: true,
            });
            this.shuffleInterval = setInterval(this.shuffleLetter, 4000);
        }, window.onFirstMounted ? 500 : 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.shuffleInterval);
        console.log('unmount', "/about");
        const { setTextColor, crrFeature, setCrrFeature, scrollTop }: IThemeState = this.context;
        if(crrFeature === '/') {
            setTextColor('white');
        }
    }

    shuffleLetter = async () => {
        this.setState({
            crrLetter: undefined,
        });
        await new Promise(resolve => setTimeout(resolve, 550));
        const { letterList } = this.state;
        const newLetterList = [...letterList];
        const crrLetter = newLetterList.shift();
        newLetterList.push(crrLetter!);
        this.setState({
            letterList: newLetterList,
            crrLetter: crrLetter || '',
        });
    }

    aboutTextAnimateVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: .25,
                ease: 'easeInOut',
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
        const { mounted, crrLetter } = this.state;
        return (
            <PageContainer key={'about'} pathName='/about'>
                
                <motion.div
                    className='about-page'
                    key={'aboutPage'}
                    style={{
                        fontSize: 'calc(150/1920*100*1vw)',
                        lineHeight: 1,
                    }}
                >
                    { mounted && <>
                        <br/>
                        <motion.div
                            className='centerContain'
                            // style={{
                            //     textAlign: 'right',
                            // }}
                        >
                            <motion.p
                                variants={this.aboutTextAnimateVariant}
                                initial="hidden"
                                animate="show"
                                style={{
                                    whiteSpace: 'nowrap',
                                    fontWeight: 'normal',
                                }}
                            >
                            
                                <this.wrapLetterAnimated letter='J' />
                                <this.wrapLetterAnimated letter="a" />
                                <this.wrapLetterAnimated letter='r' />
                                <this.wrapLetterAnimated letter='u' />
                                <this.wrapLetterAnimated letter='w' />
                                <this.wrapLetterAnimated letter='a' />
                                <this.wrapLetterAnimated letter='t' />
                                <motion.div style={{
                                    display: 'inline-block',
                                    width: 'calc(100/2920*100*1vw)',
                                }}></motion.div>
                                <this.wrapLetterAnimated letter='P' />
                                <this.wrapLetterAnimated letter='o' />
                                <this.wrapLetterAnimated letter='h' />
                                <this.wrapLetterAnimated letter='o' />
                                <this.wrapLetterAnimated letter='n' />
                                <this.wrapLetterAnimated letter='g' />
                            </motion.p>
                            <motion.div
                                style={{
                                    display: 'inline-block',
                                    height: 73
                                }}
                            >
                                <AnimatePresence mode='wait'
                                    key={'about-me-text'}
                                >
                                
                                    {crrLetter && 
                                        <motion.p
                                            style={{
                                                whiteSpace: 'nowrap',
                                                fontWeight: 'bold',
                                                fontSize: '0.5em',
                                                backgroundColor: '#952525',
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
                                            exit={{
                                                opacity: 0,
                                                y: -50,
                                                transition: {
                                                    duration: .5,
                                                    ease: 'easeInOut',
                                                },
                                            }}
                                        >{crrLetter}</motion.p>
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </>}
                </motion.div>
                { mounted && <>
                    <motion.p style={{
                        position: 'fixed',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'white',
                        fontSize: '1.1em',
                        whiteSpace: 'nowrap' 
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: 'easeInOut',
                            delay: 1,
                        },
                    }}
                    >
                        <FontAwesomeIcon icon={faWarning} style={{color: 'orange'}} />
                        <span style={{margin: '0 10px' }}>This page is under construction.</span>
                        <FontAwesomeIcon icon={faWarning} style={{color: 'orange'}} />
                    </motion.p>
                </>}
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

AboutPage.contextType = TextColor;

export default AboutPage;