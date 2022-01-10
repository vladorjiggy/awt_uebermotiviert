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
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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
                                <Form.Label>Categories. Hier müssen 6 Radio Buttons o.Ä. hin</Form.Label>

                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Strand"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Berge"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Stadt"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Wald"
                                            type={type}
                                            id={`inline-${type}-4`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Kultur"
                                            type={type}
                                            id={`inline-${type}-5`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Party"
                                            type={type}
                                            id={`inline-${type}-6`}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        </div>
                                    ))}
                                    
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="strand">Strand</label>
                                        <input id="strand" type="checkbox" name="strand" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="berge">Berge</label>
                                        <input id="berge" type="checkbox" name="berge" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="berge">Stadt</label>
                                        <input id="berge" type="checkbox" name="berge" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="berge">Wald</label>
                                        <input id="berge" type="checkbox" name="berge" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="berge">Kultur</label>
                                        <input id="berge" type="checkbox" name="berge" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="berge">Party</label>
                                        <input id="berge" type="checkbox" name="berge" className="createinput" onChange={this.handleCheckboxChange}/>
                                    </div>
                                </Form>
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