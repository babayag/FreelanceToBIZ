import React, { Component } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';

export class About extends Component
{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Button variant="flat" size="xxl">get the eagle</Button>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
}