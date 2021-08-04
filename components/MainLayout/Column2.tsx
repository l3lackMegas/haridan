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

        return <>
            <div className="col-2">
                <div className="topic">
                    <div className="navContainer">
                        <Link href="#ability">
                            <a><h2>{this.props.title}</h2></a>
                        </Link>
                    </div>
                </div>
                <div className="detail">
                    { this.props.children }
                </div>
            </div>
        </>
    }

}

export default Column2;