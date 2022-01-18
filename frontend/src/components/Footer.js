import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="div__footer">
    
          <nav>
            <ul>
              <li id="link-li0">
                <Link className="nav-link" to="/ueberuns">Über Uns</Link>

              </li>
              <li id="link-li1">
                <Link className="nav-link" to="/impressum">Impressum</Link>
              </li>
              <li id="link-li2">
                <Link className="nav-link" to="/contact">Kontakt</Link>
              </li>

            </ul>
          </nav>
          <p>© 2021 UebermotiviertAWT</p>
        
      </div>
    );
  }
}
export default Footer