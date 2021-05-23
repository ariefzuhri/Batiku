import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import  { Redirect } from 'react-router-dom'
const axios = require('axios')

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            success: false,
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    handleSubmit(event) {
        console.log(this.state.email)
        console.log(this.state.password)
        event.preventDefault();
    }

    handleSubmit(event) {
        const url = 'https://batikservice.herokuapp.com/api/login';
        axios.post(url,{
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.config.data);
            this.setState({ success: res.data.success })
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }

    render() {
        if (localStorage.getItem('token') || this.state.success){
            return <Redirect to=''/>
        }

        return (
            <Container style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>           
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}