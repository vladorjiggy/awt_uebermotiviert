import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
class CategoryPosts extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/category/get/' + this.props.match.params.category_id;
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    posts: result.category.posts
                })
            })
    }
    render() {
        return (
            <div></div>
        )
        
    }
}
export default withRouter(CategoryPosts);