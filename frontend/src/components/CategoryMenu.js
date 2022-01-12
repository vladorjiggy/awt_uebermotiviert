import React,{ Component } from "react";
import CategoryRenderList from "./CategoryRenderList";
class Categorymenu extends Component {
    state = {
        categories: []
    };
    componentDidMount(){
        const url = 'http://localhost:4000/category/get';
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