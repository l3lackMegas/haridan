/* React Module */
import { Component, createRef } from "react";

/* Nest Module */
import Link from "next/link"

/* External Module */
import { motion } from 'framer-motion'

/* Components */
import Page from '../components/Page'
import Landing from '../components/Landing'
import Section from "../components/MainLayout/Section"
import Education from "../components/Resume/Education"
import Experiance from "../components/Resume/Experiance"

class Home extends Component {

    constructor(props: any) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    state = {
        isMounted: true,
        y: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                isMounted: true,
                y: window.scrollY
            })
        }, 100);
        window.addEventListener("scroll", this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler() {
        this.setState({ y: window.scrollY })
    }

    render() {

        const { isMounted, y } = this.state

        return <Page pageTitle="Jaruwat Pohong" onSelected="store" isReady={isMounted}>
            <div className="section" style={{
                position: 'relative',
                minHeight: '750px',
                height: '100%'
            }}>
                <Landing isReady={isMounted}/>
            </div>
            { isMounted && 
            <>
                <Section id="information" style={{ textAlign: 'left' }}>
                    <div style={{ padding: '0 20px'}}>
                        <h1 className="infoTitle">Hi there!</h1>
                        <div style={{ color: 'rgba(255, 255, 255, .75)'}}>
                            <p>I am Jaruwat Pohong, Frontend Developer.</p>
                            <p>Actually I am a student in university who would like to do anything about web design and frontend development.</p>
                            <p>I understand HTML, CSS and JavaScript as well. And I can use modern library like React.js, TypeScript, etc.</p>
                            <div className="understandCSS">
                                <div className="frame">
                                    <h1>CSS</h1>
                                    <h1>IS</h1>
                                    <h1>AWESOME</h1>
                                    <h1>I UNDERSTAND CSS</h1>
                                </div>
                                <p style={{textAlign: 'center'}}>Just kidding</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <h1 className="infoTitle" style={{ textAlign: 'center' }}>Résumé</h1>
                <Section style={{
                    backgroundImage: 'url(/img/mobile-background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPositionY: `calc(100vh + ${y / 2}px)`
                }}>
                    <div style={{ padding: '0 10px'}}>
                        <Experiance/>
                        <Education/>
                    </div>
                </Section>
                </>
            }
        </Page>
    }

}

export default Home;