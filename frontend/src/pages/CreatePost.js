import React, { Component } from "react";
import CategorySelect from "../components/CategorySelect";
import { connect } from "react-redux";
import { Navigate , Link} from "react-router-dom";

const mapStateToProps = (state) => {
    return state;
  };
class CreatePost extends Component {
    
    
    constructor(props) {
        super(props)
        this.state = {
            title: ``,
            content: ``,
            post_image: null,
            allCategories: [],
            category: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
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
            title: "",
            content: "",
            post_image: null,
            categories: ""
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, content, categories } = this.state;
        this.createPost(title, content, categories)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let id = data.post._id;
                let formData = new FormData();
                formData.append("post_image", this.state.post_image);
                const requestOptions = {
                    method: 'POST',
                    credentials: 'include',
                    body: formData
                }
                const url = process.env.REACT_APP_SERVERHOST + '/file/upload/' + id;
                fetch(url, requestOptions).then(resp => {
                    if (resp.status === 200) {
                        this.setState({
                            title: "",
                            content: "",
                            post_image: null,
                            categories: ""
                        })
                        this.props.navigate('/dashboard');
                    }
                })
                
            })
            .catch(error => {
                console.error(error)
            })
    }


    createPost(title, content, categories) {
        if(this.state.post_image != null){
            const requestOptions = {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content, categories })
            }
            const url = process.env.REACT_APP_SERVERHOST + '/post/create';
            return fetch(url, requestOptions)
        }
        else{
            alert('Bitte Bild auswählen')
            return Promise.resolve({error: 'Bitte Bild auswählen'})
            
        }
        
    }

    componentDidMount() {
        console.log(this.props.user)
        if(!this.props.user){
            console.log('noUser')
            return this.props.navigate('/');
        }
        else{
            this.getCategories()
        }
        
    }
    render() {
        if(this.props.user){
            return (

                <div className="page-content" id="createPost">
    
                    <ul id="breadcrumb">
                        <li><Link to="/">Startseite</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li>Beitrag erstellen</li>
                    </ul>
    
                    <div id="container-edit">
    
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="attachment" name="post_image" onChange={this.handleFileSelect} />
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
    
                            <textarea class="div__textarea--post" placeholder="Schreibe hier deinen Beitrag..." name="content" value={this.state.content} onChange={this.handleChange}></textarea>
    
                        </div>
    
                        <div class="div-container-button">
                            <button class="div__button--submit" id="submit-post" onClick={this.handleSubmit}>Speichern</button>
                            <button class="div__button--delete" id="delete-post" onClick={this.handleCancel}>Abbrechen</button>
                        </div>
                    </div>
                </div>
    
            )
        }
        else{
            return (
                <Navigate replace to="/" />
            )
        }
        
    }
}

export default connect(mapStateToProps)(CreatePost);