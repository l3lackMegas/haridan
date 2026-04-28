import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';

import PageContainer from '../common/PageContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



type PageProps = {
};
type PageState = {
    mounted: boolean
    crrLetter: string | undefined
    letterList: string[]
};
class NotFoundPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        mounted: false,
        crrLetter: 'JARUWAT.DEV',
        letterList: [
            'JARUWAT.DEV',
            'SOFTWARE DEVELOPER',
            'CAT LOVER',
            'OSU PLAYER',
            'KFC LOVER',
            'FULL-STACK DEVELOPER',
        ]
    };

    shuffleInterval: any;

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('white', '#ffb3b3');
        setCrrFeature('/404');
        setTimeout(() => {
            this.setState({
                mounted: true,
            });
            this.shuffleInterval = setInterval(this.shuffleLetter, 2400);
        }, window.onFirstMounted ? 500 : 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.shuffleInterval);
        // console.log('unmount', "/404");
        const { setTextColor, crrFeature }: IThemeState = this.context;
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

    render() {
        const { mounted, crrLetter } = this.state;
        return (
            <PageContainer key={'not-found'} pathName='/404'>
                <div className='not-found-page'>
                    <section className='nf-hero'>
                        <div className='nf-bg-grid' />
                        <div className='nf-bg-orbs' aria-hidden>
                            <span className='orb orb-1' />
                            <span className='orb orb-2' />
                            <span className='orb orb-3' />
                        </div>

                        <motion.div
                            className='nf-content'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            <p className='nf-eyebrow'>PAGE NOT FOUND</p>
                            <h1 className='nf-num'>404</h1>
                            <p className='nf-msg'>The page you're looking for got lost in the void.</p>

                            <div style={{
                                marginBottom: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <div className='nf-rotator'>
                                    <span className='prefix'>I'm a&nbsp;</span>
                                    <span className='rotator-window'>
                                        <AnimatePresence mode='wait'>
                                            {crrLetter &&
                                                <motion.span
                                                    key={crrLetter}
                                                    className='rotator-item'
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -30, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    {crrLetter}
                                                </motion.span>
                                            }
                                        </AnimatePresence>
                                    </span>
                                </div>

                                <Link to='/' replace={true} className='commonBtn nf-btn'>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <span>Go Home</span>
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </PageContainer>
        );
    }
}

NotFoundPage.contextType = AppMainContext;

export default NotFoundPage;