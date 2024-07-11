import './App.scss';
import {Header} from './components/header';
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
    <footer id='contact'>
       <Contact /> 
    </footer>
 </>
  );
}

export default App;
