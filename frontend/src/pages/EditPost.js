import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
class EditPost extends Component {
  state = {
    post: {}
};
  componentDidMount() {
    const url = process.env.REACT_APP_SERVERHOST + '/post/get/' + this.props.match.params.post_id;
    fetch(url, {
        method: 'get',

    })
        .then(result => result.json())
        .then(result => {
            this.setState({
                posts: result.post
            })
        })
}
    render() {
        return(
          <div>
          </div>

        )
    }
}

export default withRouter(EditPost);