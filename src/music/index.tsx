import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';
import MusicItem from './MusicItem';

import MusicListData, { MusicStructure } from '../data/music-list';
import { getYoutubeId } from '../lib/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilter, faXmark, faShuffle, faPlay } from '@fortawesome/free-solid-svg-icons';

const ARTIST_ALL = '__all__';

type PageProps = {
};
type PageState = {
    currentScroll: number
    musicList: Array<MusicStructure>
    artist: string
    showFilter: boolean
};
class MusicPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        currentScroll: 0,
        musicList: MusicListData().songList,
        artist: ARTIST_ALL,
        showFilter: false,
    };

    constructor(props: PageProps) {
        super(props);
        this.parallaxCallback = this.parallaxCallback.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.playShuffle = this.playShuffle.bind(this);
    }

    async playShuffle() {
        const { musicList, artist } = this.state;
        const pool = artist === ARTIST_ALL
            ? musicList
            : musicList.filter(item => item.author === artist);
        if (pool.length === 0) return;
        const pick = pool[Math.floor(Math.random() * pool.length)];
        await this.playMusic(pick.url);
    }

    componentDidMount() {
        const { setTextColor }: IThemeState = this.context;
        setTextColor('#E3F0FF', '#c56464');
    }

    async playMusic(url: string) {
        const { musicPlayerController }: IThemeState = this.context;
        await musicPlayerController.showPlayer();
        await musicPlayerController.setCrrUrl(url);
    }

    componentWillUnmount(): void {
        const { setTextColor, crrFeature, musicPlayerController }: IThemeState = this.context;
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
        const { currentScroll, musicList, artist, showFilter } = this.state;
        const { crrFeature, isToggleNav, youtubeIframeShow, musicPlayerController } = this.context;

        const hidePageUI = musicPlayerController.isPlaying && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused;

        let songList = MusicListData().songList;
        let songIndex = songList.findIndex((item: MusicStructure) => item.url === musicPlayerController.crrUrl || item.videoUrl === musicPlayerController.crrUrl);
        let thumbnailId;
        if(songIndex === -1) {
            thumbnailId = getYoutubeId(musicPlayerController.crrUrl);
        } else {
            thumbnailId = getYoutubeId(songList[songIndex].url);
        }

        const isOnMusicPage = crrFeature === '/music';

        // Build artist list with counts
        const artistMap = new Map<string, number>();
        musicList.forEach(item => {
            artistMap.set(item.author, (artistMap.get(item.author) || 0) + 1);
        });
        const artistList = Array.from(artistMap.entries())
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        const topArtists = artistList.slice(0, 3);

        const visibleSongs = artist === ARTIST_ALL
            ? musicList
            : musicList.filter(item => item.author === artist);

        // Featured / Now Playing — prefer current playing song, fallback to first pinned, then first
        const playingSong = songIndex !== -1 ? songList[songIndex] : null;
        const featuredSong: MusicStructure = playingSong
            || musicList.find(item => item.pin === true)
            || musicList[0];
        const featuredThumbId = featuredSong ? getYoutubeId(featuredSong.url) : '';
        const isFeaturedPlaying = !!playingSong && musicPlayerController.isPlaying && !musicPlayerController.isPaused;

        const fadeUp = {
            hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
            visible: {
                opacity: 1, y: 0, filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.5, 0.025, 0, 1] }
            }
        };
        const sectionStagger = {
            hidden: {},
            visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.05 }
            }
        };

        return (
            <PageContainer key={'music-page-container'} pathName='/music' parallaxCallback={this.parallaxCallback}
                headerOverlayColor={hidePageUI ? undefined : '#1818189d'}
            >
                <motion.div
                    key={'MusicPage'}
                    className='music-page music-page--redesign'
                    style={{
                        pointerEvents: hidePageUI ? 'none' : 'auto',
                        opacity: !isToggleNav && hidePageUI ? 0 : 1,
                        backdropFilter: !window.isMobile && !isToggleNav && hidePageUI ? '' : 'blur(30px) saturate(30%)',
                        transition: 'opacity .25s ease-in-out, backdrop-filter .25s ease-in-out',
                        backgroundColor: window.isMobile || window.isSafari ? '#181818' : ''
                    }}
                >
                    {!window.isMobile && !window.isSafari && <motion.div className='background-overlay'
                        style={{ top: currentScroll }}
                        animate={{
                            opacity: !musicPlayerController.isPaused && isOnMusicPage && youtubeIframeShow && !isToggleNav && !window.isMobile && !window.isSafari && thumbnailId ? .25 : 1,
                            transition: {
                                duration: !isOnMusicPage ? .5 : youtubeIframeShow && isToggleNav && !window.isMobile && thumbnailId ? .75 : .25,
                                delay: !musicPlayerController.isPaused && isOnMusicPage && youtubeIframeShow && !isToggleNav && !window.isMobile && thumbnailId ? .75 : 0
                            }
                        }}
                    />}

                    <motion.div
                        className='music-secion'
                        animate={this.context.isCanNotSmooth ? {} : {
                            scale: !isToggleNav && hidePageUI ? .9 : 1,
                            opacity: !isToggleNav && hidePageUI ? 0 : 1,
                            transition: {
                                duration: !isToggleNav && hidePageUI ? .25 : .75,
                                ease: [0.5, 0.025, 0, 1],
                            }
                        }}
                    >
                        {/* Hero */}
                        <motion.div className='music-hero'
                            initial='hidden'
                            animate='visible'
                            variants={sectionStagger}
                        >
                            <motion.div className='music-hero__copy'>
                                <motion.span className='music-hero__eyebrow' variants={fadeUp}>
                                    <FontAwesomeIcon icon={faYoutube} style={{ color: '#ff5b5b' }}/> Powered by YouTube iframe
                                </motion.span>
                                <motion.h1 className='music-hero__title' variants={fadeUp}>
                                    The songs<br/>
                                    that <span className='music-hero__title-accent'>shape my days</span>.
                                </motion.h1>
                                <motion.p className='music-hero__sub' variants={fadeUp}>
                                    A living playlist of tracks I keep returning to — from
                                    energetic loops while coding to quiet moments between deadlines.
                                </motion.p>

                                <motion.div className='music-hero__stats' variants={fadeUp}>
                                    <span className='music-stat'><strong>{musicList.length}</strong> tracks</span>
                                    <span className='music-stat__dot'>·</span>
                                    <span className='music-stat'><strong>{artistList.length}</strong> artists</span>
                                </motion.div>
                            </motion.div>

                            <motion.div className='music-hero__visual' variants={fadeUp}>
                                {featuredSong && (
                                    <motion.div
                                        className='music-feature'
                                        initial={{ opacity: 0, y: 30, scale: .96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: .8, ease: [0.5, 0.025, 0, 1] } }}
                                    >
                                        <div
                                            className='music-feature__art'
                                            style={{ backgroundImage: `url(https://img.youtube.com/vi/${featuredThumbId}/maxresdefault.jpg)` }}
                                        >
                                            <div className='music-feature__overlay'/>
                                            {isFeaturedPlaying && (
                                                <span className='music-feature__live'>
                                                    <span className='music-feature__live-dot'/> Now playing
                                                </span>
                                            )}
                                        </div>
                                        <div className='music-feature__body'>
                                            <span className='music-feature__label'>
                                                {isFeaturedPlaying ? 'Now playing' : playingSong ? 'Paused' : 'Featured'}
                                            </span>
                                            <h3 className='music-feature__title' title={featuredSong.title}>
                                                {featuredSong.title}
                                            </h3>
                                            <p className='music-feature__author'>{featuredSong.author}</p>
                                            <div className='music-feature__actions'>
                                                <motion.button
                                                    type='button'
                                                    className='music-feature__play'
                                                    onClick={() => this.playMusic(featuredSong.url)}
                                                    whileHover={{ scale: 1.04 }}
                                                    whileTap={{ scale: 0.96 }}
                                                >
                                                    <FontAwesomeIcon icon={faPlay} />
                                                    <span>{isFeaturedPlaying ? 'Replay' : 'Play'}</span>
                                                </motion.button>
                                                <motion.button
                                                    type='button'
                                                    className='music-feature__shuffle'
                                                    onClick={this.playShuffle}
                                                    whileHover={{ scale: 1.04 }}
                                                    whileTap={{ scale: 0.96 }}
                                                    title='Shuffle play'
                                                >
                                                    <FontAwesomeIcon icon={faShuffle} />
                                                    <span>Shuffle</span>
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <motion.div className='music-hero__glow'/>
                            </motion.div>
                        </motion.div>

                        {/* Toolbar — filter by artist (collapsible) */}
                        <AnimatePresence initial={false}>
                            {showFilter && (
                                <motion.div className='music-toolbar'
                                    key='music-toolbar'
                                    initial={{ opacity: 0, height: 0, y: -10 }}
                                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                                    exit={{ opacity: 0, height: 0, y: -10 }}
                                    transition={{ duration: .35, ease: [0.5, 0.025, 0, 1] }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className='music-toolbar__inner'>
                                        <span className='music-toolbar__label'>Filter by artist</span>
                                        <div className='music-toolbar__filters'>
                                            <button
                                                className={`music-pill ${artist === ARTIST_ALL ? 'is-active' : ''}`}
                                                onClick={() => this.setState({ artist: ARTIST_ALL })}
                                            >
                                                All
                                                <span className='music-pill__count'>{musicList.length}</span>
                                            </button>
                                            {artistList.map(([name, count]) => (
                                                <button
                                                    key={name}
                                                    className={`music-pill ${artist === name ? 'is-active' : ''}`}
                                                    onClick={() => this.setState({ artist: name })}
                                                    title={name}
                                                >
                                                    <span className='music-pill__name'>{name}</span>
                                                    <span className='music-pill__count'>{count}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Tracks grid — items self-animate so they always appear after filtering */}
                        <div className='music-block'>
                            <div className='music-block__head'>
                                <h2>{artist === ARTIST_ALL ? 'All Tracks' : artist}</h2>
                                <span className='music-block__hint'>
                                    {visibleSongs.length} {visibleSongs.length === 1 ? 'song' : 'songs'}
                                </span>
                                <button
                                    className={`music-block__toggle ${showFilter ? 'is-active' : ''}`}
                                    onClick={() => this.setState({ showFilter: !showFilter })}
                                    aria-expanded={showFilter}
                                >
                                    <FontAwesomeIcon icon={showFilter ? faXmark : faFilter} />
                                    <span>{showFilter ? 'Close' : 'Filter'}</span>
                                    {artist !== ARTIST_ALL && !showFilter && (
                                        <span className='music-block__toggle-badge'>1</span>
                                    )}
                                </button>
                            </div>
                            <div className='music-list'>
                                {visibleSongs.map((item, i) => (
                                    <motion.div
                                        key={`${artist}-${item.id}`}
                                        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                                        animate={{
                                            opacity: 1, y: 0, filter: 'blur(0px)',
                                            transition: {
                                                duration: 0.5,
                                                delay: Math.min(i, 12) * 0.04,
                                                ease: [0.5, 0.025, 0, 1]
                                            }
                                        }}
                                    >
                                        <MusicItem songInfo={item} />
                                    </motion.div>
                                ))}
                            </div>

                            {visibleSongs.length === 0 && (
                                <div className='music-empty'>
                                    <p>No tracks for this artist.</p>
                                    <button className='music-pill' onClick={() => this.setState({ artist: ARTIST_ALL })}>
                                        Show all tracks
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </PageContainer>
        );
    }
}

MusicPage.contextType = AppMainContext;

export default MusicPage;
