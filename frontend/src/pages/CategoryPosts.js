import React, { Component } from "react";
import withRouter from "../helpers/withRouter";
import { Link } from "react-router-dom"
import SearchRender from "../components/SearchRender";

class CategoryPosts extends Component {
    state = {
        posts: [],
        categoryName: ""
    };
    componentDidMount() {
        const url = process.env.REACT_APP_SERVERHOST + '/category/get/' + this.props.params.category_id;
        fetch(url, {
            method: 'get',

        })
            .then(result => result.json())
            .then(result => {
                console.log("result: ", result)
                this.setState({
                    posts: result.category.posts,
                    categoryName: result.category.name
                })
            })
    }
    render() {
        if (this.state.posts.length) {
            return (

                <main>
                    <ul id="breadcrumb">
                        <li><Link to="/">Startseite</Link></li>
                        <li>{this.state.categoryName}</li>
                    </ul>

                    <SearchRender posts={this.state.posts} categoryName={this.state.categoryName} />

                    {/*<div class="container1__post" id="container1-index">
                        <article id="article1-section1-index">
                            <button id="category-name">{this.state.categoryName}</button>
                            <img
                                id="article1-img-index"
                                src={this.state.posts[0].post_image}
                                alt={this.state.posts[0].post_image}
                            />
                        </article>

                        <article id="article1-section1-index">
                            <h3 id="article1-headline-index">{this.state.posts[0].title}</h3>
                            <p class="cut-text" id="article1-text-index">
                                {this.state.posts[0].content}
                            </p>
                            <Link id="read-more-link" to={"/post/single/" + this.state.posts[0]._id}>...</Link>
                        </article>
                    </div>

                    {this.state.posts.length > 1 &&
                        <div>
                            <div id="container2">
                                <div class="container2__post" id="con2-1">
                                    <article id="article2-section1-index">
                                        <button id="category-name">{this.state.categoryName}</button>
                                        <img
                                            id="article2-img"
                                            src={this.state.posts[1].post_image}
                                            alt={this.state.posts[1].post_image}
                                        />
                                    </article>

                                    <article id="article2-section2">
                                        <h3 id="article2-headline">{this.state.posts[1].title}</h3>
                                        <p class="cut-text" id="article2-text">
                                            {this.state.posts[1].content}
                                        </p>
                                        <Link id="read-more-link" to={"/post/single/" + this.state.posts[1]._id}>...</Link>
                                    </article>
                                </div>
                                {this.state.posts.length > 2 &&
                                    <div class="container2__post" id="con2-2">
                                        <article id="#article2-section1-index">
                                            <button id="category-name">{this.state.categoryName}</button>
                                            <img
                                                id="article2-img"
                                                src={this.state.posts[2].post_image}
                                                alt={this.state.posts[2].post_image}
                                            />
                                        </article>

                                        <article id="article2-section2">
                                            <h3 id="article2-headline">{this.state.posts[2].title}</h3>
                                            <p class="cut-text" id="article2-text">
                                                {this.state.posts[2].content}
                                            </p>
                                            <Link id="read-more-link" to={"/post/single/" + this.state.posts[2]._id}>...</Link>
                                        </article>
                                    </div>
                                }

                            </div>
                            {this.state.posts.length > 3 &&
                                <div id="container3">
                                    <div class="container3__post" id="con3-1">
                                        <article id="article3-section1">
                                            <button id="category-name">{this.state.categoryName}</button>
                                            <img
                                                id="article3-img"
                                                src={this.state.posts[3].post_image}
                                                alt={this.state.posts[3].post_image}
                                            />
                                        </article>

                                        <article id="article3-section2">
                                            <h3 id="article3-headline">{this.state.posts[3].title}</h3>
                                            <p class="cut-text" id="article3-text">
                                                {this.state.posts[3].content}
                                            </p>
                                            <Link id="read-more-link" to={"/post/single/" + this.state.posts[3]._id}>...</Link>
                                        </article>
                                    </div>
                                    {this.state.posts.length > 4 &&
                                        <div class="container3__post" id="con3-2">
                                            <article id="article3-section1">
                                                <button id="category-name">{this.state.categoryName}</button>
                                                <img
                                                    id="article3-img"
                                                    src={this.state.posts[4].post_image}
                                                    alt={this.state.posts[4].post_image}
                                                />
                                            </article>

                                            <article id="article3-section2">
                                                <h3 id="article3-headline">{this.state.posts[4].title}</h3>
                                                <p class="cut-text" id="article3-text">
                                                    {this.state.posts[4].content}
                                                </p>
                                                <Link id="read-more-link" to={"/post/single/" + this.state.posts[4]._id}>...</Link>
                                            </article>
                                        </div>
                                    }
                                    {this.state.posts.length > 5 &&
                                        <div class="container3__post" id="con3-3">
                                            <article id="article3-section1">
                                                <button id="category-name">{this.state.categoryName}</button>
                                                <img
                                                    id="article3-img"
                                                    src={this.state.posts[5].post_image}
                                                    alt={this.state.posts[5].post_image}
                                                />
                                            </article>

                                            <article id="article3-section2">
                                                <h3 id="article3-headline">{this.state.posts[5].title}</h3>
                                                <p class="cut-text" id="article3-text">
                                                    {this.state.posts[5].content}
                                                </p>
                                                <Link id="read-more-link" to={"/post/single/" + this.state.posts[5]._id}>...</Link>
                                            </article>
                                        </div>
                                    }


                                </div>
                            }

                        </div>

                    }*/}

                </main>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default withRouter(CategoryPosts);