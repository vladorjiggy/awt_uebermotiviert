import React, { Component } from "react"
import { connect } from "react-redux"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

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
    }

    handleShow(e) {
        e.preventDefault();
        /*this.setState({show: true})*/
        const { showCreatePostDialogAction } = this.props;
        showCreatePostDialogAction();
    }

    handleClose() {
        /*this.setState({show: false})*/
        const { hideCreatePostDialogAction } = this.props;
        hideCreatePostDialogAction();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userID, userName,password } = this.state;
        const { createPost } = this.props;
        createPost(userID, userName, password);
        console.log("Pushed submit")
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
                <Modal show={showDialog} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>Title</Form.Label>
                                <Form.Control id="TitleInput" type="text" placeholder="Enter Username" name='userID' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>Content</Form.Label>
                                <Form.Control id="ContentInput" type="text" placeholder="Enter Content" name='content' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>Categories. Hier müssen Radio Buttons o.Ä. hin</Form.Label>
                                <Form.Control id="CategoriesInput" type="text" placeholder="Select Categories" name='categories' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>post_image. Hier muss ein file upload hin</Form.Label>
                                <Form.Control id="post_ImageInput" type="text" placeholder="Updload some Images" name='post_image' onChange={this.handleChange} />
                            </Form.Group>

                            <Button id="CreatePostButton" variant="primary" type="submit" onClick={this.handleSubmit}>
                                Create Post
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
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