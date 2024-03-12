import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export function Card({title, description, deskImg, mobileImg, link, github,html, css, js, react, progress, range, targetScale}){
    
    const scale = useTransform(progress, range, [1, targetScale]);
    console.log(targetScale)
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])  

    return <>
       <section className="stick">
                         <div className="portfolio" ref={container}>
                          <motion.div className="portfolio__card"  style={{scale}}>
                            <div className="logos">
                            {html && <div className="htmlLogo"><img src="./images/HTML5.png" alt="html"></img></div> }  
                            {css && <div className="cssLogo"><img src="./images/css.png" alt="html"></img></div> }  
                            {react && <div className="reactLogo"><img src="./images/React.png" alt="html"></img></div> }  
                            {js && <div className="jsLogo"><img src="./images/JavaScript.png" alt="html"></img></div> }  
                            </div>
                            <div className="screenshots">
                              <div className="desk" style={{scale: imageScale}}><img src={deskImg} alt="portfolio 1 desk"></img></div>
                              <div className="mobile"><img src={mobileImg} alt="portfolio 1 mobile"></img></div>
                            </div>
                            <div className="text">
                              <div className="title">
                                <h1>Projet :</h1>
                                <span>{title}</span>
                                </div>
                              <div className="description">
                                <h1>Description :</h1>
                                {description}
                                </div>
                              <div className="link">
                                <h1>Liens :</h1>
                                <a href={link}>Lien site web</a><a href={github}>Lien github</a></div>
                            </div>
                             
                              
                          </motion.div>
                        </div>
                      </section>
    </>
  }