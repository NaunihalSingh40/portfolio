import React from 'react'
import styles from './Portfolio.module.css'
import cardData from '../../cardData';
import Cards from './Cards/Cards';
import Reveal from '../Reveal/Reveal';

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
        <Reveal>
        {/* <div className="container">
            <div className={styles.title}>
                <h2>
                    Selected<span>Works</span>
                </h2>
                <hr/>
            </div>
            <ul className={styles.cards}>
                {cardData.map((item) =>(
                    <Cards key={item.id} 
                    image={item.img}
                    title={item.title}
                    url = {item.url}
                    desc = {item.desc}/>
                ))}
            </ul>
        </div> */}
        </Reveal>
    </section>
  );
};
export default Portfolio;
