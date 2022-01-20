import React, { Component } from "react";
import Categorymenu from "../components/CategoryMenu";
import HomeContent from "../components/HomeContent";

class HomePage extends Component {

    render() {
        return(
          <div>
            <Categorymenu />
            <HomeContent />
          </div>
        )
    }
}

export default HomePage;