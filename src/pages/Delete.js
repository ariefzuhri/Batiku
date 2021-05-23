import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
const axios = require('axios')

export default class Delete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state,
            token: localStorage.getItem('token'),
            success: false,
            idNotFound: false,
        };
    }

    componentWillMount(){
        var id = this.state.id;
        const url = 'https://batikservice.herokuapp.com/api/batiks/' + id;
        axios.delete(url,{
            params: {
                token: this.state.token,
            },
        }).then(res => {
            console.log(res)
            this.setState({ success: res.data.success });
        }).catch(err => {
            console.log(err)
            console.log(err.response)
            this.setState({ idNotFound: true });
        })
    }

    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }

        //if (this.state.success || this.state.id == null || this.state.idNotFound){
            return <Redirect to=''/>
        //}
    }
}