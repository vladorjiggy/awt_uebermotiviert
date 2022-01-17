import SearchRender from "../components/SearchRender";
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const SearchResult = props => {
  const { search } = useLocation();
  let params = new URLSearchParams(search);
  let query = params.get('q') ?? '';
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const url = process.env.REACT_APP_SERVERHOST + '/post/search';
    const data = {
      searchquery: query
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
        setPosts(result.posts)
      })
  }, [query])
  if (posts.length) {
    return (
      <div>
        <h3>
          Suchergebnisse zu
          <span id="searchWord"> {query}</span>:
        </h3>
        <SearchRender posts={posts} />
      </div>
    )
  }
  else {
    return (
      <div id="container-search" className="negativeSearch">
        <div>
          <p>
            Hmm, leider gab es kein Treffer zu
            <span id="searchWord"> {query}</span>. Hier ist nichts!
          </p>
          <img
            id="article1-img-aboutUs"
            src="/searchNeg.png"
            alt="searchNeg.png"
          />
        </div>

      </div>

    )
  }
}

export default SearchResult