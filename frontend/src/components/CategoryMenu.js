import React,{ Component } from "react";
import CategoryRenderList from "./CategoryRenderList";

// Alle Kategorien werden bezogen und an die Komponente CategoryRenderList übergeben
class Categorymenu extends Component {

    state = {
        categories: []
    };

    componentDidMount(){
        const url = process.env.REACT_APP_SERVERHOST + '/category/get';
        fetch(url, { 
            method: 'get',
          })
          .then(result => result.json())
          .then(result => {
              this.setState({
                categories:result.categories
              })
          })
    }

    render() {
      return (
        <nav>
          <CategoryRenderList categories={this.state.categories} />
        </nav>
      );      
    }
}

export default Categorymenu