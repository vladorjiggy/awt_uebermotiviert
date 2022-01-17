import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
class SinglePost extends Component {
    state = {
        post: {},
        category: "",
        categoryname: ""
    };
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/post/get/' + this.props.params.post_id;
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                console.log("result: " + result)

                this.setState({
                  post: result.post,
                  category: result.post.categories
                })
            })
        
        const categoryUrl = process.env.REACT_APP_SERVERHOST + '/category/get/' + this.state.category;
        console.log("categoryUrl: " + categoryUrl);

        fetch(categoryUrl, { 
            method: 'get',
            
          })
          .then(result => result.json())
          .then(result => {
              console.log("result: " + result);
              console.log("jsonResult: " + JSON.stringify(result));
              // FUNKTIONIERT NOCH NICHT
              // Liefert alle vorhandenen Kategorien. Nun die _id's mit this.state.category vergleichen und den name der _id ausspucken?
              // Oder alle Kategorien die nicht die selbe _id haben aussortieren und dann einzig verbliebenen name?

              this.setState({
                categoryname: result.categories.name
              })
          })
    }
    render() {
        return (
          <main>
            <ul id="breadcrumb">
              <li><a>Startseite</a></li>
              <li><a>{this.state.post.categories}</a></li>
              <li>{this.state.post.title}</li>
            </ul>

            <div id="container-SBP">
              <img
                id="blog-img-center"
                src={this.state.post.post_image}
                alt={this.state.post.post_image}
              />
              <div id="blog-title-info">
                <h3 id="blog-title">
                {this.state.post.title}
                </h3>
                <div id="category-date">
                  <p id="p-category">
                    Aus der Rubrik: <span><a id="category">{this.state.post.categories}</a></span>
                  </p>
                  <p>, veröffentlicht am: <span id="release-date">{this.state.post.created}</span></p>
                </div>
              </div>

              <div id="div-blog-text">
                <article id="article-blog-text-1">
                  <p id="blog-text-1">
                    {this.state.post.content}
                  </p>
                </article>
              </div>
            </div>
          </main>
        )        
    }
}

export default withRouter(SinglePost);