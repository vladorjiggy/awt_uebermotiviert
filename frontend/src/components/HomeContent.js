import React, { Component } from "react";

class HomeContent extends Component {
    state = {
        posts: []
    };
    routeToSingle(id){
        console.log(id)
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
    render() {
        if(this.state.posts.length){
            return (
            
                <main>
                    <div id="container1-index">
                        <article id="article1-section1-index">
                            <button id="category-name">{this.state.posts[0].categories[0].name}</button>
                            <img
                                id="article1-img-index"
                                src={this.state.posts[0].post_image}
                                alt={this.state.posts[0].post_image}
                            />
                        </article>
    
                        <article id="article1-section1-index">
                            <h3 id="article1-headline-index">{this.state.posts[0].title}</h3>
                            <p id="article1-text-index">
                                {this.state.posts[0].content}
                            </p>
                            <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[0]._id) }}>Erfahre mehr...</a>
                        </article>
                    </div>
    
                    {this.state.posts.length > 1 &&
                        <div>
                            <div id="container2">
                                <div id="con2-1">
                                    <article id="article2-section1">
                                        <button id="category-name">{this.state.posts[1].categories[0].name}</button>
                                        <img
                                            id="article2-img"
                                            src={this.state.posts[1].post_image}
                                            alt={this.state.posts[1].post_image}
                                        />
                                    </article>
    
                                    <article id="article2-section2">
                                        <h3 id="article2-headline">{this.state.posts[1].title}</h3>
                                        <p id="article2-text">
                                        {this.state.posts[1].content}
                                        </p>
                                        <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[1]._id) }}>Erfahre mehr...</a>
                                    </article>
                                </div>
                                {this.state.posts.length > 2 && 
                                    <div id="con2-2">
                                    <article id="article2-section1">
                                        <button id="category-name">{this.state.posts[2].categories[0].name}</button>
                                        <img
                                            id="article2-img"
                                            src={this.state.posts[2].post_image}
                                            alt={this.state.posts[2].post_image}
                                        />
                                    </article>
    
                                    <article id="article2-section2">
                                        <h3 id="article2-headline">{this.state.posts[2].title}</h3>
                                        <p id="article2-text">
                                        {this.state.posts[2].content}
                                        </p>
                                        <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[2]._id) }}>Erfahre mehr...</a>
                                    </article>
                                </div>
                                }
                                
                            </div>
                            {this.state.posts.length > 3 && 
                                <div id="container3">
                                <div id="con3-1">
                                    <article id="article3-section1">
                                        <button id="category-name">{this.state.posts[3].categories[0].name}</button>
                                        <img
                                            id="article3-img"
                                            src={this.state.posts[3].post_image}
                                            alt={this.state.posts[3].post_image}
                                        />
                                    </article>
    
                                    <article id="article3-section2">
                                        <h3 id="article3-headline">{this.state.posts[3].title}</h3>
                                        <p id="article3-text">
                                        {this.state.posts[3].content}
                                        </p>
                                        <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[3]._id) }}>Erfahre mehr...</a>
                                    </article>
                                </div>
                                {this.state.posts.length > 4 && 
                                    <div id="con3-2">
                                    <article id="article3-section1">
                                        <button id="category-name">{this.state.posts[4].categories[0].name}</button>
                                        <img
                                            id="article3-img"
                                            src={this.state.posts[4].post_image}
                                            alt={this.state.posts[4].post_image}
                                        />
                                    </article>
    
                                    <article id="article3-section2">
                                        <h3 id="article3-headline">{this.state.posts[4].title}</h3>
                                        <p id="article3-text">
                                        {this.state.posts[4].content}
                                        </p>
                                        <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[4]._id) }}>Erfahre mehr...</a>
                                    </article>
                                </div>
                                }
                                {this.state.posts.length > 5 && 
                                    <div id="con3-3">
                                    <article id="article3-section1">
                                        <button id="category-name">{this.state.posts[5].categories[0].name}</button>
                                        <img
                                            id="article3-img"
                                            src={this.state.posts[5].post_image}
                                            alt={this.state.posts[5].post_image}
                                        />
                                    </article>
    
                                    <article id="article3-section2">
                                        <h3 id="article3-headline">{this.state.posts[5].title}</h3>
                                        <p id="article3-text">
                                        {this.state.posts[5].content}
                                        </p>
                                        <a id="read-more-link" onClick={() => { this.routeToSingle(this.state.posts[5]._id) }}>Erfahre mehr...</a>
                                    </article>
                                </div>
                                }
    
                                
                            </div>
                            }
                            
                        </div>
    
                    }
    
                </main>
    
            );
        }
        else{
            return (
                <div></div>
            );
        }
        
    }
}
export default HomeContent