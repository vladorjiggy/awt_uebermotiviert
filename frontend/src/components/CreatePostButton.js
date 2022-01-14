import React, { Component } from "react"

import { connect } from 'react-redux';

import { getShowCreatePostDialogAction } from '../actions/CreatePostActions'

class CreatePostButton extends Component {

    constructor(props) 
    {
        super(props);
        this.showCreatePostDialog = this.showCreatePostDialog.bind(this);
    }

    showCreatePostDialog() {
        const dispatch = this.props.dispatch;
        dispatch(getShowCreatePostDialogAction())
    }

    render() {
        return (
            <div>
                <button id="CreatePostOpenDialogButton" variant="light" onClick={this.showCreatePostDialog}>
                    Create Post
                </button>
            </div>
        )
    }
}

export default connect()(CreatePostButton)