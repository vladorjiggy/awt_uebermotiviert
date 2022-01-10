import React, { Component } from "react";

import "../layout/css/style.css";

import LoginButton from "./LoginButton";

class PublicPage extends Component {

    render() {
        return(
        <div>
              <section id="aboveTheFold">
            <div id="aboveTheFoldContent">
                <h1>Forum</h1>
                <p>Forum für??</p>
                <LoginButton />
                <button type="button" className="btn btn-outline-light">Kostenlos anmelden</button>
            </div>
            
        </section>
            
             <section id="mainContent">
          <div className="desc">
            <h1>??? Forum</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          
            <div className="container">
                <div className="row">
                  
                    
                  <div className="col-sm game_grid_item classic">
                    
                  </div>
                
                  <div className="col-sm game_grid_item tbc">
                    
                  </div>
                  <div className="col-sm game_grid_item wotlk">
                    
                  </div>
                </div>
                <div className="row">
                    <div className="col-sm game_grid_item mist">
                        
                    </div>
                    <div className="col-sm game_grid_item legion">
                        
                    </div>
                    <div className="col-sm game_grid_item shadow">
                        
                    </div>
                  </div>
              </div>
        </section>
        <section id="imp_dat">
          <ul>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </section>
        </div>
        )
    }
}

export default PublicPage