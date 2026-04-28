/* React Module */
import { Component } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Section from "../MainLayout/Section";
import MusicItem from "../../../music/MusicItem";

/* Types */
import { MusicStructure } from "../../../data/music-list";

/* Styles */
import styles from "./styles.module.scss";

interface IProps {
    musicList: MusicStructure[];
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.5, 0.025, 0, 1] },
    },
};

class IntroSection extends Component<IProps> {

    render() {
        const { musicList } = this.props;

        return (
            <Section id="information" style={{ textAlign: "left" }}>
                <div className={styles.wrapper}>

                    {/* About me block */}
                    <motion.div
                        className={styles.about}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* <motion.span className={styles.eyebrow} variants={itemVariants}>
                            ABOUT · INTRODUCTION
                        </motion.span> */}

                        <motion.h2 className={styles.greeting} variants={itemVariants}>
                            Hi there<span className={styles.greetingDot}>.</span>
                        </motion.h2>

                        <motion.div className={styles.bio} variants={itemVariants}>
                            <p>I'm <span className={styles.highlight}>Jaruwat Pohong</span>,a software developer with a passion for crafting user-friendlyexperiences across web, desktop, and mobile applications.As a frontend developer, I'm particularly drawn to the world ofweb design and frontend development, where I can bring ideas tolife and create visually appealing and interactive interfaces.</p>
                            <p>However, I'm always up for a challenge and enjoy exploring new areas of software development, regardless of whether they fall strictly within the frontend realm. Feel free to connect with me if you'd like to discuss web development, explore potential collaborations, or just chat about the ever-evolving world of technology. <span className={styles.heart}>{"<3"}</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Music block — original layout */}
                    <div className="understandCSS">
                        <p style={{ textAlign: 'center' }}>Music is a part of my life ;3</p>
                        <motion.div className='music-list'>
                            {musicList.map((item, index) => (
                                <MusicItem key={index} songInfo={item} videoDisabled={true} />
                            ))}
                        </motion.div>
                        <Link to="/music" className="btnViewMore">
                            <span>View All Music Collections</span>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>

                </div>
            </Section>
        );
    }
}

export default IntroSection;
