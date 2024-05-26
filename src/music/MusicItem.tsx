import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faAt, faChevronLeft, faLink, faPause, faPlay, faStop, faTimes } from '@fortawesome/free-solid-svg-icons'

import YouTubePlayer from 'react-youtube';

import { AppMainContext, IThemeState } from '../context';

import { getYoutubeId, sleep } from '../lib/utility';
import LoadingIcon from '../common/LoadingIcon';
import { MusicStructure } from '../data/music-list';

type Props = {
    songInfo: MusicStructure
    videoDisabled?: boolean
};
type State = {
    
};
class MusicItem extends React.Component<Props, State, IThemeState> {
    context!: IThemeState;

    state: State = {
    };


    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        
    }

    render() {
        const { textColor, textNavColor, crrFeature, isToggleNav, musicPlayerController }: IThemeState = this.context;

        const { songInfo } = this.props;

        const youtubeId = getYoutubeId(songInfo.url);

        const isCurrentSongPlay = musicPlayerController.crrUrl !== '' && (songInfo.url === musicPlayerController.crrUrl || songInfo.videoUrl === musicPlayerController.crrUrl);

        return (
            <motion.div className='music-item'
                style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
                }}
            >
                <motion.div className='music-overlay'  onClick={async () => {
                    if(songInfo.url !== musicPlayerController.crrUrl) {
                        await musicPlayerController.setCrrUrl(songInfo.videoUrl || songInfo.url);
                    }
                    if(this.props.videoDisabled !== true) {
                        await musicPlayerController.showPlayer();
                    }
                }}></motion.div>
                <motion.div
                    className='music-banner'
                >
                    <motion.div className='music-info'>
                        <motion.p className='music-title'>{songInfo.title}</motion.p>
                        <motion.p className='music-author'>{songInfo.author}</motion.p>
                    </motion.div>
                    <motion.div className='music-play-button'>
                        <motion.button className='button-control' onClick={async () => {
                            if(isCurrentSongPlay) {
                                await musicPlayerController.setCrrUrl('');
                                return;
                            }

                            await musicPlayerController.setCrrUrl(songInfo.videoUrl || songInfo.url);
                            // await musicPlayerController.showPlayer();
                        }}>
                            {isCurrentSongPlay ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }
}

MusicItem.contextType = AppMainContext;

export default MusicItem;