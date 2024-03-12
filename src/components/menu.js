import { useState } from "react"
import { motion } from "framer-motion"


export function Menu(){
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,

            }

        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay: 2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
    }
    return <>
     <motion.div className="menu"
        animate={open ? "open" : "closed"}
     >
        <div className="links">links</div>
        <button onClick={() => setOpen((prev) => !prev)} >test</button>
     </motion.div>
    </>
  }