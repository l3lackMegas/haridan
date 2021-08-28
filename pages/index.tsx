/* React Module */
import { Component } from "react";

/* Library */
import { checkIsMobile, isSafari } from '../lib/utility'

/* Components */
import Page from '../components/Page'
import Landing from '../components/Landing'
import Section from "../components/MainLayout/Section"
import Education from "../components/Resume/Education"
import Experiance from "../components/Resume/Experiance"
import Rewards from "../components/Resume/Rewards"
import SkillCard from "../components/SkillCard"
import WorkList from '../components/Works/List'

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
        resumeParallax: 0,
        isCanNotSmooth: false
    }

    render() {

        let workItems = [
            {
                id: 1,
                title: "FPSThailand Member",
                img: "/img/works/fpsmember/logo.png",
                date: "2020 - 2021",
                link: 'https://member.fpsthailand.com/',
                imageList: ["https://www.youtube.com/watch?v=b7fKYZ81JKg"]
            },
            {
                id: 2,
                title: "Website BUMIT",
                img: "/img/works/website-bumit/logo.png",
                date: "2021",
                link: 'https://mit.bu.ac.th/',
                imageList: [
                    "/img/works/website-bumit/1.png",
                    "/img/works/website-bumit/3.png",
                    "/img/works/website-bumit/4.png",
                    "/img/works/website-bumit/5.png",
                    "/img/works/website-bumit/6.png",
                    "/img/works/website-bumit/7.png",
                    "/img/works/website-bumit/8.png",
                    "/img/works/website-bumit/9.png",
                    "/img/works/website-bumit/10.png",
                    "/img/works/website-bumit/11.png",
                    "/img/works/website-bumit/12.png",
                    "/img/works/website-bumit/13.png"
                ],
                color: 'white'
            },
            {
                id: 3,
                title: "Flight Visualization",
                img: "/img/works/flight-visualization/logo.png",
                date: "2020",
                link: 'https://mit.bu.ac.th/visualization/',
                imageList: [
                    "/img/works/flight-visualization/1.png",
                    "/img/works/flight-visualization/2.png",
                    "/img/works/flight-visualization/3.png",
                    "/img/works/flight-visualization/4.png",
                    "/img/works/flight-visualization/5.png",
                    "/img/works/flight-visualization/6.png",
                    "/img/works/flight-visualization/7.png",
                    "/img/works/flight-visualization/8.png",
                    "/img/works/flight-visualization/9.png",
                    "/img/works/flight-visualization/10.png",
                    "/img/works/flight-visualization/11.png",
                    "/img/works/flight-visualization/12.png",
                    "/img/works/flight-visualization/13.png",
                    "/img/works/flight-visualization/14.png",
                    "/img/works/flight-visualization/15.png"
                ]
            }
        ]

        const { isMounted, y, landingParallax, skillParallax, resumeParallax } = this.state

        return <Page pageTitle="l3lackMegas" onSelected="store" isReady={isMounted}>
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
                        <div style={{ color: 'rgba(255, 255, 255, .75)' }}>
                            <div style={{ lineHeight: '30px' }}>
                                <p>I am Jaruwat Pohong, Desktop and Web Developer. (or just wanna be)</p>
                                <p>Actually I am a student in Computer Science who would like to do anything about web design and frontend development.</p>
                                <p>I usually play video games, listen to music and coding my mini project.</p>
                            </div>
                            <div className="understandCSS">
                                <div className="frame">
                                    <h1 style={{marginTop: 40}}>CSS</h1>
                                    <h1>IS</h1>
                                    <h1 style={{transform: 'translateX(-23px)'}}>AWESOME</h1>
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
                        backgroundImage: 'url(/img/skill-background.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: skillParallax
                }}>
                    <div style={{ padding: '0 20px'}}>
                        <h1 className="infoTitle">My Skill</h1>
                        <SkillCard/>
                    </div>
                </Section>

                <h1 className="work-list" style={{ textAlign: 'center' }}>My Works</h1>
                <Section id="work-section">
                    <div style={{ padding: '0 10px'}}>
                        <WorkList items={ workItems } />
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
                        <Rewards/>
                        <Education/>
                    </div>
                </Section>
                </>
            }
        </Page>
    }

    componentDidMount() {
        let isCanNotSmooth = checkIsMobile() || isSafari()

        this.setState({isCanNotSmooth})
        setTimeout(() => {
            this.setState({ 
                isMounted: true,
                y: window.scrollY
            })
        }, 100);
        
        if(!isCanNotSmooth) {
            window.addEventListener("scroll", this.scrollHandler)

            let observer = new MutationObserver(this.scrollHandler),
                scrollling: any = document.querySelector("#smoothScrolling")
            observer.observe(scrollling, {
                attributes: true,
                attributeFilter: ['style'],
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler() {
        let scrollling = document.querySelector("#smoothScrolling"),
            compos: any = scrollling ? window.getComputedStyle(scrollling) : {},
            matrix = new WebKitCSSMatrix(compos.transform),
            currentScroll = this.state.isCanNotSmooth ? window.scrollY : matrix.m42 * -1,
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
        let skillParallaxOffset = skillParallax ? skillParallax.getBoundingClientRect().top : 0
        if(informationObject && skillParallax &&
            skillParallaxOffset - window.innerHeight <=0 &&
            skillParallaxOffset + skillParallax.offsetHeight >= 0
        ) parallaxObjec.skill = informationObject.offsetHeight + (currentScroll / 2)

        // Check is resume section appear
        let resumeParallaxOffset = resumeParallax ? resumeParallax.getBoundingClientRect().top : 0
        if(informationObject && resumeParallax && skillParallax &&
            resumeParallaxOffset - window.innerHeight <=0 &&
            resumeParallaxOffset + resumeParallax.offsetHeight >= 0
        ) parallaxObjec.resume = skillParallax.offsetHeight + (currentScroll / 2)


        this.setState({ 
            y: currentScroll,
            landingParallax: this.state.isCanNotSmooth ? 0 : parallaxObjec.landing,
            skillParallax: this.state.isCanNotSmooth ? 0 : parallaxObjec.skill,
            resumeParallax: this.state.isCanNotSmooth ? 0 : parallaxObjec.resume
        })
    }

}

export default Home;