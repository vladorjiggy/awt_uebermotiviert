import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
class SinglePost extends Component {
    state = {
        post: {},
        /* title: ``,
        content: ``,
        post_image: "",
        allCategories: [],
        category: "" */
    };
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/post/get/' + this.props.params.post_id;
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    post: result.post
                })
            })
    }
    render() {
        return (
            <div>

              
               {/*  <main>
      <div id="container-SBP">
        <img
          id="blog-img-center"
          src="../images/kultur/asien01.jpg"
          alt="asien01.png"
        />
        <div id="blog-title-info">
          <h3 id="blog-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </h3>
          <div id="category-date">
            <p id="p-category">
              Aus der Rubrik: <span><a id="category">Kategorie</a></span>
            </p>
            <p>Veröffentlich am: <span id="release-date">date</span></p>
          </div>
        </div>

        <div id="div-blog-text">
          <article id="article-blog-text-1">
            <p id="blog-text-1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo
            </p>
          </article>
        </div>
      </div>
    </main> */}
            </div>
        )
        
    }
}
export default withRouter(SinglePost);