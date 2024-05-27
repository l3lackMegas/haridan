import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';
import Section from '../resume/components/MainLayout/Section';
import MusicItem from './MusicItem';

import MusicListData, { MusicStructure } from '../data/music-list';

type PageProps = {
};
type PageState = {
    currentScroll: number
    musicList: Array<MusicStructure>,
};
class MusicPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        currentScroll: 0,
        musicList: MusicListData().songList
    };

    constructor(props: PageProps) {
        super(props);
        this.parallaxCallback = this.parallaxCallback.bind(this);
        this.playMusic = this.playMusic.bind(this);
    }

    componentDidMount() {
        const { setTextColor, setCrrFeature, musicPlayerController }: IThemeState = this.context;
        setTextColor('#E3F0FF', '#c56464');
        // setCrrFeature('/music');

        // this.playMusic('https://youtu.be/LaEgpNBt-bQ')
    }

    async playMusic(url: string) {
        const { musicPlayerController }: IThemeState = this.context;
        await musicPlayerController.showPlayer();
        await musicPlayerController.setCrrUrl(url);
    }

    componentWillUnmount(): void {
        // console.log('unmount', "/music");
        const { setTextColor, crrFeature, setCrrFeature }: IThemeState = this.context;
        // console.log(crrFeature)
        if(crrFeature === '/music') {
            setTextColor('white');
        }
    }

    parallaxCallback = (pos: number) => {
        this.setState({
            currentScroll: pos
        })
    }

    render() {
        const { currentScroll } = this.state;
        const { isToggleNav, musicPlayerController } = this.context;

        const hidePageUI = musicPlayerController.isPlaying && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused;

        return (
            <PageContainer key={'music-page-container'} pathName='/music' parallaxCallback={this.parallaxCallback}
                headerOverlayColor={hidePageUI ? undefined : '#1818189d'}
            >
                <motion.div
                    key={'MusicPage'}
                    className='music-page'
                    style={{
                        pointerEvents: hidePageUI ? 'none' : 'auto',
                    }}
                    animate={{
                        opacity: !isToggleNav && hidePageUI ? 0 : 1,
                        transition: {
                            duration: 0.75
                        }
                    }}
                >
                    <motion.div
                        className='music-secion'
                    >
                        <motion.div className='section-info'>
                            <motion.h1>Most Favorites</motion.h1>
                            <motion.p>All music on this website is using YouTube's iframe.</motion.p>
                            <motion.div className='music-list'>
                                {
                                    this.state.musicList.map((item, index) => {
                                        return (<MusicItem key={index} songInfo={item} />)
                                    })
                                }
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </PageContainer>
        );
    }
}

MusicPage.contextType = AppMainContext;

export default MusicPage;