/* React Module */
import { Component, CSSProperties } from "react";

/* Next Module */
import Link from "next/link"

interface IReciept {
    id?: string
    style?: CSSProperties
}

class Section extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { id, style, children } = this.props

        return <>
            <div id={id} className="section" style={style}>
                <div className="sub" style={{ backgroundImage: 'linear-gradient(to bottom, #06243c, #06243c57, #06243c)' }}>
                    <div style={{
                        margin: '0 auto',
                        padding: '5px 10px',
                        maxWidth: 1000
                    }}>
                        { children }
                    </div>
                </div>
            </div>
        </>
    }

}

export default Section;