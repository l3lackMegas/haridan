/* React Module */
import { Component } from "react";

/* External Module */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faTerminal, faCode } from '@fortawesome/free-solid-svg-icons'

/* Styles */
import styles from './styles.module.css'

class SkillCard extends Component {

    render() {

        return <>
            <div className={styles.container}>
                <ItemSkill
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
                </ItemSkill>

                <ItemSkill
                    title="Backend Dev"
                    icon={<FontAwesomeIcon icon={faTerminal}/>}
                    describe={<>
                        <p>Everything starts here.</p>
                        <p>I started coding at 13 yeas old.</p>
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
                        <p className={styles.topic}>Library &amp; Tools:</p>
                        <p>HTML, CSS</p>
                        <p>JavaScript</p>
                        <p>React.js</p>
                        <p>SASS / SCSS</p>
                        <p>LESS</p>
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
}
class ItemSkill extends Component<ItemProps> {

    render() {

        const { title, icon, describe, children} = this.props

        return <div className={styles.item}>
            <div className={styles.headInfo}>
                <h1>{icon}</h1>
                <p className={styles.title}>{title}</p>
                <p>{describe}</p>
            </div>
            { children }
        </div>
    }

}
