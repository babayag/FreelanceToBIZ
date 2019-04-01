import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

export class Home extends Component
{
    render(){
        return(
            <Jumbotron fluid>
                <Col md={4}>
                <h3 className="titleJumbo">FEEL FREE TO BE FREELANCER</h3>
                <h4 className="subtitleJumbo">By Get Money Like an Entrepreneur</h4>
                </Col>
                <Col md={8}></Col>
            </Jumbotron>
        )
    }
}