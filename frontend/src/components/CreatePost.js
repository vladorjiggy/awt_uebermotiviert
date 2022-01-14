import React, { Component } from "react";

class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: ``,
            content: ``,
            post_image: '',
            categories: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(JSON.stringify(this.state))  // zum testen + tracken
    }

    handleSelectChange(e){
        const target = e.target;
        const value = target.type === 'select' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value })
        console.log(JSON.stringify(this.state))  // zum testen + tracken

        // ACHTUNG! Categories werden überschrieben atm, anstatt hinzugefügt, sadass man immer nur eine Kategorie wählen kann atm

    }

    handleCancel(e) {
        e.preventDefault();
        console.log("Pushed cancel")
        this.setState({
            title:"",
            content: "",
            post_image: "",
            categories: []
        })
        // dann noch updaten oder geht das automatisch?
    }

    handleSubmit(e) {
        console.log("Pushed submit")
        e.preventDefault();
        // ACHTUNG! post_image fehlt hier noch, da wir nicht mehr genau wussten wie das funktioniert.
        const { title, content, categories } = this.state;
        const { createPost } = this.props;
        createPost(title, content, categories);
        console.log("Pushed submit")
        this.setState({
            title:"",
            content: "",
            categories: []
        })
    }
    
    
    createPost(title, content, categories) {
        console.log("title: " + title)
        console.log("content: " + content)
        console.log("categories: " + categories)
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, categories })
        }
        
        const url = process.env.REACT_APP_SERVERHOST + '/post/create';
    
        return fetch(url, requestOptions)
    }
    

    render() {
        return (
          
                <div className="page-content" id="createPost">
                    <div id="container-edit">

                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="attachment" name="attachment"/>
                                <label for="attachment" class="file-upload">
                                <span class="lable-span__text">+</span>
                                <span id="filename"></span>
                                </label>
                                <p id="btn-lable">Bild auswählen und hochladen</p>
                            </div>
                        </div>

                        <div id="con-edit">
                
                            <div class="div-postHeadline-category">
                                
                                <input class="div__input--headline" placeholder="Wie soll dein Beitrag heißen?" name="title" onChange={this.handleChange}></input>

                                <div class="select-category">
                                    <select class="div__select--dropDownMenu" name="categories" id="dropDownMenu" onChange={this.handleSelectChange}>
                                        <option value="category">Wähle eine Kategorie</option>
                                        <option value="berge">Berge</option>
                                        <option value="kultur">Kultur</option>
                                        <option value="stadt">Stadt</option>
                                        <option value="strand">Strand</option>
                                        <option value="wald">Wald</option>
                                    </select>
                                </div>
                            </div>

                            <textarea class="div__textarea--post" placeholder="Schreibe hier deinen Beitrag..." name="content" onChange={this.handleChange}></textarea>

                        </div>

                        <div class="div-container-button">
                            <button class="div__button--submit" id="submit-post" onClick={this.handleSubmit}>Speichern</button>
                            <button class="div__button--delete" id="delete-post" onClick={this.handleCancel}>Abbrechen</button>
                        </div>
                    </div>
                </div>
         
        )
    }
}

export default CreatePost