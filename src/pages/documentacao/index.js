import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import LineIcon from 'react-lineicons';
import voltar from './voltar.svg';

export default class sobre extends Component {
    render(){
        return (
            <div className="conteudo">
                <div className="cardSobre"> 
                  <p>Nesse projeto foi utilizado: <br></br>
                  <a href="https://pt-br.reactjs.org/" target="_blank">React</a>
                  <br></br>
                  <a href="https://lineicons.com/" target="_blank">LineIcons</a>
                  <br></br>
                  <a href="https://github.com/" target="_blank">GitHub</a>
                  <br></br>
                  <a href="https://covid19-brazil-api.now.sh" target="_blank">COVID-19 Brasil API</a>
                  <br></br>
                  <a>Fotos: Google Fotos</a>
                  <br></br>
                  <a>Textos: Google</a>
                  </p>
                </div>
                <Link to="/inicio"><div className="cardSobre"> 
              <img className="voltar" src={voltar} />
                </div></Link> 
            </div>
        )   
    }
}