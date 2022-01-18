import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../helpers/withRouter";
class SinglePost extends Component {
  state = {
    post: {},
    category: {}
  };
  componentWillMount() {
    const url = process.env.REACT_APP_SERVERHOST + '/post/get/' + this.props.params.post_id;
    fetch(url, {
      method: 'get',

    })
      .then(result => result.json())
      .then(result => {

        this.setState({
          post: result.post,
          category: result.post.categories[0]
        })
      })


  }
  checkIfDigit(int) {
    return int < 10 ? '0' + int : int
  }
  convertTimestamp(timestamp) {
    let date = new Date(timestamp)
    return `${this.checkIfDigit(date.getDate())}.${this.checkIfDigit(date.getMonth() + 1)}.${date.getFullYear()}`
  }
  render() {
    return (
      <main>
        <ul id="breadcrumb">
          <li><Link to="/">Startseite</Link></li>
          <li><Link to={"/post/category/" + this.state.category._id}>{this.state.category.name}</Link></li>
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
                Aus der Rubrik: <span><Link id="category" to={"/post/category/" + this.state.category._id}>{this.state.category.name}</Link></span>
              </p>
              <p>, veröffentlicht am: <span id="release-date">{this.convertTimestamp(this.state.post.created)}</span></p>
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