import { motion} from "framer-motion"


export function About(){


    return <>
      <div className="about">
        <div className="about__content" >
       <motion.div className="apropos"
          initial={{
            opacity: 1,
            x: '-100%',
          }}
          whileInView={{
            opacity: 1,
            x: '0',
          }}
         /*  exit={{
            x: '+140%',
          }} */
          transition={{
            duration: 2,
          }}
       
       >
        
        
            <div className="apropos__content">
                  <h1>About</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                          mollit anim id est laborum.
                  </p>
            </div>
      
        </motion.div>
        <motion.div className="skills"
          initial={{
            opacity: 1,
            x: '+100%',
          }}
          whileInView={{
            opacity: 1,
            x: '0',
          }}
         /*  exit={{
            x: '+140%',
          }} */
          transition={{
            duration: 2,
          }}
        
        >
          <div className="skills__title">Mes compétences</div>
            <div className="skills__list">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
              <span>React</span>
              <span>SEO</span>
              <span>Terminal</span>
              <span>Git</span>
              <span>Github</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  }