import React from 'react'
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal'

export default function About() {
  return (
    <section id="about" className={styles.about}>

        <Reveal>
        <div className="container">
            <div className={styles.title}>
                <h2>
                    About <span>Me</span>
                </h2>
                <hr/>
            </div>
            <div className="grid">
                <div className={styles["about-img"]}>
                    <img src="./images/me1.jpg" alt="Naunihal Singh"/>
                </div>
                <div className={styles["about-content"]}>
                    <h3 className={styles.border}>Hi There!</h3>
                    <p>
                        I'm <span className={styles.name}>Naunihal Singh</span>, An experienced web developer proficient in a wide range of technologies and frameworks. Skilled in HTML, CSS, and
JavaScript for building responsive user interfaces. Expertise in React for creating dynamic and efficient
front-end applications. Proficient in Node.js for server-side scripting.
                    </p>
                </div>
            </div>
        </div>
        </Reveal>
    </section>
  )
}
