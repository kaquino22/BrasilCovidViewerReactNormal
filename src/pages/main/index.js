import React, { Component } from 'react';
import api from '../../services/Api';
import './style.css';
import {Link} from 'react-router-dom';
import brasil from './brasil.png';



export default class Main extends Component {
    state = {
        brasil: [],
        confirmados:0,
        casos:0,
        mortos:0,
        recuperados:0,
        data:'00-00-0000'
    };
    
    componentDidMount(){
        this.loadDate();
       
    }

    loadDate = async () => {
        const response = await api.get('/brazil')
        const brasil = response.data.data;

        var dataAtualizacao = new Date(brasil.updated_at);
        var opcoesData = { 
               day:    '2-digit', 
               month:  '2-digit', 
               year:   'numeric',
               hour:   '2-digit', 
               minute: '2-digit',
              
        };
        var dataFormatada = dataAtualizacao.toLocaleDateString('pt-BR', opcoesData);
        dataFormatada = dataFormatada.replace(',', '');

        this.setState({data: dataFormatada});
        this.setState({confirmados: brasil.confirmed.toLocaleString('pt-BR') });
        this.setState({casos: brasil.cases.toLocaleString('pt-BR') });
        this.setState({mortos: brasil.deaths.toLocaleString('pt-BR') });
        this.setState({recuperados: brasil.recovered.toLocaleString('pt-BR') });
    };
   

    render(){
    return (
        <div className="conteudo">
        <div className="DadosBrasil">
            <div className="Titulo">
                <h1>Brasil</h1>
                <br></br>
                <img className="bandeira" src={brasil} />
                <br></br>
            </div>  
            <br></br>
            <h3>Casos Confirmados: {this.state.confirmados}</h3>
            <h3>Novos Casos: {this.state.casos}</h3>
            <h3>Mortes: {this.state.mortos}</h3>
            <h3>Recuperados: {this.state.recuperados}</h3>
            <h3>Data: {this.state.data}</h3>
        </div>
        <div className="Opcoes" >   
            <br></br>
            <Link to="/cuidados"> Cuidados </Link>
            <br></br>
            <Link  to="/ajuda"> Ajuda </Link>
            <br></br>
            <Link to="/sobre"> Quem Somos </Link>
            <br></br>
            <Link to="/documentacao">  Documentação </Link>
        </div>
        </div>
    )
    }
}

