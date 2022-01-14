import React,{ Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
      return (
        <footer>
        <nav>
          <ul>
            <li id="link-li0">
                <Link className="nav-link" to="/">Über Uns</Link>
              
            </li>
            <li id="link-li1">
                <Link className="nav-link" to="/">Impressum</Link>
            </li>
            <li id="link-li2">
              <Link className="nav-link" to="/">Kontakt</Link>
            </li>
  
          </ul>
        </nav>
        <p>© 2021 UebermotiviertAWT</p>
      </footer>
      );      
    }
}
export default Header