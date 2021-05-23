import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
                <h1>Batik Interface</h1>
                {this.state.list.map((dinamis, key) => {
                    return(
                    <div key={dinamis.id}>
                        <h1>{dinamis.nama}</h1>
                        <p>{dinamis.asal}</p>
                        <p>{dinamis.makna}</p>
                        <img key={dinamis.foto} src={dinamis.foto}/>
                    </div>
                    )
                })}
            </div>
        )
    }
}