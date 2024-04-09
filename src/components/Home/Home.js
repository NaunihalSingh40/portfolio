import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import resume2023 from '../../resume 2023.pdf'
// const PDF_FILE_URL = "http://localhost:3000/Gurjeet Kaur Resume.pdf";
function Home() {
    const items = ["Designer","Web Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrentIndex((prevIndex) =>(prevIndex +1)% items.length);
        },3000);
        return()=> clearInterval(interval);
    })
    // const downloadTxtFile = (url) => {
    //     fetch(url)
    //     .then((response) => response.blob())
    //         .then((blob) => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(new Blob([blob]));
    //             // Setting various property values
    //             const fileName = url.split("/").pop();
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.setAttribute("download", fileName);
    //             document.body.appendChild(alink);
    //             alink.click();
    //             alink.remove();
    //         });
    // }
  return (
    <section id="home">
        <div className="container">
            <div className={styles.home}>
                <div classNmae={styles["home-content"]}>
                    <div className={styles["home-title"]}>
                        <h2>Hey, I'm</h2>
                        <h1 style={{color: "lightcoral"}}>Naunihal Singh</h1>
                    </div>
                    <div className={styles["text-wrapper"]}>
                        <p>
                            Creative <span classname ={styles.items}>{items[currentIndex]}</span>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <a href="#portfolio">View Projects</a>
                        </div>
                        <span className={styles.divider}>or</span>
                        <div className={styles.link}>
                            <a href="#about">Read About Me</a>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <a href={resume2023} download="resume2023.pdf" target="_blank">
                            <button className={styles.res} value="download" >Download Resume</button>
                        </a>
                    </div>
                    <div classname={styles.scroll}>
                        <a href="#about">
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.content}>
                        <img src="./images/me1.jpg" alt="Naunihal Singh"/>
                        <h2>Naunihal Singh 
                            <br/> <span/> Web Developer</h2>
                        <a href="#contact">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;
