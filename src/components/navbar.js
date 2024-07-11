export function Navbar(){
    

    return <>
     <div className="navbar glass"> 
      <a className="navIcon" href="#home"  aria-label="home"><span className="icon-home"></span></a><a className="navlink" href="#home">Home</a>
      <a className="navIcon" href="#about"  aria-label="about"><span className="icon-user"></span></a><a className="navlink" href="#about">About</a>
      <a className="navIcon" href="#portfolio"  aria-label="portfolio"><span className="icon-briefcase"></span></a><a className="navlink" href="#portfolio">Portfolio</a>
      <a className="navIcon" href="#contact"  aria-label="contact"><span className="icon-envelop"></span></a><a className="navlink" href="#contact">Contact</a>
    </div>
    </>
  }