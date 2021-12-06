import React from 'react';
import './App.css';
import PublicPage from './components/publicPage';

import TopMenu from './components/TopMenu';


function App() {
  return (
    <div className="App">
      <TopMenu />
      <PublicPage/>
    
    </div>
  );
}


export default App