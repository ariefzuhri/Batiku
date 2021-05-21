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
            console.log(data)
            this.setState({ success: data.data.success })
        })
    }

    render(){
        if (this.state.success){
            localStorage.clear();
            return <Redirect to=''/>
        } else {
            return (
                <div>Kamu sudah logout</div>
            )
        }
    }
}

export default Logout;