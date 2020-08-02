import React, { Component } from 'react';
import api from '../../services/Api';
import './style.css';
import {Link} from 'react-router-dom';


export default class Main extends Component {
    state = {
        brasil: []
    };

    componentDidMount(){
        this.loadDate();
       
    }

    loadDate = async () => {
        const response = await api.get('/brazil')
        
        console.log(response.data.data);
        this.setState({brasil: response.data.data});
    };
   

    render(){
    return (
        <div className="conteudo">
        <div className="DadosBrasil">
            <div className="Titulo"><h1>Brasil</h1></div>  
            <br></br>
            <h3>Casos Confirmados: {this.state.brasil.confirmed}</h3>
            <h3>Novos Casos: {this.state.brasil.cases}</h3>
            <h3>Mortes: {this.state.brasil.deaths}</h3>
            <h3>Recuperados: {this.state.brasil.recovered}</h3>
        </div>
        <div className="Opcoes" >   
            <br></br>
            <Link to="/cuidados"> Cuidados </Link>
            <br></br>
            <Link  to="/ajuda"> Ajuda </Link>
            <br></br>
            <Link to="/sobre"> Quem Somos </Link>
        </div>
        </div>
    )
    }
}

