import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export function Card({title, description, deskImg, mobileImg, link, github,html, css, js, react, progress, range, targetScale}){
    
    const scale = useTransform(progress, range, [1, targetScale]);
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
                            {html && <div className="htmlLogo"><img src="./images/HTML5.webp" alt="html"></img></div> }  
                            {css && <div className="cssLogo"><img src="./images/css.webp" alt="css"></img></div> }  
                            {react && <div className="reactLogo"><img src="./images/React.webp" alt="react"></img></div> }  
                            {js && <div className="jsLogo"><img src="./images/JavaScript.webp" alt="javascript"></img></div> }  
                            </div>
                            <div className="screenshots">
                              <div className="desk" style={{scale: imageScale}}>
                                <picture>
                                  <source srcset={`${deskImg}_640.webp`} media="(max-width: 640px)" />
                                  <source srcset={`${deskImg}.webp`} media="all" />
                                  <img src={`${deskImg}.webp`} alt="portfolio 1 desk"  loading="lazy" />
                                </picture>    
                              </div>
                              <div className="mobile">
                                <picture>
                                  <source srcset={`${mobileImg}_640.webp`} media="(max-width: 640px)" />
                                  <source srcset={`${mobileImg}.webp`} media="all" />
                                  <img src={`${mobileImg}.webp`} alt="portfolio 1 mobile"  loading="lazy" />
                                </picture>
                              </div>
                            </div>
                            <div className="text">
                              <div className="title">
                                <h2>Projet :</h2>
                                <span>{title}</span>
                                </div>
                              <div className="description">
                                <h2>Description :</h2>
                                <span>{description}</span>
                                </div>
                              <div className="link">
                                
                                {link.length > 0 && <a href={link} target="_blank"  rel="noreferrer">Lien site web</a> }
                                {github.length >0 && <a href={github} target="_blank"  rel="noreferrer">Lien github</a> }</div>
                            </div>
                             
                              
                          </motion.div>
                        </div>
                      </section>
    </>
  }