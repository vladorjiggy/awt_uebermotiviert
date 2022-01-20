import React, { Component } from "react"
import { connect } from "react-redux"

/* import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form' */

import * as createPostActions from '../actions/CreatePostActions'
import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    return state;
}

class CreatePostModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userID: ``,
            password: ``
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleShow(e) {
        e.preventDefault();
      
        const { showCreatePostDialogAction } = this.props;
        showCreatePostDialogAction();
    }

    handleClose() {
        
        const { hideCreatePostDialogAction } = this.props;
        hideCreatePostDialogAction();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleCheckboxChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userID, userName,password } = this.state;
        const { createPost } = this.props;
        createPost(userID, userName, password);
        this.setState({
            userID:"",
            userName: "",
            password: ""
        })
    }

    render() {

        var showDialog = this.props.showCreatePostDialog;
        if (showDialog === undefined) {
            showDialog = false;
        }

        return (
            <div>
              
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showCreatePostDialogAction: createPostActions.getShowCreatePostDialogAction,
    hideCreatePostDialogAction: createPostActions.getHideCreatePostDialogAction,
    createPost: createPostActions.createPost,
}, dispatch)

const ConnectedUserSessionWidget = connect(mapStateToProps, mapDispatchToProps)(CreatePostModal)

export default ConnectedUserSessionWidget