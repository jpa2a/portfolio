// import { motion } from "framer-motion"
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
// import Lenis from '@studio-freight/lenis'
import { Card } from '../components/card';

export const projets = [

  {
    title: "Kasa",
    description: "Creation website de location d'appartement en ligne sous React",
    deskImg: "./images/screens/p8_desk.png",
    mobileImg: "./images/screens/p8_mob.png",
    link: "http://www.test.com",
    github: "https://github.com/jpa2a/projet_8",
    html: true,
    css: true,
    js: true,
    react: true
  },
  {
    title: "Oh my food",
    description: "Creation Website repertoriant les menus de restaurant permettant de commander en ligne",
    deskImg: "./images/screens/p4_desk.png",
    mobileImg: "./images/screens/p4_mob.png",
    link: "",
    github: "https://github.com/jpa2a/projet_4",
    html: true,
    css: true,
    js: false,
    react: false
  },
  {
    title: "Nina Carducci",
    description: "Optimisation SEO du sites de la photographe nina carducci",
    deskImg: "./images/screens/p9_desk.png",
    mobileImg: "./images/screens/p9_mob.png",
    link: "https://jpa2a.github.io/",
    github: "https://github.com/jpa2a/projet_9",
    html: true,
    css: true,
    js: true,
    react: false
  },
  {
    title: "Argent bank",
    description: "Creation des elements dynamique pour une banque en ligne",
    deskImg: "./images/screens/p11_desk.png",
    mobileImg: "./images/screens/p11_mob.png",
    link: "",
    github: "https://github.com/jpa2a/projet_11",
    html: true,
    css: true,
    js: true,
    react: true
  },
  {
    title: "Booki",
    description: "Creation d'une partie du site pour l'agence de location d'appartement booki",
    deskImg: "./images/screens/p3_desk.png",
    mobileImg: "./images/screens/p3_mob.png",
    link: "",
    github: "https://github.com/jpa2a/projet_3",
    html: true,
    css: true,
    js: false,
    react: false
  },
]

export function Portfolio(){
     const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })

/*     useEffect( () => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
   */
    return <div id="portfolio"  ref={container}>
      {
                    projets.map( (projet, i) => {
                      const targetScale = 1 - ( (projets.length - i) * 0.05);
                     return <Card key={`p_${i}`} i={i} {...projet} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                   /*    return <section key={i} className="stick">
                         <div className="portfolio">
                          <div className="portfolio__card"  style={{marginTop:`calc(120px + ${i * 15}px)`}}   progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}>
                            <div className="logos">
                              <div className="htmlLogo"><img src="./images/HTML5.png" alt="html"></img></div>
                              <div className="cssLogo"><img src="./images/css.png" alt="html"></img></div>
                              <div className="reactLogo"><img src="./images/React.png" alt="html"></img></div>
                              <div className="jsLogo"><img src="./images/JavaScript.png" alt="html"></img></div>
                            </div>
                            <div className="screenshots">
                              <div className="desk"><img src={projet.deskImg} alt="portfolio 1 desk"></img></div>
                              <div className="mobile"><img src={projet.mobileImg} alt="portfolio 1 mobile"></img></div>
                            </div>
                            <div className="text">
                              <div className="title">{projet.title}</div>
                              <div className="description">{projet.description}</div>
                              <div className="link">{projet.link}</div>
                            </div>
                             
                              
                          </div>
                        </div>
                      </section>
 */
                     })

                     }
    
    
   {/*      <div className="porfolios">
          <div className="portfolio">
            <div className="desk"><img src="./images/Desktop1.png" alt="portfolio 1 desk"></img></div>
            <div className="mobile"><img src="./images/Iphone1.png" alt="portfolio 1 mobile"></img></div>
            <div className="htmlLogo"><img src="./images/HTML5.png" alt="html"></img></div>
            <div className="cssLogo"><img src="./images/css.png" alt="html"></img></div>
            <div className="reactLogo"><img src="./images/React.png" alt="html"></img></div>
            <div className="jsLogo"><img src="./images/JavaScript.png" alt="html"></img></div>
        
          </div>
          <div className="portfolio">
            <div className="desk"><img src="./images/Desktop2.png" alt="portfolio 2 desk"></img></div>
            <div className="mobile"><img src="./images/Iphone2.png" alt="portfolio 2 mobile"></img></div>
            <div className="htmlLogo"><img src="./images/HTML5.png" alt="html"></img></div>
            <div className="cssLogo"><img src="./images/css.png" alt="html"></img></div>
        
          </div>
        </div>
       */}
    </div>
  }