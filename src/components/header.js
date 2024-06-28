
import { Navbar } from "./navbar";

export function Header(){

    return <header>
    <Navbar />
      <nav>
        <div>
        <span>Web</span><span className="blue">Dev</span><span>2A</span>
        </div>
        <div className="links">
        <a href="http://twitter.com"><i className="fa-brands fa-twitter"></i></a>
        <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
        <a href="http://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
        <a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>

        </div>

      </nav>

    </header>
  }