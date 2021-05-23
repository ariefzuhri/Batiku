import axios from 'axios';
import React, { Component } from 'react'
import { Card,  Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import CarouselContainer from '../Component/CarouselContainer';
import '../App.css';

export default class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            list:[], 
            token: localStorage.getItem('token')
        }
        console.log(localStorage.getItem('token'));
    }

    componentWillMount(){
        const url= 'https://batikservice.herokuapp.com/api/batiks';
        axios.get(url, {
            params: {
                token: this.state.token,
            },
        }).then( data  => {
            console.log(data.data);
            this.setState ({list: data.data})
        })
    }

    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }

        return(
            <div>
                <Jumbotron>
                <CarouselContainer/>
                    <Container>
                    <h1>Macam Batik Indonesia</h1><br></br>
                        <Row>
                            {this.state.list.map((dinamis, key) => {
                                return(
                                        <Col lg={3}>
                                            <Card key={dinamis.id}>
                                                <Card.Img key={dinamis.foto} style={{width: '100%'}} src={dinamis.foto}/>
                                                <Card.Body>
                                                    <Card.Title>{dinamis.nama}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted" > Asal : {dinamis.asal}</Card.Subtitle>
                                                    <Card.Text>{dinamis.makna}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>)
                                    })}
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}