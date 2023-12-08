/* React Module */
import { Component } from "react";

/* Next Module */
import { Link } from 'react-router-dom';

class Credit extends Component {

    render() {

        return <>
            <div className="credit">
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
                <p className="blockMobile">
                    <span>Background Image by </span>
                    <Link to="http://www.freepik.com" target="_blank" rel="noreferrer">
                        fanjianhua / Freepik
                    </Link>
                    <span>.</span>
                </p>
            </div>
        </>
    }

}

export default Credit;