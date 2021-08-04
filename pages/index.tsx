/* React Module */
import { Component, createRef } from "react";

/* Nest Module */
import Link from "next/link"

/* External Module */
import { motion } from 'framer-motion'

/* Components */
import Page from '../components/Page'
import Landing from '../components/Landing'
import Education from "../components/Experiance/Education";
import Works from "../components/Experiance/Works";

class Home extends Component {

    constructor(props: any) {
        super(props)
    }

    state = {
        isMounted: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isMounted: true })
        }, 100);
    }

    render() {

        const { isMounted } = this.state

        return <Page pageTitle="Jaruwat Pohong" onSelected="store" isReady={isMounted}>
            <div className="section">
                <Landing isReady={isMounted}/>
            </div>
            { isMounted && 
                <div id="information" className="section">
                    <h1 style={{ textAlign: 'center' }}>EXPERIENCE</h1>
                    <br/>
                    <br/>
                    <Works/>
                    <Education/>
                </div>
            }
            <div className="section"></div>
        </Page>
    }

}

export default Home;