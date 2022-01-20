import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/**
 * Pages
 */

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import UeberUns from './pages/UeberUns';
import CreatePost from './pages/CreatePost';
import SearchResult from './pages/SearchResult';
import SinglePost from './pages/SinglePost';
import CategoryPosts from './pages/CategoryPosts';
import EditPost from './pages/EditPost';


/**
 * Components
 */

import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import WrappedComponent from './components/WrappedComponent';

class App extends Component {
  render() {
    const homepage = <HomePage />
    const dashboard = <Dashboard />
    const contact = <Contact />
    const impressum = <Impressum />
    const ueberuns = <UeberUns />
    const singlepost = <SinglePost />
    const createpost = <WrappedComponent component={CreatePost} />
    const editpost = <WrappedComponent component={EditPost}/>
    const categorypost = <CategoryPosts />
    const searchresult = <SearchResult />
    return (
      <div className="page-container">

        <Router>
          <div className="content-wrap">
            <TopMenu />
            <Routes>
              <Route exact path="/" element={homepage} />
              <Route exact path="/dashboard" element={dashboard} />
              <Route exact path="/contact" element={contact} />
              <Route exact path="/impressum" element={impressum} />
              <Route exact path="/ueberuns" element={ueberuns} />
              <Route exact path="/post/single/:post_id" element={singlepost} />
              <Route exact path="/post/create" element={createpost} />
              <Route exact path="/post/edit/:post_id" element={editpost} />
              <Route exact path="/post/category/:category_id" element={categorypost} />
              <Route exact path="/post/search" element={searchresult} />
            </Routes>
          </div>
          <Footer />
        </Router>

      </div>
    );
  }
}
export default App;