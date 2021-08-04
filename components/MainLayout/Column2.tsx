/* React Module */
import { Component } from "react";

/* Next Module */
import Link from "next/link"

interface IReciept {
    title: string
}

class Column2 extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { title, children } = this.props

        return <>
            <div className="harfShade">
                <div className="topic">
                    <div className="navContainer">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="detail">
                    { children }
                </div>
            </div>
        </>
    }

}

export default Column2;