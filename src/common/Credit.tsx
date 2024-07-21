/* React Module */
import { Component } from "react";
import { Link } from 'react-router-dom';
import { AppMainContext, IThemeState } from "../context";

import { motion } from 'framer-motion';

type Props = {
};
type State = {
};

class Credit extends Component<Props, State, IThemeState> {
    context!: IThemeState;

    render() {

        return <>
            <motion.div id="creditComponent" className="credit"
                animate={{
                    opacity: !this.context.musicPlayerController.isPlayerDisplay ? 1 : 0,
                }}
            >
                <span>Ⓒ Since 2021. Powered by </span>
                <Link to="http://fb.com/Jaruwat.P" target="_blank" rel="noreferrer">
                    Jaruwat Pohong
                </Link>
                <span>. </span>
                <p className="blockMobile">
                    <span>View source code on </span>
                    <Link to="https://github.com/l3lackMegas/l3lackmegas.github.io" target="_blank" rel="noreferrer">
                        GitHub
                    </Link>
                    <span>. </span>
                </p>
                { this.context.crrFeature === '/' &&
                    <p className="blockMobile">
                        <span>Background Image by </span>
                        <Link to="http://www.freepik.com" target="_blank" rel="noreferrer">
                            fanjianhua / Freepik
                        </Link>
                        <span>.</span>
                    </p>
                }
            </motion.div>
        </>
    }

}

Credit.contextType = AppMainContext;
export default Credit;