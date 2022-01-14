import React, { Component } from "react"

import { connect } from 'react-redux';
import {Link} from "react-router-dom"

import { getShowCreatePostDialogAction } from '../actions/CreatePostActions'


class CreatePostButton extends Component {

 /*    constructor(props) 
    {
        super(props);
        this.showCreatePostDialog = this.showCreatePostDialog.bind(this);
    }

    showCreatePostDialog() {
        const dispatch = this.props.dispatch;
        dispatch(getShowCreatePostDialogAction())
    } */

    render() {
        return (
            <div>
                <Link to="/createPost" id="CreatePostOpenDialogButton"></Link>
            </div>
        )
    }
}

export default connect()(CreatePostButton)