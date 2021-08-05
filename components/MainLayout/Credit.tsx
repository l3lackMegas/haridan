/* React Module */
import { Component, CSSProperties } from "react";

/* Next Module */
import Link from "next/link"

class Credit extends Component {

    render() {

        return <>
            <div className="credit">
                <span>Ⓒ Since 2021. Powered by </span>
                <Link href="http://fb.com/Jaruwat.P">
                    <a target="_blank" rel="noreferrer">Jaruwat Pohong</a>
                </Link>
                <span>. </span>
                <p className="blockMobile">
                    <span>View source code on </span>
                    <Link href="https://github.com/l3lackMegas/l3lackmegas.github.io">
                        <a target="_blank" rel="noreferrer">GitHub</a>
                    </Link>
                    <span>. </span>
                </p>
                <p className="blockMobile">
                    <span>Background Image by </span>
                    <Link href="http://www.freepik.com">
                        <a target="_blank" rel="noreferrer">fanjianhua / Freepik</a>
                    </Link>
                    <span>.</span>
                </p>
            </div>
        </>
    }

}

export default Credit;