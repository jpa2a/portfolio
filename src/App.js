import './App.scss';
 //import { BrowserRouter } from 'react-router-dom';
import {Header} from './components/header';
import {Footer} from './components/footer';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
 
function App() {
  return (
    <>
    <section id='home'>
      <Header />
      <Home />
    </section>
    <section id='about'>
      <About />
    </section>
      <Portfolio />
    <section id='contact'>
       <Contact /> 
    </section>
 </>
  );
}

export default App;
