import * as React from 'react';
import SmoothScroll from './common/SmoothScroll';
import { checkIsMobile, isSafari, sleep } from './lib/utility';

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
    scrollTop: number;
    setScrollTop: (scrollTop: number) => void;
    crrPageHeight: number;
    setCrrPageHeight: (crrPageHeight: number) => void;
    parallaxPos: number;
    setParallaxPos: (pararaxPosition: number) => void;

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
    scrollTop: 0,
    setScrollTop: (scrollTop: number) => {
        
    },
    crrPageHeight: 0,
    setCrrPageHeight: (crrPageHeight: number) => {
        
    },
    parallaxPos: 0,
    setParallaxPos: (pararaxPosition: number) => {

    },

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
                // case '/story':
                //     crrPageName = 'Story' + crrPageName;
                //     break;
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

        musicPlayerController: {
            crrUrl: '',
            setCrrUrl: async (crrUrl: string) => {
                await sleep(10);
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        crrUrl: crrUrl,
                    },
                });
            },
            isPlaying: false,
            isPaused: true,
            play: async () => {
                await sleep(10);
                this.state.youtubePlayerEvent.playVideo();
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        isPlaying: true,
                        isPaused: false,
                    },
                });
            },
            pause: async () => {
                await sleep(10);
                this.state.youtubePlayerEvent.pauseVideo();
                this.setState({
                    musicPlayerController: {
                        ...this.state.musicPlayerController,
                        isPlaying: true,
                        isPaused: true,
                    },
                });
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