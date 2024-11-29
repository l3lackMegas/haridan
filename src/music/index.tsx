import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';
import Section from '../resume/components/MainLayout/Section';
import MusicItem from './MusicItem';

import MusicListData, { MusicStructure } from '../data/music-list';
import { getYoutubeId } from '../lib/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

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
        const { setTextColor, crrFeature, setCrrFeature, musicPlayerController }: IThemeState = this.context;
        // console.log(crrFeature)
        if(crrFeature === '/music') {
            setTextColor('white');
        } else {
            musicPlayerController.hidePlayer();
        }
    }

    parallaxCallback = (pos: number) => {
        this.setState({
            currentScroll: pos
        })
    }

    render() {
        const { currentScroll } = this.state;
        const { crrFeature, isToggleNav, youtubeIframeShow, musicPlayerController } = this.context;

        const hidePageUI = musicPlayerController.isPlaying && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused;

        // let youtubeId = getYoutubeId(musicPlayerController.crrUrl);
        let songList = MusicListData().songList;
        let songIndex = songList.findIndex((item: MusicStructure) => item.url === musicPlayerController.crrUrl || item.videoUrl === musicPlayerController.crrUrl);
        let thumbnailId;
        if(songIndex === -1) {
            thumbnailId = getYoutubeId(musicPlayerController.crrUrl);
        } else {
            thumbnailId = getYoutubeId(songList[songIndex].url);
        }

        // console.log('youtubeIframeShow', youtubeIframeShow)

        const isOnMusicPage = crrFeature === '/music';

        return (
            <PageContainer key={'music-page-container'} pathName='/music' parallaxCallback={this.parallaxCallback}
                headerOverlayColor={hidePageUI ? undefined : '#1818189d'}
            >
                <motion.div
                    key={'MusicPage'}
                    className='music-page'
                    style={{
                        pointerEvents: hidePageUI ? 'none' : 'auto',
                        opacity: !isToggleNav && hidePageUI ? 0 : 1,
                        backdropFilter: !window.isMobile && !isToggleNav && hidePageUI ? '' : 'blur(30px) saturate(30%)',
                        transition: 'opacity .25s ease-in-out, backdrop-filter .25s ease-in-out',
                        backgroundColor: window.isMobile || window.isSafari ? '#181818' : ''
                    }}
                >
                    {!window.isMobile && !window.isSafari && <motion.div className='background-overlay'
                        style={{
                            top: currentScroll,
                        }}
                        animate={{
                            opacity: !musicPlayerController.isPaused && isOnMusicPage && youtubeIframeShow && !isToggleNav && !window.isMobile && !window.isSafari && thumbnailId ? .25 : 1,
                            transition: {
                                duration: !isOnMusicPage ? .5 : youtubeIframeShow && isToggleNav && !window.isMobile && thumbnailId ? .75 : .25,
                                delay: !musicPlayerController.isPaused && isOnMusicPage && youtubeIframeShow && !isToggleNav && !window.isMobile && thumbnailId ? .75 : 0
                            }
                        }}
                    >
                        {/* <motion.div
                            className='imgBackdrop'
                            style={{
                                backgroundImage: `url(https://img.youtube.com/vi/${thumbnailId}/maxresdefault.jpg)`,
                            }}
                        ></motion.div> */}
                    </motion.div>}
                    <motion.div
                        className='music-secion'
                    >
                        <motion.div className='section-info'
                            animate={this.context.isCanNotSmooth ? {} : {
                                scale: !isToggleNav && hidePageUI ? .9 : 1,
                                opacity: !isToggleNav && hidePageUI ? 0 : 1,
                                transition: {
                                    duration: !isToggleNav && hidePageUI ? .25 : .75,
                                    ease: [0.5, 0.025, 0, 1],
                                }
                            }}
                        >
                            <motion.h1>Most Favorites</motion.h1>
                            <motion.p><FontAwesomeIcon icon={faYoutube} /> All music on this website is using YouTube's iframe.</motion.p>
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