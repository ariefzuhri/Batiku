import axios from "axios";
import { Component } from "react";
import  { Redirect } from 'react-router-dom'

class Logout extends Component{

    constructor(){
        super();
        this.state = { 
            token: localStorage.getItem('token'),
            success: false,
        }
        localStorage.clear();
    }

    componentWillMount(){
        const url = 'https://batikservice.herokuapp.com/api/logout';
        axios.get(url,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            },
            params: {
                token: this.state.token
            },
        }).then(data => {
            console.log(data);
            this.setState({ success: data.data.success });
        }).catch(function (err){
            console.log(err)
            console.log(err.response)
        })
    }

    render(){
        if (this.state.success){
            return <Redirect to=''/>
        } else {
            return (
                <div>Kamu sudah logout</div>
            )
        }
    }
}

export default Logout;