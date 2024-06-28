import { motion} from "framer-motion"


export function About(){


    return <>
      <div className="about">
        <div className="about__content" >
          {/* Utilisation de la librairie Framer motion pour l'animation de la div
          apropos
          */}
       <motion.div className="apropos"
          initial={{
            opacity: 1,
            x: '-100%',
          }}
          whileInView={{
            opacity: 1,
            x: '0',
          }}
          transition={{
            duration: 2,
          }}
       
       >
        
        
            <div className="apropos__content">
                  <h1>About</h1>
                  <p>Passionné par le développement web, je suis un développeur
                     spécialisé en React permettant
                      la création d'applications web dynamiques et interactives.
                       Ma compétence en JavaScript, combinée à une solide maîtrise
                        des bibliothèques et frameworks modernes, me permet de
                         concevoir des interfaces utilisateur réactives et performantes.
                          Toujours à l'affût des dernières tendances et innovations
                           technologiques, je m'efforce de perfectionner constamment
                            mes compétences et d'apporter des solutions créatives et
                             efficaces aux projets sur lesquels je travaille.
                               Mon objectif est de transformer des idées en réalités
                                numériques captivantes.
                  </p>
            </div>
      
        </motion.div>
        {/* Utilisation de la librairie Framer motion pour l'animation de la div
          skills
          */}
        <motion.div className="skills"
          initial={{
            opacity: 1,
            x: '+100%',
          }}
          whileInView={{
            opacity: 1,
            x: '0',
          }}
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