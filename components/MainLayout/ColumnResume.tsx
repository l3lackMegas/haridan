/* React Module */
import { Component } from "react";

interface IReciept {
    title: string
}

class ColumnResume extends Component<IReciept> {

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

export default ColumnResume;