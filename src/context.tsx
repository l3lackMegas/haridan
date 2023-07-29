import * as React from 'react';

export interface IThemeStateObject {
    [value: string]: string;
}

export interface IThemeState {
    textColor: IThemeStateObject;
    setTextColor: (textColor: string) => void;
    crrFeature: string;
    setCrrFeature: (textColor: string) => void;
    isToggleNav: boolean;
    setIsToggleNav: (isToggleNav: boolean) => void;
    scrollTop: number;
    setScrollTop: (scrollTop: number) => void;
    crrPageHeight: number;
    setCrrPageHeight: (crrPageHeight: number) => void;
}



const TextColorObject: IThemeStateObject = {
    value: 'black',
};
export const TextColor = React.createContext({
    textColor: TextColorObject,
    setTextColor: (textColor: string) => {
        
    },
    crrFeature: '',
    setCrrFeature: (crrFeature: string) => {
        
    }
});

type PageProps = {
    children: React.ReactNode
};
type PageState = {
    
};
class ContextWraper extends React.Component<PageProps, PageState> {
    

    state: IThemeState = {
        textColor: {
            value: 'white',
        },
        setTextColor: (textColor: string) => {
            this.setState({
                textColor: {
                    value: textColor,
                }
            });
        },
        crrFeature: '',
        setCrrFeature: (crrFeature: string) => {
            this.setState({
                crrFeature: crrFeature,
            });
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
        }
    };

    render() {
        return (
            <TextColor.Provider value={this.state}>
                {this.props.children}
            </TextColor.Provider>
        );
    }
}

export default ContextWraper;