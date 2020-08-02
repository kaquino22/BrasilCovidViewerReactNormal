import React, {Component} from 'react';
import './style.css';
import logo from './logo.png';
import facebook from './facebook.png';
import voltar from './voltar.svg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class sobre extends Component {
    render(){
        return (
            <div className="conteudo">
                <div className="cardApresentacao"> 
                    <img src={logo} />
                </div>
                <div className="cardSobre"> 
                  <p>  &nbsp;  &nbsp;LakApp é uma pequena Startup 
                    voltada para Desenvolvimentos Web, Jogos,
                     Músicas, Modelagem 3D, e Designer em Geral, 
                     criada em 2019</p>
                </div>
                <div className="cardSobre"> 
                    Curta no Facebook <br/> <br/>
                     <a target="_blank" href="https://www.facebook.com/LakAppOficial"><img  className="logoFace" src={facebook} /></a>
                </div>  
                <Link to="/"><div className="cardSobre"> 
              <img className="voltar" src={voltar} />
                </div></Link>        
            </div>
        )   
    }
}