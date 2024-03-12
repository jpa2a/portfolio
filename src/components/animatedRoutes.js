import { useLocation } from "react-router-dom"
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { Portfolio } from '../pages/portfolio';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { AnimatePresence } from "framer-motion";


export function AnimatedRoutes(){
    const location = useLocation();

    return <>
    <AnimatePresence>
       <Routes location={location} key={location.pathname}>
  <Route path="/" element={<Home />} />
   <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="portfolio" element={<Portfolio />} />
  <Route path="*" element={<Home />}/> 
  </Routes>
  </AnimatePresence>
    </>
  }