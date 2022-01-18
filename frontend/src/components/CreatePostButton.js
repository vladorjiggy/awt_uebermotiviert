import React, { Component } from "react"

import { connect } from 'react-redux';
import {Link} from "react-router-dom"




class CreatePostButton extends Component {

    render() {
        return (
            <div>
                <Link to="/post/create" id="CreatePostOpenDialogButton">createPost</Link>
            </div>
        )
    }
}

export default connect()(CreatePostButton)