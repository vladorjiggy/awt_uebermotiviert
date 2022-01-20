import React, { Component } from "react";
import { Link } from "react-router-dom";
class Impressum extends Component {

  render() {
    return (
      <div id="container-impressum">
        <ul id="breadcrumb">
          <li><Link to="/">Startseite</Link></li>
          <li>Impressum</li>
        </ul>

        <div id="con-left">
          <article id="article1-section1">
            <h4 id="article1-section1-headline">Angaben gemäß § 5 TMG:</h4>
            <p id="article1-section1-text">
              Mia Muster Karostr. 11
            </p>
            <p id="article1-section1-text-wide">
              1112345 Musterburg
            </p>
          </article>
          <article id="article2-section2">
            <h4 id="article2-section2-headline">Kontakt:</h4>
            <p id="article2-section2-text1">
              <strong>E-Mail:</strong> mia.mustermann@gmail.com
            </p>
            <p id="article2-section2-text2">
              <strong>Telefon:</strong> 01234 5678900
            </p>
          </article>
        </div>

        <div id="con-right">
          <article id="article3-section1">
            <h4 id="article2-section1-headline">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h4>
            <p id="article1-section1-text">
              Mia Muster Karostr. 11
            </p>
            <p id="article1-section1-text-wide">
              1112345 Musterburg
            </p>
          </article>
        </div>
      </div>

    )
  }
}

export default Impressum;