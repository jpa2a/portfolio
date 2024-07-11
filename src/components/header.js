
import { Navbar } from "./navbar";

export function Header(){

    return <header>
    <Navbar />
      <nav>
        <div>
          <span>Web</span><span className="blue">Dev</span><span>2A</span>
        </div>
        <div className="links">
          <a href="http://twitter.com" aria-label="Twitter"  target="_blank"  rel="noreferrer"><span className="icon-twitter"></span></a>
          <a href="http://instagram.com" aria-label="Instagram" target="_blank"  rel="noreferrer"><span className="icon-instagram"></span></a>
          <a href="http://linkedin.com" aria-label="Linkedin" target="_blank"  rel="noreferrer"><span className="icon-linkedin"></span></a>
          <a href="http://facebook.com" aria-label="Facebook" target="_blank"  rel="noreferrer"><span className="icon-facebook2"></span></a>
        </div>
      </nav>

    </header>
  }