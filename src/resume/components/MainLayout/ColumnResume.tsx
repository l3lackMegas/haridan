/* React Module */
import { Component } from "react";

interface IReciept {
    title: string
    children: React.ReactNode
}

class ColumnResume extends Component<IReciept> {

    constructor(props: IReciept) {
        super(props)
    }

    render() {

        const { title, children } = this.props

        return (
            <section className="resume-section-block">
                <header className="resume-section-header">
                    <h2 className="resume-section-title">{title}</h2>
                    <span className="resume-section-divider" />
                </header>
                <div className="resume-section-body">
                    { children }
                </div>
            </section>
        )
    }

}

export default ColumnResume;