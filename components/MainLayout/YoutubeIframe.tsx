/* React Module */
import { Component, CSSProperties } from "react";

import "react";
    
declare module 'react' {
    export interface IframeHTMLAttributes<T> {
        controls?: 0 | 1
        fs?: 0 | 1
        hl?: string
    }
}


/* Lib */
import { getYoutubeId } from '../../lib/utility'

interface IReciept {
    src: string,
    styles?: CSSProperties
}

class YoutubeIframe extends Component<IReciept> {

    render() {
        const { src, styles } = this.props
        let youtubeID = getYoutubeId(src);
        return <>
            <iframe
                className="inlineBlock"
                src={`https://www.youtube.com/embed/${youtubeID}`}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                style={styles}
            />
        </>
    }

}

export default YoutubeIframe;