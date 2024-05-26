import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faAt, faLink, faPause, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

import YouTubePlayer from 'react-youtube';

import { AppMainContext, IThemeState } from '../context';

import './index.scss';
import { getYoutubeId } from '../lib/utility';
import LoadingIcon from '../common/LoadingIcon';

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

    componentDidMount(): void {
        
    }

    render() {
        const { textColor, textNavColor, crrFeature, isToggleNav, musicPlayerController }: IThemeState = this.context;

        const { playerReady } = this.state;

        // if(musicPlayerController.crrUrl === '') return <></>;
        const youtubeId = getYoutubeId(musicPlayerController.crrUrl);
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                // autoplay: 1,
                controls: 0,
                //   start: 200,
                volume: 50,
                modestbranding: 1,
                showinfo: 0
            },
        };
        
        const isOnMusicPage = crrFeature === '/music';

        return (
            <AnimatePresence mode='sync' key={'music-backdrop-controller'}>
                {musicPlayerController.crrUrl !== '' && <motion.div className='mini-player' key={'mini-player'}>
                    <motion.div className='playerContainer'
                        initial={{
                            opacity: 0,
                            y: 100,
                            scale: 0.5,
                        }}
                        animate={{
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
                        }}
                        // whileHover={{
                        //     scale: isOnMusicPage ? 1 : 1.1,
                        //     cursor: isOnMusicPage ? 'default' : 'pointer'
                        // }}
                        exit={{
                            scale: 0.5,
                            y: 100,
                            opacity: 0,
                            transition: {
                                duration: 1,
                                ease: [0.5, 0.025, 0, 1]
                            }
                        }}
                    >
                        <motion.div className='player-flex-tools'>
                            <motion.div className='player-thumbnail'
                                style={{
                                    cursor: isOnMusicPage ? 'default' : 'pointer',
                                    backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/default.jpg)`,
                                }}
                                animate={{
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
                                onClick={() => {
                                    if(isOnMusicPage) return;
                                    this.context.pushNavigate('/music');
                                }}
                            >
                                {isOnMusicPage && <motion.div className='link-overlay'
                                    onClick={() => {
                                        musicPlayerController.pause();
                                        console.log(musicPlayerController.crrUrl + '?t=' + Math.floor(this.state.crrTime));
                                        window.open(musicPlayerController.crrUrl + '?t=' + Math.floor(this.state.crrTime), '_blank');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </motion.div>}
                            </motion.div>
                            <motion.div className='player-info-text'>
                                <motion.p
                                    key={'song-name'}
                                    className='song-name'
                                    style={{
                                        cursor: isOnMusicPage ? 'default' : 'pointer',
                                    }}
                                    initial={{
                                        x: '100%'
                                    }}
                                    animate={{
                                        x: '-100%',
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: 'linear'
                                        }
                                    }}
                                    onClick={() => {
                                        if(isOnMusicPage) return;
                                        this.context.pushNavigate('/music');
                                    }}
                                >{this.state.songName || 'Loading...'}</motion.p>
                                <motion.p
                                    key={'author-name'}
                                    className='author-name'
                                    animate={{
                                        opacity: isOnMusicPage ? 1 : 0,
                                        height: isOnMusicPage ? 15 : 0,
                                        transition: {
                                            duration: 1,
                                            delay: isOnMusicPage ? 1 : 0,
                                            ease: [0.5, 0.025, 0, 1]
                                        }
                                    }}
                                >{this.state.authorName}</motion.p>
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
                                        if(musicPlayerController.isPaused || this.state.songName === '') musicPlayerController.play();
                                        else musicPlayerController.pause();
                                    }}
                                >
                                    {musicPlayerController.isPaused || this.state.songName === ''
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
                                    onClick={() => {
                                        musicPlayerController.setCrrUrl('');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTimes} style={{ transform: isOnMusicPage ? 'translateX(-0.5px)' : 'translateX(0.5px)' }} />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>    
                </motion.div>}
                {musicPlayerController.crrUrl !== '' && <motion.div className='player-backdrop'
                    key={'player-backdrop'}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: !musicPlayerController.isPaused &&isOnMusicPage && !isToggleNav && musicPlayerController.isPlaying && musicPlayerController.isPlayerDisplay ? 1 : 0,
                        transition: {
                            duration: !isOnMusicPage || isToggleNav || musicPlayerController.isPaused ? .25 : 1,
                            delay: !isOnMusicPage || isToggleNav || musicPlayerController.isPaused ? 0 : .75
                        }
                    }}
                >
                    <YouTubePlayer videoId={youtubeId} opts={opts} onReady={this._onReady} style={{
                        width: '100%',
                        height: '100%'
                    }}  />
                </motion.div>}
            </AnimatePresence>
        );
    }

    youtubeAPIRefresher: any = 0;
    _onReady(event: any) {
        // access to player in all event handlers via event.target
        window.player = event.target;
        // console.log(event.target);
        // event.target.pauseVideo();
        const { musicPlayerController } = this.context;

        musicPlayerController.setYoutubePlayerEvent(event.target);

        let _this = this;

        event.target.addEventListener('onStateChange', (e: any) => {
            // console.log(event)
            switch(e.data) {
                case 1:
                    event.target.setVolume(50);
                    const videoDataInfo = event.target.getVideoData();
                    _this.setState({
                        songName: videoDataInfo.title.trim(),
                        authorName: videoDataInfo.author.trim()
                    });
                    _this.youtubeAPIRefresher = setInterval(() => {
                        _this.setState({
                            crrTime: event.target.getCurrentTime(),
                            maxTime: event.target.getDuration()
            })
                    }, 10);
                    break;
                case 0:
                    clearInterval(_this.youtubeAPIRefresher);
                    musicPlayerController.setCrrUrl('');
                    break;
            }
        });
        musicPlayerController.play();

    }
}

MusicBackdrop.contextType = AppMainContext;

export default MusicBackdrop;