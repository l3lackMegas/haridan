/* React Module */
import { Component, createRef } from "react";

/* Components */
import Page from '../components/Page'
import Landing from '../components/Landing'
import Section from "../components/MainLayout/Section"
import Education from "../components/Resume/Education"
import Experiance from "../components/Resume/Experiance"
import SkillCard from "../components/SkillCard";

class Home extends Component {

    constructor(props: any) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    state = {
        isMounted: true,
        y: 0,
        landingParallax: 0,
        skillParallax: 0,
        resumeParallax: 0
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
        let currentScroll = window.scrollY,
            informationObject: HTMLElement | null = document.querySelector('#information'),
            skillParallax: HTMLElement | null = document.querySelector('#skill-section'),
            resumeParallax: HTMLElement | null = document.querySelector('#resume-section'),
            parallaxObjec = {
                landing: this.state.landingParallax,
                skill: this.state.skillParallax,
                resume: this.state.resumeParallax
            }

        // Check is skill landing appear
        if(currentScroll <= window.innerHeight)
            parallaxObjec.landing = currentScroll

        // Check is skill section appear
        if(informationObject && skillParallax &&
            skillParallax.getBoundingClientRect().top - window.innerHeight <=0 &&
            skillParallax.getBoundingClientRect().top + skillParallax.offsetHeight >= 0
        ) parallaxObjec.skill = window.innerHeight + (informationObject.offsetHeight / 2) + (currentScroll / 2)

        // Check is resume section appear
        if(informationObject && resumeParallax && skillParallax &&
            resumeParallax.getBoundingClientRect().top - window.innerHeight <=0 &&
            resumeParallax.getBoundingClientRect().top + resumeParallax.offsetHeight >= 0
        ) parallaxObjec.resume = skillParallax.offsetHeight + (currentScroll / 2)


        this.setState({ 
            y: currentScroll,
            landingParallax: parallaxObjec.landing,
            skillParallax: parallaxObjec.skill,
            resumeParallax: parallaxObjec.resume
        })
    }

    render() {

        const { isMounted, y, landingParallax, skillParallax, resumeParallax } = this.state

        return <Page pageTitle="Jaruwat Pohong" onSelected="store" isReady={isMounted}>
            <div className="section" style={{
                position: 'relative',
                minHeight: '750px',
                height: '100vh'
            }}>
                <Landing y={landingParallax} isReady={isMounted}/>
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

                <Section
                    id="skill-section"
                    style={{
                        textAlign: 'center',
                        backgroundImage: 'url(/img/skill-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: skillParallax
                }}>
                    <div style={{ padding: '0 20px'}}>
                        <h1 className="infoTitle">My Skill</h1>
                        <SkillCard/>
                    </div>
                </Section>

                <h1 className="infoTitle" style={{ textAlign: 'center' }}>Résumé</h1>
                <Section id="resume-section"
                    style={{
                        backgroundImage: 'url(/img/mobile-background.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: resumeParallax
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