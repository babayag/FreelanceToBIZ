import React, { Component } from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap';

export class About extends Component
{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src="holder.js/100px270" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col>2  2</Col>
                </Row>
            </Container>
        )
    }
}