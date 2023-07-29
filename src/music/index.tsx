import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageContainer from '../common/PageContainer';

import './index.scss';

import { TextColor, IThemeState } from '../context';

type PageProps = {
};
type PageState = {
    
};
class MusicPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        
    };

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('#f8ff00');
        setCrrFeature('/playlist');
    }

    componentWillUnmount(): void {
        console.log('unmount', "/playlist");
        const { setTextColor, crrFeature, setCrrFeature }: IThemeState = this.context;
        // console.log(crrFeature)
        if(crrFeature === '/playlist') {
            setTextColor('white');
        }
    }

    render() {
        return (
            <PageContainer key={'paylist'} pathName='/playlist'>
                <motion.div
                    className='music-page'
                    key={'musicPage'}
                >
                    <h1>Music Page</h1>
                    <Link to='/'>Home</Link>
                </motion.div>
            </PageContainer>
        );
    }
}

MusicPage.contextType = TextColor;

export default MusicPage;