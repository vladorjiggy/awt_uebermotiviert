import React, { Component } from "react";

import "../layout/css/style.css";


import Categorymenu from "./CategoryMenu";
import HomeContent from "./HomeContent";
class PublicPage extends Component {

    render() {
        return(
          <div>
            <Categorymenu />
            <HomeContent />
          </div>

        )
    }
}

export default PublicPage;