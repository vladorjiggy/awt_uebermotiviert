import React, { Component } from "react";
import RegisterButton from "./RegisterButton";


import Registration from './Registration'

class CreateUser extends Component {

    render() {
        return (
            <div className="page-content" id="UserManagement" style={{ background: 'white' }}>
                User Management
              <Registration/>
              <RegisterButton/>

            </div>
        )
    }
}

export default CreateUser