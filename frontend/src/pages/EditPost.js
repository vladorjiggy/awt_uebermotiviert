import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
import CategorySelect from "../components/CategorySelect";
import { Link } from "react-router-dom";


class EditPost extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        post: {},
        _id: "",
        title: ``,
        content: ``,
        post_image: null,
        allCategories: [],
        categories: null,
        newPost_image: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }
  componentDidMount() {
    this.getCategories()
    const url = process.env.REACT_APP_SERVERHOST + '/post/get/' + this.props.params.post_id;
    fetch(url, {
        method: 'get',

    })
        .then(result => result.json())
        .then(result => {
            this.setState({
                post: result.post,
                _id: result.post._id,
                title: result.post.title,
                content: result.post.content,
                post_image: result.post.post_image,
                categories: result.post.categories
            })
        })
  }
  getCategories() {
    const url = process.env.REACT_APP_SERVERHOST + '/category/get';
    fetch(url, {
        method: 'get',

    })
        .then(result => result.json())
        .then(result => {
            this.setState({
                allCategories: result.categories
            })
        })
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  handleFileSelect(e) {
    this.setState({ post_image: e.target.files[0] })
  }
  handleSelectChange(e) {
    const target = e.target;
    const value = target.type === 'select' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: [value] })
  }
  handleCancel(e) {
    e.preventDefault();
    this.setState({
        post: null,
        _id: null,
        title: "",
        content: "",
        post_image: null,
        newPost_image: null,
        categories: ""
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { _id, title, content, categories } = this.state;
    this.editPost(_id, title, content, categories)
        .then(response => response.json())
        .then(data => {
            console.log("editPost.then(data): HALLO")
            console.log("editPost.then(data): " + data)
            console.log("editPost.then(data) stringify: " + JSON.stringify(data))

            if(this.state.newPost_image != null) {
              let id = data.post._id
              let formData = new FormData();
              formData.append("post_image", this.state.newPost_image);
              const requestOptions = {
                  method: 'POST',
                  credentials: 'include',
                  body: formData
              }
              const url = process.env.REACT_APP_SERVERHOST + '/file/upload/' + id;
              console.log("editPost: fileUpload: url: " + url);
              fetch(url, requestOptions).then(resp => {
                  if (resp.status === 200) {
                      this.setState({
                          post: null,
                          _id: null,
                          title: "",
                          content: "",
                          post_image: null,
                          newPost_image: null,
                          categories: ""
                      })
                      console.log("FileUpload erfolgreich")
                  }
              })
            }
            else {
              this.setState({
                post: null,
                _id: null,
                title: "",
                content: "",
                categories: ""
              })
              console.log("Ohne FileUpload erfolgreich");
            }
        })
        .catch(error => {
            console.log(error)
        })
  }
  editPost(_id, title, content, categories) {
    const requestOptions = {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, categories })
    }
    const url = process.env.REACT_APP_SERVERHOST + '/post/update/' + _id;
    console.log("editPost: url: " + url);
    return fetch(url, requestOptions)
  }
    render() {
        return(
          <main>
            <ul id="breadcrumb">
              <li><Link to="/">Startseite</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li>Beitrag bearbeiten</li>
            </ul>

            <div id="container-edit">

              <div class="form-group">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="attachment" name="newPost_image" onChange={this.handleFileSelect} />
                  <label for="attachment" class="file-upload">
                    <span class="lable-span__text">+</span>
                    <span id="filename"></span>
                  </label>
                  <p id="btn-lable">Bild auswählen und hochladen</p>
                </div>
              </div>

              <div id="con-edit">
        
                <div class="div-postHeadline-category">
                  
                  <input class="div__input--headline" placeholder="Wie soll dein Beitrag heißen?" name="title" value={this.state.title} onChange={this.handleChange}></input>

                  <div class="select-category">
                    <CategorySelect value={this.state.categories} categories={this.state.allCategories} handleSelectChange={this.handleSelectChange} />
                  </div>

                </div>

                <textarea class="div__textarea--post" placeholder="Schreibe hier dein Beitrag..." name="content" value={this.state.content} onChange={this.handleChange}></textarea>

              </div>

              <div class="div-container-button">
                <button class="div__button--submit" id="submit-post" onClick={this.handleSubmit}>Speichern</button>
                <button class="div__button--delete" id="delete-post" onClick={this.handleCancel}>Abbrechen</button>
              </div>
            </div>
          </main>
        )
    }
}

export default withRouter(EditPost);