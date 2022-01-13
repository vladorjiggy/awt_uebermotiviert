import React,{ Component } from "react";
//import HomeAboveTheFold from '../components/HomeAboveTheFold'
//import AllForums from '../components/AllForums'

class Home extends Component {
    state = {
        forums: []
    };
    componentDidMount(){
        /**
         * Hier Authorization wieder raus und Cookies mitschicken
         */
        const url = 'https://localhost/forums/getAllForums';
        fetch(url, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjBhYmFhOGVmMzM5OGVjY2JlY2M1M2U4IiwiaWF0IjoxNjIzMDgzODIwLCJleHAiOjE2MjQ3MDY5OTA3MzB9.yDKQCImsD72cJ7OC23szovSj4ZTTjOClzfj2Wsdl8Wo', 
              
            })
            
          })
          .then(result => result.json())
          .then(result => {
              this.setState({
                  forums:result
              })
          })
    }
    render() {
      return (
          <div>
            <section id="mainContent">
                <div className="desc">
                    <h1>Willkommen im WoW-Forum</h1>
                    <p>
                    Das WoW-Forum ist eine Community Seite für Spieler des Games World of Warcraft. 
                    Derzeit gibt es weltweit über 100 Millionen Spieler des Games World of Warcraft.
                    Neue Spieler sind sich oftmals über den Umfang des Spiels nicht im Klaren und können daher dieses Forum nutzen um sich untereinander auszutauschen und sich gegenseitig zu unterstützen.
                    Wähle zunächst deine Spielversion aus.
                    </p>
                    
                </div>
            </section>
          </div>
        
      );      
    }
}
export default Home