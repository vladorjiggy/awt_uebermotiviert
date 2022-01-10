import React, { Component } from "react"
import Button from 'react-bootstrap/Button'

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
                <Button id="CreatePostOpenDialogButton" variant="light" onClick={this.showCreatePostDialog}>
                    Create Post
                </Button>
            </div>
        )
    }
}

export default connect()(CreatePostButton)