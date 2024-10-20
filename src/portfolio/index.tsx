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
};
class PortfolioPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        pageInit: false,
        currentScroll: 0,
        crrTag: '',
        tagList: [],
        workList: []
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
            workList: workList
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

    render() {
        const { pageInit, currentScroll, crrTag, tagList, workList } = this.state;

        const filteredWorkList = crrTag === "" ? workList : workList.filter((workItem: WorkStructure) => {
            return workItem.tags?.some(tag => tag === crrTag);
        });

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
                        <motion.div className='wrapper'
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
                                    delay: window.onFirstMounted ? 0 : 1
                                }
                            }}
                        >
                            <motion.div className='in-row'>
                                <motion.h1>COMMISSION,</motion.h1>
                                <motion.h1>LEARNING</motion.h1>
                                <motion.h1>and HOBBY</motion.h1>
                            </motion.div>
                            <motion.div className='block-poly'>
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
                        <h1 className="work-list" style={{ textAlign: 'center' }}>Works</h1>
                        <div className={'tagListWrapper'}>
                            <motion.div className={'tagList'}>
                                <motion.div key={'all-tags'} className={'tag ' + (crrTag === "" ? "active" : "")}
                                    onClick={() => this.setState({ crrTag: "" })}
                                >All</motion.div>
                                {tagList.map((tag: string, i: number) => <motion.div key={'tag-filter-'+i} className={'tag ' + (crrTag === tag ? "active" : "")}
                                    onClick={() => this.setState({ crrTag: crrTag === tag ? '' : tag })}
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