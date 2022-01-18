import React, { Component } from "react";
import { Link } from 'react-router-dom';
import RenderPostTable from "../components/RenderPostTable";
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
                console.log(result)
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
        return (

            <main>
                <div id="container-cms">
                    <div id="div-add-button">
                        <Link to={'/post/create'} className="nav-link"><button id="add-button"><p id="plusIcon">+</p></button></Link>

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

                    <div id="containerLog">
                        <div id="bg-Blurred"></div>
                        <div id="div-log-form">
                            <p>Willst du den Post: <span>{this.state.postToDelete.title}</span> wirklich löschen?</p>
                            <button onClick={() => this.deletePost()} >Löschen</button>
                            <button onClick={() => this.closeModal()} >Abbrechen</button>
                        </div>
                    </div>

                }
            </main>
        )
    }
}

export default Dashboard