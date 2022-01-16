import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Dashboard extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/post/get';
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    posts: result.posts
                })
            })
    }
    render() {
        return(
           
            <main>
                <div id="container-cms">
                    <div id="div-add-button">
                    <Link to={'/post/create'} className="nav-link"><button id="add-button"><p id="plusIcon">+</p></button></Link>
                        
                        <p id="btn-lable">Beitrag erstellen</p>
                    </div>

                    
                    <div id="table-list">

                    <caption id="table-caption">Alle Beiträge</caption>
                        <table>
                            
                            <tr>
                                    <th><span id="postName">Name</span></th>
                                    <td><span id="">Kategorie</span></td>
                                    <td><span id="posteDate">Datum</span></td>
                            </tr> 
                             
                            <tr>
                                    <th><span id="postName">PostName</span></th>
                                    <td><span id="category">Kategorie</span></td>
                                    <td><span id="posteDate">Datum</span></td>
                                    <td id="td-e"><a href="#" id="edit">bearbeiten</a></td>
                                    <td id="td-d"><a href="#" id="delete">löschen</a></td>
                            </tr> 
                         
                        </table>

                       



                    </div>    
        
                </div>
            
            </main>
                
            
        )
    }
}

export default Dashboard