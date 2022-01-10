import React, { Component } from "react";
import CreatePostButton from "./CreatePostButton";
import CreatePostModal from './CreatePostModal'

class CreatePost extends Component {

    render() {
        return (
            <div className="page-content" id="createPost" style={{ background: 'white' }}>
                Create Post
              <CreatePostModal/>
              <CreatePostButton/>

            </div>
        )
    }
}

export default CreatePost