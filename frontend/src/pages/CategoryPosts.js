import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
import { Link } from "react-router-dom"
import SearchRender from "../components/SearchRender";

class CategoryPosts extends Component {
    state = {
        posts: [],
        categoryName: ""
    };

    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/category/get/' + this.props.params.category_id;
        fetch(url, {
            method: 'get',
        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    posts: result.category.posts,
                    categoryName: result.category.name
                })
            })
    }

    render() {
        if (this.state.posts.length) {
            return (

                <main>
                    <ul id="breadcrumb">
                        <li><Link to="/">Startseite</Link></li>
                        <li>{this.state.categoryName}</li>
                    </ul>

                    <SearchRender posts={this.state.posts} categoryName={this.state.categoryName} />
                </main>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default withRouter(CategoryPosts);