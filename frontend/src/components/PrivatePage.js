import React, { Component } from "react";

class PrivatePage extends Component {

    render() {
        return(
           
            <main>
                <div id="container-cms">
                    <div id="div-add-button">
                        <button id="add-button"><p id="plusIcon">+</p></button>
                        <p id="btn-lable">Beitrag erstellen</p>
                    </div>

                    
                    <div id="table-list">

                        
                        <table>

                            <caption id="table-caption">Alle Beiträge</caption>
                            
                            {/* <tr>
                                    <th></th>
                                    <td><span id="category"></span>Kategorie</span></td>
                                    <td><span id="posteDate"></span>Datum</span></td>
                                    <td id="td-e"><a href="#" id="edit">bearbeiten</a></td>
                                    <td id="td-d"><a href="#" id="delete">löschen</a></td>
                            </tr>

                            <tr>
                                    <th><span id="postName"><span>PostName</span></th>
                                    <td><span id="category"></span>Kategorie</span></td>
                                    <td><span id="posteDate"></span>Datum</span></td>
                                    <td id="td-e"><a href="#" id="edit">bearbeiten</a></td>
                                    <td id="td-d"><a href="#" id="delete">löschen</a></td>
                            </tr> */}
                         
                        </table>

                       



                    </div>    
        
                </div>
            
            </main>
                
            
        )
    }
}

export default PrivatePage