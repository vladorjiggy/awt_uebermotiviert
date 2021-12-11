import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
class PrivatePage extends Component {

    render() {
        return (
            <div className="page-content" id="PrivatePage" style={{ background: 'white' }}>
                Priv Page

                <ListGroup horizontal>
                    <ListGroup.Item>This</ListGroup.Item>
                    <ListGroup.Item>ListGroup</ListGroup.Item>
                    <ListGroup.Item>renders</ListGroup.Item>
                    <ListGroup.Item>horizontally!</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default PrivatePage