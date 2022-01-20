import React, { Component } from "react";
import { Link } from "react-router-dom";

class UeberUns extends Component {
  render() {
    return (

      <div>
        <ul id="breadcrumb">
          <li>
            <Link to="/">Startseite</Link>
          </li>
          <li>Über uns</li>
        </ul>

        <div id="container-aboutUs">
          <article id="article1-section1-aboutUs">
            <img
              id="article1-img-aboutUs"
              src="searchImages/aboutUs.jpeg"
              alt="ueberUns_img"
            />
          </article>

          <article id="article1-section1-aboutUs">
            <h3 id="article1-headline-aboutUs">Über "The Traveller's Chant"</h3>
            <p id="article1-text-aboutUs">
              Weltenbummler und Reiseverrückte! Das sind wir: Max und Mia. Wir
              lieben es zu reisen und neue Orte zu erkunden, die nicht in allen
              Reiseführern drinstehen. Was als kleiner Reiseblog für unsere
              Verwandten und Freunde anfing, ist nun zu unserem Fulltimejob
              geworden. Auf unseren Reisen sammeln wir Fotos von atemberaubenden
              kulturellen Schauplätzen, steigen auf Berge, schwimmen in geheimen
              Meeresbuchten und lassen uns in den buntesten Städten der Welt
              treiben. Da wir finden, dass mehr Menschen keine 0815 Urlaube
              buchen sollten und es auf dieser Welt neben Mallorca und Ibiza
              noch andere schöne und aufregende Reiseziele gibt, haben wir es
              uns zur Aufgabe gemacht all diese schönen Plätzte zu bereisen, zu
              fotografieren und darüber zu schreiben.
            </p>
          </article>

          <article id="article2-section2-aboutUs">
            <p id="article2-text-aboutUs">
              So entstand The Traveller’s Chant. Seitdem ist viel passiert und
              wir hegen und pflegen diese Sammlung von schönen und
              abenteuerlichen Reisezielen. Auf diesem Blog werden alle Fündig.
              Es gibt Reiseziele für Bergbegeisterte, egal ob Neuling oder
              Profi-Bergsteiger und Beiträge über die schönsten Strände in
              Europa und anderen exoterischen Länder. Wir haben kleine „the best
              places to be“ Listen für verschiedene Städte geschrieben und
              verraten euch wo es die besten Partylocation gibt, wenn ihr
              unterwegs seid. Und egal ob du in historischen Städten oder in
              geschützten Wäldern die Zerstreuung suchst: Wir haben viele
              solcher Abenteuer erlebt und darübergeschrieben. Und jetzt los:
              Such dir dein nächstes Abenteuer!
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default UeberUns;
