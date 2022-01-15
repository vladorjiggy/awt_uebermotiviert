import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
class SinglePost extends Component {
    state = {
        post: {}
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
            <div></div>
        )
        
    }
}
export default withRouter(SinglePost);