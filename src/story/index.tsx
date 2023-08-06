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
class StoryPage extends React.Component<PageProps, PageState, IThemeState> {
    context!: IThemeState;

    state: PageState = {
        
    };

    componentDidMount() {
        const { setTextColor, setCrrFeature }: IThemeState = this.context;
        setTextColor('#f8ff00');
        // setCrrFeature('/story');
    }

    componentWillUnmount(): void {
        console.log('unmount', "/story");
        const { setTextColor, crrFeature, setCrrFeature }: IThemeState = this.context;
        // console.log(crrFeature)
        if(crrFeature === '/story') {
            setTextColor('white');
        }
    }

    render() {
        return (
            <PageContainer key={'paylist'} pathName='/story'>
                <motion.div
                    className='story-page'
                    key={'StoryPage'}
                >
                    <h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page<h1>Music Page</h1></h1></h1></h1></h1></h1></h1></h1></h1></h1>
                    <Link to='/'>Home</Link>
                </motion.div>
            </PageContainer>
        );
    }
}

StoryPage.contextType = TextColor;

export default StoryPage;