import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { AppMainContext, IThemeState } from '../context';
import Section from '../resume/components/MainLayout/Section';

type PageProps = {
};
type PageState = {
    currentScroll: number
};
class MusicPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        currentScroll: 0,
    };

    constructor(props: PageProps) {
        super(props);
        this.parallaxCallback = this.parallaxCallback.bind(this);
        this.initMusic = this.initMusic.bind(this);
    }

    componentDidMount() {
        const { setTextColor, setCrrFeature, musicPlayerController }: IThemeState = this.context;
        setTextColor('#E3F0FF', '#c56464');
        // setCrrFeature('/music');
        this.setState({
            
        })

        this.initMusic()
    }

    async initMusic() {
        const { musicPlayerController }: IThemeState = this.context;
        await musicPlayerController.showPlayer();
        await musicPlayerController.setCrrUrl('https://youtu.be/LaEgpNBt-bQ');
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
        return (
            <PageContainer key={'music'} pathName='/music' parallaxCallback={this.parallaxCallback}
                headerOverlayColor='#1818189d'
            >
                <motion.div
                    className='music-page'
                    key={'MusicPage'}
                >
                </motion.div>
            </PageContainer>
        );
    }
}

MusicPage.contextType = AppMainContext;

export default MusicPage;