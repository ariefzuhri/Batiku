import axios from 'axios';
import React, { Component } from 'react'


export default class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            list:[], 
            token: localStorage.getItem('token')}
    }
    componentWillUnmount(){
        this.setState({token : localStorage.getItem('token')})
        const url= 'https://batikservice.herokuapp.com/api/batiks?token='+this.state.token;
        axios.get(url)
        .then( data  => {
            console.log(data.data);
            this.setState ({list :  data.data})
        })
    }
    render() {
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