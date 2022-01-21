import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {

  render() {
    return (
      <div>
        <ul id="breadcrumb">
          <li>
            <Link to="/">Startseite</Link>
          </li>
          <li>Kontakt</li>
        </ul>

        <div id="container-contact">
          <div id="container-p">
            <article id="container-article1-p1">
              <p id="article1-section1-text-wide">
                Fragen? Kooperatoionen? Liebesbriefe? Schreib mir gerne eine
                E-Mail!
              </p>
            </article>
            <article id="container-article2-p2">
              <p id="article2-section2-text1">
                <strong>E-Mail:</strong> mia.mustermann@gmail.com
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
