import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';
import Section from '../resume/components/MainLayout/Section';
import WorkListData, { WorkStructure } from '../data/work-list';
import WorkList from '../resume/components/Works/List';
import { getAbsoluteHeight } from '../lib/utility';

type PageProps = {
};
type PageState = {
    pageInit: boolean
    currentScroll: number
    crrTag: string
    tagList: Array<string>
    workList: Array<WorkStructure>
    filteredWorkList: Array<WorkStructure>
};
class PortfolioPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        pageInit: false,
        currentScroll: 0,
        crrTag: '',
        tagList: [],
        workList: [],
        filteredWorkList: []
    };

    constructor(props: PageProps) {
        super(props);
        this.parallaxCallback = this.parallaxCallback.bind(this);
    }

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('#E3F0FF', '#64c571');
        // setCrrFeature('/portfolio');

        let tagList: Array<string> = [];
        let workList = WorkListData().workItem;
        workList.forEach(workItem => {
            workItem.tags?.forEach(tag => {
                if(tagList.indexOf(tag) === -1) {
                    tagList.push(tag);
                }
            })
        });
        this.setState({
            tagList: tagList,
            workList: workList,
            filteredWorkList: workList
        });

        this.pageInitTimeout = setTimeout(() => {
            this.setState({
                pageInit: true
            })
        }, 1000);
    }

    pageInitTimeout: any;
    componentWillUnmount(): void {
        clearTimeout(this.pageInitTimeout);
        // console.log('unmount', "/portfolio");
        const { setTextColor, crrFeature, setCrrFeature }: IThemeState = this.context;
        // console.log(crrFeature)
        if(crrFeature === '/portfolio') {
            setTextColor('white');
        }
    }

    parallaxCallback = (pos: number) => {
        this.setState({
            currentScroll: pos
        })
    }

    setCrrTag(crrTag: string) {
        const { workList } = this.state;
        const filteredWorkList = crrTag === "" ? workList : workList.filter((workItem: WorkStructure) => {
            return workItem.tags?.some(tag => tag === crrTag);
        });
        this.setState({
            crrTag,
            filteredWorkList,
        })
    }

    render() {
        const { pageInit, currentScroll, crrTag, tagList, filteredWorkList } = this.state;

        const { isToggleNav, isTogglingNav, isNavigating, isCanNotSmooth } = this.context;

        const creditComponentHeight = (getAbsoluteHeight('#creditComponent') ?? 40);

        return (
            <PageContainer key={'portfolio'} pathName='/portfolio' parallaxCallback={this.parallaxCallback}
                headerOverlayColor='#1818189d'
            >
                <motion.div
                    className='portfolio-page'
                    key={'PortfolioPage'}
                    style={{
                        paddingBottom: creditComponentHeight
                    }}
                >
                    <motion.div className='first-section'>
                        {/* Animated ambient glow blobs */}
                        <motion.div className='hero-glow hero-glow--a'
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: [0, 40, -20, 0],
                                y: [0, -30, 20, 0],
                                transition: {
                                    opacity: { duration: 1.5, delay: window.onFirstMounted ? 0 : 1 },
                                    scale: { duration: 1.5, delay: window.onFirstMounted ? 0 : 1, ease: [0.5, 0.025, 0, 1] },
                                    x: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
                                    y: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                                }
                            }}
                        />
                        <motion.div className='hero-glow hero-glow--b'
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: [0, -30, 25, 0],
                                y: [0, 20, -15, 0],
                                transition: {
                                    opacity: { duration: 1.5, delay: window.onFirstMounted ? .2 : 1.2 },
                                    scale: { duration: 1.5, delay: window.onFirstMounted ? .2 : 1.2, ease: [0.5, 0.025, 0, 1] },
                                    x: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
                                    y: { duration: 19, repeat: Infinity, ease: 'easeInOut' },
                                }
                            }}
                        />

                        <motion.div className='wrapper'
                            initial='hidden'
                            animate='visible'
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12,
                                        delayChildren: window.onFirstMounted ? 0.1 : 1.1,
                                    }
                                }
                            }}
                        >
                            <motion.div className='hero-content'>
                                <motion.span className='eyebrow'
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                                        visible: {
                                            opacity: 1, y: 0, filter: 'blur(0px)',
                                            transition: { duration: 0.7, ease: [0.5, 0.025, 0, 1] }
                                        }
                                    }}
                                >Software Development</motion.span>
                                <motion.div className='in-row'>
                                    {['COMMISSION,', 'LEARNING', 'and HOBBY'].map((line, i) => (
                                        <motion.h1 key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
                                                visible: {
                                                    opacity: 1, y: 0, filter: 'blur(0px)',
                                                    transition: { duration: 0.9, ease: [0.5, 0.025, 0, 1] }
                                                }
                                            }}
                                        >{line}</motion.h1>
                                    ))}
                                </motion.div>
                                <motion.p className='hero-sub'
                                    variants={{
                                        hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
                                        visible: {
                                            opacity: 1, y: 0, filter: 'blur(0px)',
                                            transition: { duration: 0.8, ease: [0.5, 0.025, 0, 1] }
                                        }
                                    }}
                                >
                                    A curated collection of projects across web, mobile, and desktop —
                                    spanning client work, experiments, and personal explorations.
                                </motion.p>
                            </motion.div>
                            <motion.div className='block-poly'
                                variants={{
                                    hidden: { opacity: 0, x: 80, scale: 0.92 },
                                    visible: {
                                        opacity: 1, x: 0, scale: 1,
                                        transition: { duration: 1.1, ease: [0.5, 0.025, 0, 1] }
                                    }
                                }}
                            >
                                <div className="understandCSS">
                                    <div className="frame">
                                        <h2 style={{marginTop: 40}}>WEB</h2>
                                        <h2>MOBILE</h2>
                                        <h2>DESKTOP</h2>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className='work-section'
                        initial={{
                            y: 200,
                            scale: 0.5
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: .75,
                                ease: [0.5, 0.025, 0, 1],
                                delay: window.onFirstMounted ? .35 : 1.15
                            }
                        }}
                    >
                        <div className='section-heading'>
                            {/* <span className='kicker'>{this.state.workList.length} projects</span> */}
                            <h1 className="work-list">Works</h1>
                            <span className='section-divider' />
                        </div>
                        <div className={'tagListWrapper'}>
                            <motion.div className={'tagList'}>
                                <motion.div key={'all-tags'} className={'tag ' + (crrTag === "" ? "active" : "")}
                                    onClick={() => this.setCrrTag('')}
                                >All</motion.div>
                                {tagList.map((tag: string, i: number) => <motion.div key={'tag-filter-'+i} className={'tag ' + (crrTag === tag ? "active" : "")}
                                    onClick={() => this.setCrrTag(crrTag === tag ? '' : tag)}
                                >{tag}</motion.div>)}
                            </motion.div>
                        </div>
                        <Section id="work-section" disableBackground={true} maxWidth={'unset'}>
                            <div style={{ padding: '0 10px'}}>
                                <WorkList layoutUniqueId={`layoutWorklist`} items={ filteredWorkList } disabledLayoutId={!pageInit || isToggleNav || isTogglingNav || isNavigating || isCanNotSmooth} />
                            </div>
                        </Section>
                    </motion.div>
                    
                </motion.div>
            </PageContainer>
        );
    }
}

PortfolioPage.contextType = AppMainContext;

export default PortfolioPage;