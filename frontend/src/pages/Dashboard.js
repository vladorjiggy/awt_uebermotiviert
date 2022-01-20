import React, { Component } from "react";
import { Navigate , Link} from "react-router-dom";
import RenderPostTable from "../components/RenderPostTable";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
    return state;
  };
class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            openModal: false,
            postToDelete: {}
        };
        this.openDeleteModal = this.openDeleteModal.bind(this);
    }
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/post/get';
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    posts: result.posts
                })
            })
    }
    openDeleteModal(post) {
        this.setState({ openModal: true })
        this.setState({ postToDelete: post })
    }
    closeModal() {
        this.setState({ openModal: false })
    }
    deletePost() {
        const url = process.env.REACT_APP_SERVERHOST + '/post/delete/' + this.state.postToDelete._id;
        fetch(url, {
            method: 'delete',
            credentials: 'include'
        })
            .then(result => result.json())
            .then(() => {
                let filteredPosts = this.state.posts.filter(post => post._id !== this.state.postToDelete._id)
                this.setState({
                    postToDelete: {},
                    posts: filteredPosts,
                    openModal: false
                })

            })
            .catch(error => {
                alert(error)
            })
    }
    render() {
        if(this.props.user){
            return (

                <main>
                    <ul id="breadcrumb">
                        <li><Link to="/">Startseite</Link></li>
                        <li>Dashboard</li>
                    </ul>
    
                    <div id="container-cms">
                        <div id="div-add-button">
                            <Link to={'/post/create'} className="Link__button--add"><button id="add-button"><p id="plusIcon">+</p></button></Link>
    
                            <p id="btn-lable">Beitrag erstellen</p>
                        </div>
    
    
                        <div id="table-list">
    
                            <div id="table-caption">Alle Beiträge</div>
                            <table>
                                <thead>
                                    <tr>
                                        <th><span id="postName">Name</span></th>
                                        <td><span id="">Kategorie</span></td>
                                        <td><span id="posteDate">Datum</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <RenderPostTable parentOpenModal={this.openDeleteModal} posts={this.state.posts} />
                                </tbody>
    
    
    
    
                            </table>
                        </div>
                    </div>
    
                    {this.state.openModal &&
                        <div className="deleteModal">
                            <div id="bg-Blurred"></div>
                            <div className="deleteModal__div--form">
                                <div className="form__div--warningMessage">
                                    <p className="div__p--1">Willst du den Post </p>
                                    <span className="div__span--postTitle">"{this.state.postToDelete.title}</span>
                                    <p className="div__p--2">unwiederruflich löschen?</p>
                                </div>
                                <div className="deleteModal__div--buttons">
                                    <button className="button__delete" onClick={() => this.deletePost()} >Löschen</button>
                                    <button className="button__cancel" onClick={() => this.closeModal()} >Abbrechen</button>
                                </div>
                            </div>
                        </div>
    
                    }
                </main>
            )
        }
        else{
            return (
                <Navigate replace to="/" />
            )
        }
        
    }
}
export default connect(mapStateToProps)(Dashboard)