import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faAt, faChevronLeft, faLink, faPause, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

import YouTubePlayer from 'react-youtube';

import { AppMainContext, IThemeState } from '../context';

import './index.scss';
import { getYoutubeId, sleep } from '../lib/utility';
import LoadingIcon from '../common/LoadingIcon';

import MusicListData, { MusicStructure } from '../data/music-list';

type Props = {
};
type State = {
    playerReady: boolean
    crrTime: number
    maxTime: number
    songName: string
    authorName: string
};
class MusicBackdrop extends React.Component<Props, State, IThemeState> {
    context!: IThemeState;

    state: State = {
        playerReady: false,
        crrTime: 0,
        maxTime: 0,
        songName: '',
        authorName: ''
    };


    constructor(props: Props) {
        super(props);
        this._onReady = this._onReady.bind(this);
    }

    isWebBlur = false
    componentDidMount(): void {
        window.onblur = () => {
            this.isWebBlur = true;
        }

        window.onfocus = () => {
            this.isWebBlur = false;
        }
    }

    render() {
        const { textColor, textNavColor, crrFeature, isToggleNav, musicPlayerController }: IThemeState = this.context;

        const { playerReady, crrTime, maxTime } = this.state;

        // if(musicPlayerController.crrUrl === '') return <></>;
        let youtubeId = getYoutubeId(musicPlayerController.crrUrl);
        let songList = MusicListData().songList;
        let songIndex = songList.findIndex((item: MusicStructure) => item.url === musicPlayerController.crrUrl || item.videoUrl === musicPlayerController.crrUrl);
        let thumbnailId
        let songName, authorName;
        if(songIndex === -1) {
            thumbnailId = getYoutubeId(musicPlayerController.crrUrl);
            songName = this.state.songName;
            authorName = this.state.authorName;
        } else {
            thumbnailId = getYoutubeId(songList[songIndex].url);
            songName = songList[songIndex].title;
            authorName = songList[songIndex].author;
        }
        
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                //   start: 200,
                volume: 50,
                modestbranding: 1,
                showinfo: 0
            },
        };
        
        const isOnMusicPage = crrFeature === '/music';

        const isSongPlaying = (musicPlayerController.isPaused || this.state.songName === '') && this.context.youtubePlayerEvent && this.context.youtubePlayerEvent.getPlayerState();

        return (
            <AnimatePresence mode='sync' key={'music-backdrop-controller'}>
                <motion.div className='mini-player' key={'mini-player'}>
                    <motion.div className='playerContainer'
                        initial={{
                            opacity: 0,
                            y: 100,
                            maxWidth: 600,
                            scale: 0.5,
                        }}
                        animate={musicPlayerController.crrUrl !== '' ? {
                            opacity: 1,
                            y: 0,
                            width: isOnMusicPage ? '95vw' : 300,
                            maxWidth: 600,
                            height: isOnMusicPage ? 80 : 60,
                            scale: 1,
                            borderRadius: isOnMusicPage ? 10 : 40,
                            transition: {
                                duration: 1,
                                delay: isOnMusicPage ? 1 : 0,
                                ease: [0.5, 0.025, 0, 1]
                            }
                        } : {
                            scale: 0.5,
                            y: 100,
                            maxWidth: 600,
                            opacity: 0,
                            transition: {
                                duration: 1,
                                ease: [0.5, 0.025, 0, 1]
                            }
                        }}
                        whileHover={isOnMusicPage || window.isMobile ? {} : {
                            y: -5,
                            cursor: isOnMusicPage ? 'default' : 'pointer',
                            transition: {
                                duration: .15,
                            }
                        }}
                        exit={{
                            scale: 0.5,
                            y: 100,
                            maxWidth: 600,
                            opacity: 0,
                            transition: {
                                duration: 1,
                                ease: [0.5, 0.025, 0, 1]
                            }
                        }}
                    >
                        { musicPlayerController.crrUrl !== '' && 
                            <motion.div className='player-progress'
                                onClick={(e) => {
                                    // get mouse position
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left; //x position within the element
                                    let percent = x / rect.width;

                                    let newTime = percent * maxTime;
                                    musicPlayerController.seekTo(newTime);
                                }}
                                animate={{
                                    opacity: isOnMusicPage ? 1 : 0,
                                    transition: {
                                        duration: isOnMusicPage ? 1 : .25,
                                        delay: isOnMusicPage ? 1 : 0,
                                        ease: [0.5, 0.025, 0, 1]
                                    }
                                }}
                            >
                                <motion.div className='player-progress-bar' animate={{
                                    width: `${(crrTime / (maxTime || 1) * 100)}%`
                                }}></motion.div>
                            </motion.div>
                        }
                        <motion.div className='player-flex-tools'>
                            { <motion.div className='player-button'
                                style={{
                                    overflow: 'hidden',
                                }}

                                initial={{
                                    maxWidth: '1px',
                                    minWidth: '1px'
                                }}

                                animate={{                    
                                    maxWidth: isOnMusicPage && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused ? '50px' : '1px',
                                    minWidth: isOnMusicPage && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused ? '50px' : '1px',
                                    transition: {
                                        duration: 1,
                                        delay: musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused && isOnMusicPage ? .5 : 0,
                                        ease: [0.5, 0.025, 0, 1]
                                    }
                                }}

                                exit={{
                                    maxWidth: '1px',
                                    minWidth: '1px'
                                }}
                            >
                                <motion.button
                                    key={'player-button-back'}
                                    className='button-control'
                                    animate={{
                                        width: isOnMusicPage ? 40 : 30,
                                        height: isOnMusicPage ? 40 : 30,
                                        minWidth: '40px',
                                        opacity: isOnMusicPage && musicPlayerController.isPlayerDisplay && !musicPlayerController.isPaused ? 1 : 0,
                                        transition: {
                                            duration: .5,
                                        }
                                    }}
                                    onClick={() => {
                                        musicPlayerController.hidePlayer();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} style={{transform: 'translateX(1px)',}} />
                                </motion.button>
                            </motion.div>}
                            <motion.div className='player-thumbnail'
                                style={{
                                    cursor: isOnMusicPage ? 'default' : 'pointer',
                                    backgroundImage: `url(https://img.youtube.com/vi/${thumbnailId}/maxresdefault.jpg)`,
                                }}
                                initial={{
                                    minWidth: '1px',
                                    minHeight: '1px',
                                }}
                                animate={musicPlayerController.crrUrl === '' ? {} : {
                                    width: isOnMusicPage ? 100 : 50,
                                    height: isOnMusicPage ? 100 : 50,
                                    minWidth: isOnMusicPage ? '100px' : '50px',
                                    minHeight: isOnMusicPage ? '100px' : '50px',
                                    borderRadius: isOnMusicPage ? 10 : 50,
                                    margin: isOnMusicPage ? '10px 10px 50px 10px' : '10px 0px 10px 0px',
                                    transition: {
                                        duration: 1,
                                        delay: isOnMusicPage ? 1 : 0,
                                        ease: [0.5, 0.025, 0, 1]
                                    }
                                }}
                                exit={{
                                    minWidth: '1px',
                                    minHeight: '1px',
                                }}
                                onClick={() => {
                                    if(isOnMusicPage) return;
                                    this.context.pushNavigate('/music');
                                }}
                            >
                                {isOnMusicPage && <motion.div className='link-overlay'
                                    onClick={() => {
                                        musicPlayerController.pause();
                                        // console.log(musicPlayerController.crrUrl + '?t=' + Math.floor(this.state.crrTime));
                                        window.open(musicPlayerController.crrUrl + '?t=' + Math.floor(this.state.crrTime), '_blank');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </motion.div>}
                            </motion.div>
                            <motion.div className='player-info-text'
                                animate={{
                                    marginBottom: isOnMusicPage ? '10px' : '0px',
                                    transition: {
                                        duration: 1,
                                        delay: isOnMusicPage ? 1 : 0,
                                        ease: [0.5, 0.025, 0, 1]
                                    }
                                }}
                            >
                                <motion.p
                                    key={'song-name'}
                                    className='song-name'
                                    style={{
                                        cursor: isOnMusicPage && musicPlayerController.isPlayerDisplay ? 'default' : 'pointer',
                                    }}
                                    onClick={() => {
                                        if(isOnMusicPage) {
                                            if(!musicPlayerController.isPlayerDisplay) {
                                                musicPlayerController.showPlayer();
                                            }
                                            return;
                                        }
                                        this.context.pushNavigate('/music');
                                    }}
                                >
                                    <motion.span
                                        style={{
                                            textOverflow: 'ellipsis',
                                            width: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {songName ? `${songName}` : 'Loading...'}
                                    </motion.span>
                                </motion.p>
                                <motion.p
                                    key={'author-name'}
                                    className='author-name'
                                    animate={{
                                        opacity: isOnMusicPage ? 1 : 0,
                                        height: isOnMusicPage ? 18 : 0,
                                        transition: {
                                            duration: 1,
                                            delay: isOnMusicPage ? 1 : 0,
                                            ease: [0.5, 0.025, 0, 1]
                                        }
                                    }}
                                >{authorName}</motion.p>
                            </motion.div>
                            <motion.div className='player-button'>
                                <motion.button
                                    key={'player-button-toggle'}
                                    className='button-control'
                                    animate={{                    
                                        width: isOnMusicPage ? 40 : 30,
                                        height: isOnMusicPage ? 40 : 30,
                                        transition: {
                                            duration: 1,
                                            delay: isOnMusicPage ? 1 : 0,
                                            ease: [0.5, 0.025, 0, 1]
                                        }
                                    }}
                                    onClick={() => {
                                        if(isSongPlaying) musicPlayerController.play();
                                        else musicPlayerController.pause();
                                    }}
                                >
                                    {isSongPlaying
                                        ? <FontAwesomeIcon icon={faPlay} style={{transform: isOnMusicPage ? 'translateX(1px)' : 'translateX(2px)',}} />
                                        : <FontAwesomeIcon icon={faPause} style={{transform: isOnMusicPage ? 'translateX(0px)' : 'translateX(1px)',}} />
                                    }
                                </motion.button>
                                <motion.button
                                    key={'player-button-stop'}
                                    className='button-control'
                                    animate={{                    
                                        width: isOnMusicPage ? 40 : 30,
                                        height: isOnMusicPage ? 40 : 30,
                                        transition: {
                                            duration: 1,
                                            delay: isOnMusicPage ? 1 : 0,
                                            ease: [0.5, 0.025, 0, 1]
                                        }
                                    }}
                                    onClick={async () => {
                                        await musicPlayerController.pause();
                                        await musicPlayerController.hidePlayer();
                                        await sleep(10);
                                        await musicPlayerController.setCrrUrl('');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTimes} style={{ transform: isOnMusicPage ? 'translateX(0)' : 'translateX(0.5px)' }} />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>    
                </motion.div>
                <motion.div className='player-backdrop'
                    key={'player-backdrop'}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: !musicPlayerController.isPaused &&isOnMusicPage && !isToggleNav && musicPlayerController.isPlaying && musicPlayerController.isPlayerDisplay ? 1 : 0,
                        transition: {
                            duration: !musicPlayerController.isPlayerDisplay || !isOnMusicPage || isToggleNav || musicPlayerController.isPaused ? .25 : 1,
                            delay: !musicPlayerController.isPlayerDisplay || !isOnMusicPage || isToggleNav || musicPlayerController.isPaused ? 0 : .75
                        }
                    }}
                >
                    <YouTubePlayer opts={opts} onReady={this._onReady} style={{
                        width: '100%',
                        height: '100%'
                    }}  />
                </motion.div>
            </AnimatePresence>
        );
    }

    youtubeAPIRefresher: any = 0;

    async _onReady(event: any) {
        // access to player in all event handlers via event.target
        window.player = event.target;
        // console.log(event.target);
        // event.target.pauseVideo();
        // const { musicPlayerController } = this.context;

        while (!event.target) {
            await sleep(100);
        }

        this.context.musicPlayerController.setYoutubePlayerEvent(event.target);

        let _this = this;

        event.target.addEventListener('onStateChange', async (e: any) => {
            const { musicPlayerController } = _this.context;
            // console.log(e.data)
            // console.log(musicPlayerController.isPaused)
            switch(e.data) {
                case 1:
                    await musicPlayerController.play();
                    event.target.setVolume(50);
                    const videoDataInfo = event.target.getVideoData();
                    _this.setState({
                        songName: videoDataInfo.title.trim(),
                        authorName: videoDataInfo.author.trim()
                    });
                    clearInterval(_this.youtubeAPIRefresher);
                    _this.youtubeAPIRefresher = setInterval(() => {
                        // console.log(event.target.getCurrentTime(), event.target.getDuration());
                        // console.log(musicPlayerController.isPaused)
                        _this.setState({
                            crrTime: event.target.getCurrentTime(),
                            maxTime: event.target.getDuration()
                        })
                    }, 10);
                    break;

                case 2:
                    if(!musicPlayerController.isPaused && !_this.isWebBlur) {
                        await musicPlayerController.play();
                        console.log("Command to play again!")
                    } else {
                        await musicPlayerController.pause();
                    }
                    break;
                    
                case 0:
                    clearInterval(_this.youtubeAPIRefresher);
                    await musicPlayerController.pause();
                    _this.setState({
                        crrTime: 0,
                    })
                    await sleep(500);
                    let tempSong = 'https://youtu.be/' + event.target.playerInfo.videoData.video_id;
                    let songList = MusicListData().songList;
                    let songIndex = songList.findIndex((item: MusicStructure) => item.url === tempSong || item.videoUrl === tempSong);
                    if(songIndex !== -1) {
                        // play next song
                        let nextSongIndex = (songIndex + 1) % songList.length;
                        await musicPlayerController.setCrrUrl(songList[nextSongIndex].url);
                    }
                    break;

                case 5:
                    // await musicPlayerController.play();
                    break;

                case -1:
                    // if(musicPlayerController.crrUrl) await musicPlayerController.setCrrUrl(musicPlayerController.crrUrl);
                    break;
            }
        });

        // event.target.playVideo();
        let canPlay = false;
        while (!canPlay) {
            try {
                this.context.musicPlayerController.play();
                canPlay = true;
            } catch (error) {
                await sleep(100);
            }
        }
    }
}

MusicBackdrop.contextType = AppMainContext;

export default MusicBackdrop;