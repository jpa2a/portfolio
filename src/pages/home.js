import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function Home(){
    

    return <>
       <main className="hero">
        <div>
       {/*  <div className="div-tab">Home</div> */}
       <motion.div
         initial={{
            opacity: 0,
            x: '-30%',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
       className="herodiv">
        <div className="herotext prenom">Jean-paul</div>
        <div className="herotext nom">ANDREANI</div>
        <div className="herotext prof">Intégrateur Web</div>
        <div className="hero__links">
            <a className="hero__links__btn" href="cv.pdf">Download CV</a>
            <a className="hero__links__btn" href="#contact">Contact</a>
        </div>
       </motion.div>
       
        </div>
        <motion.div
        initial={{
         opacity: 0.5,
         x: '+140%',
       }}
       animate={{
         x: '-110%',
       }}
       transition={{
         duration: 15,
         repeat: Infinity,
         type: "tween",
         repeatType: "reverse",
         
       }}
        className="slide">PORTFOLIO</motion.div>
    </main>
    </>
  }