/* React Module */
import { Component, CSSProperties } from "react";

interface IReciept {
    id?: string
    style?: CSSProperties
    disableBackground?: boolean
    maxWidth?: number | string
    children: React.ReactNode
}

class Section extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { id, style, disableBackground, maxWidth, children } = this.props

        return <>
            <div id={id} className="section" style={style}>
                <div className="sub" style={disableBackground ? {} :{ backgroundImage: 'linear-gradient(to bottom, #06243c, #06243c57, #06243c)' }}>
                    <div style={{
                        margin: '0 auto',
                        padding: '5px 10px',
                        maxWidth: maxWidth ? maxWidth : 1000
                    }}>
                        { children }
                    </div>
                </div>
            </div>
        </>
    }

}

export default Section;