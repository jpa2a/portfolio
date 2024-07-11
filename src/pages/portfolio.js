import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '../components/card';
import { useProjects } from "../components/useProjects";


export function Portfolio(){
      const projets = useProjects("json/projects.json"); 
      const container = useRef(null);
      const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })


    return  <div id="portfolio"  ref={container}>
              {
                projets.map( (projet, i) => {
                    const targetScale = 1 - ( (projets.length - i) * 0.05);
                    return <Card key={`p_${i}`} i={i} {...projet} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
              }
    
            </div>
  }