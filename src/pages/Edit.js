import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import  { Redirect } from 'react-router-dom'
const axios = require('axios')

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state,
            nama: '',
            asal: '',
            makna: '',
            foto: '',
            token: localStorage.getItem('token'),
            success: false,
            idNotFound: false,
            isDelete: false,
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getBatikById(this.state.id);
    }

    getBatikById = (id) => {
        const url = 'https://batikservice.herokuapp.com/api/batiks/' + id;
        axios.get(url,{
            params: {
                token: this.state.token,
            },
        }).then(res => {
            console.log(res)
            this.setState({ nama: res.data.nama });
            this.setState({ asal: res.data.asal });
            this.setState({ makna: res.data.makna });
            this.setState({ foto: res.data.foto });
        }).catch(err => {
            console.log(err);
            this.setState({ idNotFound: true });
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(event) {
        console.log(this.state.nama)
        console.log(this.state.asal)
        console.log(this.state.makna)
        console.log(this.state.foto)
        event.preventDefault();
    }

    handleSubmit(event) {
        const url = 'https://batikservice.herokuapp.com/api/batiks/' + this.state.id;
        axios.put(url,{
            nama: this.state.nama,
            asal: this.state.asal,
            makna: this.state.makna,
            foto: this.state.foto,
            token: this.state.token,
        }).then((res) => {
            console.log(res)
            this.setState({ success: res.data.success });
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }

    handleDelete(event) {
        this.setState({ isDelete: true })
        event.preventDefault();
    }

    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }

        if (this.state.success || this.state.id == null || this.state.idNotFound){
            return <Redirect to=''/>
        }

        if (this.state.isDelete) {
            return <Redirect to={{pathname: '/delete', state: this.state.id}}/>
        }
        
        return (
            <Container style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group controlId="formBasicNama" style={{ width: '300px' }}>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama" name="nama" value={this.state.nama} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicAsal" style={{ width: '300px' }}>
                        <Form.Label>Asal</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan asal" name="asal" value={this.state.asal} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMakna" style={{ width: '300px' }}>
                        <Form.Label>Makna</Form.Label>
                        <Form.Control type="text" as="textarea" rows={3} placeholder="Masukkan makna" name="makna" value={this.state.makna} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicFoto" style={{ width: '300px' }}>
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan url foto" name="foto" value={this.state.foto} onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Simpan
                    </Button>
                    <Button variant="danger" type="submit" onClick={this.handleDelete}>
                        Hapus
                    </Button>
                </Form>
            </Container>
        )
    }
}