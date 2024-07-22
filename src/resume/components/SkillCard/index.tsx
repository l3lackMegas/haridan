/* React Module */
import { Component } from "react";

/* External Module */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faTerminal, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

/* Styles */
import styles from './styles.module.scss'

class SkillCard extends Component {

    render() {

        return <>
            <div className={styles.container} style={{marginBottom: '0'}}>
                {/* <ItemSkill
                    title="Designer"
                    icon={<FontAwesomeIcon icon={faPencilRuler}/>}
                    describe={<>
                        <p>User Experience must be first.</p>
                        <p>I value about One-Click concept.</p>
                    </>}
                >
                    <div className={styles.info}>
                        <p className={styles.topic}>I always do these things:</p>
                        <p>UX, UI, Web, Game HUD, Banner and Poster</p>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.topic}>Tools:</p>
                        <p>Figma</p>
                        <p>MS Paint</p>
                        <p>Pen / Paper</p>
                        <p>Photoshop</p>
                        <p>Proto.io</p>
                    </div>
                </ItemSkill> */}

                <ItemSkill
                    title="Backend Dev"
                    icon={<FontAwesomeIcon icon={faTerminal}/>}
                    describe={<>
                        <p>Everything starts here.</p>
                        <p>I started coding at 13 years old.</p>
                    </>}
                >
                    <div className={styles.info}>
                        <p className={styles.topic}>The things I can do:</p>
                        <p>RESTful API, Database and Container</p>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.topic}>Tech Stack &amp; Language &amp; Tools:</p>
                        <p>Nodejs / TypeScript</p>
                        <p>Next.js</p>
                        <p>Express.js</p>
                        <p>PHP</p>
                        <p>Lua</p>
                        <p>C# / VB.NET</p>
                        <p>MySQL / MongoDB</p>
                        <p>Docker</p>
                    </div>
                </ItemSkill>

                <ItemSkill
                    title="Mobile Dev"
                    icon={<FontAwesomeIcon icon={faMobileAlt}/>}
                    describe={<>
                        <p>I can do this job with a modern stack.</p>
                    </>}
                >
                    <div className={styles.info}>
                        <p className={styles.topic}>Platforms</p>
                        <p>Android, iOS is fine!</p>
                        <p>Um.. Windows Phone?</p>
                        <p>idk what are u talking about!</p>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.topic}>Tools &amp; SDK:</p>
                        <p>Flutter</p>
                        <p>Drift</p>
                        <p>Vue Native</p>
                        <p>React Native</p>
                        <p>Expo</p>
                    </div>
                </ItemSkill>

                <ItemSkill
                    title="Frontend Dev"
                    icon={<FontAwesomeIcon icon={faCode}/>}
                    describe={<>
                        <p>This is my favorite work.</p>
                        <p>I can enjoy with it all day.</p>
                    </>}
                >
                    <div className={styles.info}>
                        <p className={styles.topic}>Styles of my frontend:</p>
                        <p>Flat, Glassmorphism and Visualization</p>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.topic}>Libraries &amp; Tools:</p>
                        <p>HTML, CSS</p>
                        <p>JavaScript</p>
                        <p>React.js</p>
                        <p>SCSS / LESS</p>
                        <p>Framer Motion</p>
                        <p>Electron.js</p>
                        <p>jQuery</p>
                    </div>
                </ItemSkill>
            </div>
        </>
    }

}

export default SkillCard;

interface ItemProps {
    title: string
    icon: JSX.Element
    describe: string | JSX.Element
    children: React.ReactNode
}
class ItemSkill extends Component<ItemProps> {

    render() {

        const { title, icon, describe, children} = this.props

        return <div className={styles.item}>
            <div className={styles.headInfo}>
                <h1>{icon}</h1>
                <p className={styles.title}>{title}</p>
                <div>{describe}</div>
            </div>
            { children }
        </div>
    }

}
