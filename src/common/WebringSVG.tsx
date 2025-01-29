import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, stagger } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

import { AppMainContext, IThemeState } from '../context';

type Props = {
    style: React.CSSProperties
};
type State = {
    
};
class WebringSVG extends React.Component<Props, State, IThemeState> {
    context!: IThemeState;
    
    state: State = {
        
    };

    constructor(props: Props) {
        super(props);
    }
    render() {

        const { isToggleNav, textColor, textNavColor }: IThemeState = this.context;

        return <div style={this.props.style} key={'webringSVG'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 416 416">
                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z"
                    animate={{
                        fill: (isToggleNav ? textNavColor.value : textColor.value) ?? "#fff"
                    }}
                    transition={{
                        duration: .35,
                    }}
                />
                <motion.path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z"
                    animate={{
                        fill: (isToggleNav ? textNavColor.value : textColor.value) ?? "#fff"
                    }}
                    transition={{
                        duration: .35,
                    }}
                />
            </svg>
        </div>
    }
}

WebringSVG.contextType = AppMainContext;

export default WebringSVG;