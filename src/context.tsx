import * as React from 'react';
import SmoothScroll from './common/SmoothScroll';
import { checkIsMobile, isSafari } from './lib/utility';

export interface IThemeStateObject {
    [value: string]: string;
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
}



const TextColorObject: IThemeStateObject = {
    value: 'black',
};
export const TextColor = React.createContext({
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

    }
});

type PageProps = {
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
        }
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
            <TextColor.Provider value={this.state}>
                {this.props.children}
            </TextColor.Provider>
        );
    }
}

export default ContextWraper;