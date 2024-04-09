import React from 'react'
import styles from './Footer.module.css'
import {BsGithub, BsLinkedin} from "react-icons/bs"

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.flex}>
                <div>
                    <p>&copy; 2024 by Naunihal Singh. All rights reserved.</p>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#testimonial">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={styles.icons}>
                    <a href="https://github.com/NaunihalSingh40">
                        <BsGithub size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/naunihal-singh/">
                        <BsLinkedin size={30}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;