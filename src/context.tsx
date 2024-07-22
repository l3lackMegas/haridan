import * as React from 'react';
import SmoothScroll from './common/SmoothScroll';
import { checkIsMobile, getYoutubeId, isSafari, sleep } from './lib/utility';

import { useNavigate } from 'react-router-dom';

export interface IThemeStateObject {
    [value: string]: string;
}

export interface IMusicPlayerController {
    crrUrl: string;
    setCrrUrl: (crrUrl: string) => void;
    isPlaying: boolean;
    isPaused: boolean;
    play: () => void;
    pause: () => void;
    isPlayerDisplay: boolean;
    showPlayer: () => void;
    hidePlayer: () => void;
    setYoutubePlayerEvent: (youtubePlayerEvent: any) => void;
    seekTo: (time: number) => void;
}

export interface IThemeState {
    isCanNotSmooth: boolean;
    textColor: IThemeStateObject;
    setTextColor: (textColor: string, textNavColor?: string) => void;
    textNavColor: IThemeStateObject;
    crrFeature: string;
    setCrrFeature: (textColor: string) => void;
    isToggleNav: boolean;
    setIsToggleNav: (isToggleNav: boolean) => void;
    isTogglingNav: boolean;
    setIsTogglingNav: (isToggleNav: boolean) => void;
    isNavigating: boolean;
    setIsNavigating: (isNavigating: boolean) => void;
    scrollTop: number;
    setScrollTop: (scrollTop: number) => void;
    crrPageHeight: number;
    setCrrPageHeight: (crrPageHeight: number) => void;
    parallaxPos: number;
    setParallaxPos: (pararaxPosition: number) => void;

    youtubeIframeShow: boolean;
    musicPlayerController: IMusicPlayerController;
    youtubePlayerEvent: any;
    pushNavigate: (url: string) => void;
}



const TextColorObject: IThemeStateObject = {
    value: 'black',
};
export const AppMainContext = React.createContext({
    isCanNotSmooth: checkIsMobile() || isSafari(),
    textColor: TextColorObject,
    setTextColor: (textColor: string, textNavColor?: string) => {
        
    },
    textNavColor: TextColorObject,
    crrFeature: '',
    setCrrFeature: (crrFeature: string) => {
        
    },
    isToggleNav: false,
    setIsToggleNav: (isToggleNav: boolean) => {
        
    },
    isTogglingNav: false,
    setIsTogglingNav: (isToggleNav: boolean) => {
        
    },
    isNavigating: true,
    setIsNavigating: (isNavigating: boolean) => {
        
    },
    scrollTop: 0,
    setScrollTop: (scrollTop: number) => {
        
    },
    crrPageHeight: 0,
    setCrrPageHeight: (crrPageHeight: number) => {
        
    },
    parallaxPos: 0,
    setParallaxPos: (pararaxPosition: number) => {

    },

    youtubeIframeShow: true,
    musicPlayerController: {
        crrUrl: '',
        setCrrUrl: (crrUrl: string) => {},
        isPlaying: false,
        isPaused: true,
        play: () => {},
        pause: () => {},
        isPlayerDisplay: false,
        showPlayer: () => {},
        hidePlayer: () => {},
        setYoutubePlayerEvent: (youtubePlayerEvent: any) => {},
        seekTo: (time: number) => {},
    },
    youtubePlayerEvent: null,
    pushNavigate: (url: string) => {},
});

type PageProps = {
    navigate: ReturnType<typeof useNavigate>,
    children: React.ReactNode
};
type PageState = {
    
};
class ContextWraper extends React.Component<PageProps, PageState> {
    

    state: IThemeState = {
        isCanNotSmooth: checkIsMobile() || isSafari(),
        textColor: {
            value: 'white',
        },
        setTextColor: (textColor: string, textNavColor?: string) => {
            this.setState({
                textColor: {
                    value: textColor,
                },
                textNavColor: {
                    value: textNavColor || 'white',
                },
            });
        },
        textNavColor: {
            value: 'white',
        },
        crrFeature: '',
        setCrrFeature: (crrFeature: string) => {
            this.setState({
                crrFeature: crrFeature,
            });
            let crrPageName = ' - Jaruwat.dev';
            switch(crrFeature) {
                case '/':
                    crrPageName = 'Resume' + crrPageName;
                    break;
                case '/portfolio':
                    crrPageName = 'Portfolio' + crrPageName;
                    break;
                case '/music':
                    crrPageName = 'Music Collections' + crrPageName;
                    break;
                // case '/contact':
                //     crrPageName = 'Contact' + crrPageName;
                //     break;
                default:
                    crrPageName = 'Jaruwat.dev';
                    break;
            }

            window.document.title = crrPageName;
        },
        isToggleNav: false,
        setIsToggleNav: (isToggleNav: boolean) => {
            this.setState({
                isToggleNav: isToggleNav,
            });
        },
        isTogglingNav: false,
        setIsTogglingNav: (isToggleNav: boolean) => {
            this.setState({
                isTogglingNav: isToggleNav,
            });
        },
        isNavigating: true,
        setIsNavigating: (isNavigating: boolean) => {
            this.setState({
                isNavigating: isNavigating,
            });
        },
        scrollTop: 0,
        setScrollTop: (scrollTop: number) => {
            this.setState({
                scrollTop: scrollTop,
            });
        },
        crrPageHeight: 0,
        setCrrPageHeight: (crrPageHeight: number) => {
            this.setState({
                crrPageHeight: crrPageHeight,
            });
        },
        parallaxPos: 0,
        setParallaxPos: (pararaxPosition: number) => {
            this.setState({
                parallaxPos: pararaxPosition,
            });
        },

        pushNavigate: (url: string) => {
            this.props.navigate(url)
        },

        youtubeIframeShow: true,
        musicPlayerController: {
            crrUrl: '',
            setCrrUrl: async (crrUrl: string) => {
                if(crrUrl !== '' && crrUrl !== this.state.musicPlayerController.crrUrl && this.state.musicPlayerController.isPlaying) {
                    // console.log('pause');
                    this.setState({
                        youtubeIframeShow: false,
                    });
                    await sleep(250);
                    // console.log('pause', this.state.musicPlayerController.isPaused);
                }
                await sleep(10);
                if(crrUrl !== this.state.musicPlayerController.crrUrl) this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        crrUrl: crrUrl,
                        isPlaying: crrUrl !== '',
                    }
                });
                try {
                    let newVideoId = getYoutubeId(crrUrl);
                    if(crrUrl !== '' && (!this.state.youtubePlayerEvent || newVideoId !== this.state.youtubePlayerEvent.playerInfo.videoData.video_id)) {
                        this.state.youtubePlayerEvent.loadVideoById({videoId: newVideoId, startSeconds: 0, endSeconds: 0, suggestedQuality: 'large'});
                        this.setState({
                            youtubeIframeShow: true,
                        })
                    }
                    if(crrUrl === '') {
                        this.state.youtubePlayerEvent.loadVideoById({videoId: ''});
                        this.setState({
                            musicPlayerController: {
                                ...this.state.musicPlayerController,
                                crrUrl: crrUrl,
                                isPlaying: false,
                            }
                        })
                    }
                } catch (error) {
                    await sleep(100);
                    this.state.musicPlayerController.setCrrUrl(crrUrl);
                }
                
            },
            isPlaying: false,
            isPaused: true,
            play: async () => {
                let canPlay = false;
                while (!canPlay) {
                    try {
                        this.state.youtubePlayerEvent.playVideo();
                        canPlay = this.state.youtubePlayerEvent.getPlayerState() === 1;
                        await sleep(10);
                    } catch (error) {
                        await sleep(100);
                    }
                }
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        crrUrl: 'https://youtu.be/' + this.state.youtubePlayerEvent.playerInfo.videoData.video_id,
                        isPlaying: canPlay,
                        isPaused: false,
                    },
                });
            },
            pause: async () => {
                await sleep(10);
                while (!this.state.youtubePlayerEvent) {
                    await sleep(100);
                }
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        isPlaying: true,
                        isPaused: true,
                    },
                });
                this.state.youtubePlayerEvent.pauseVideo();
            },
            isPlayerDisplay: false,
            showPlayer: async () => {
                await sleep(10);
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        isPlayerDisplay: true,
                    },
                });
            },
            hidePlayer: async () => {
                await sleep(10);
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        isPlayerDisplay: false,
                    },
                });
            },
            setYoutubePlayerEvent: (youtubePlayerEvent: any) => {
                this.setState({
                    youtubePlayerEvent: youtubePlayerEvent,
                });
            },
            seekTo: async (time: number) => {
                while (!this.state.youtubePlayerEvent) {
                    await sleep(100);
                }
                this.state.youtubePlayerEvent.seekTo(time, true);
            }
        },
        youtubePlayerEvent: null,
    };

    constructor(props: PageProps) {
        super(props);
    }

    componentDidMount() {
        let isCanNotSmooth = checkIsMobile() || isSafari()
        this.setState({isCanNotSmooth})
    }

    render() {
        return (
            <AppMainContext.Provider value={this.state}>
                {this.props.children}
            </AppMainContext.Provider>
        );
    }
}

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

export default withRouter(ContextWraper);