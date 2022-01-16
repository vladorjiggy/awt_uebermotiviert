import React, { Component } from "react";
let search = window.location.search;
let params = new URLSearchParams(search);
let searchquery = params.get('q');
class SearchResult extends Component {
  state = {
    posts: []
  };
  componentWillMount() { // vll ComponentDidMount
    const url = process.env.REACT_APP_SERVERHOST + '/post/search'; // endpoint existiert noch nicht
    const data = {
      searchquery: searchquery
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

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
    return (
      <div>
      </div>

    )
  }
}

export default SearchResult;