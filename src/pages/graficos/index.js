import React, {Component} from 'react';
import './style.css';
import voltar from './voltar.svg';
import {Link} from 'react-router-dom';



export default class cuidados extends Component {
    render(){
        return (
            <div className="conteudo">
                <div className="cardSobre">  
                  <p>Lave suas mãos com frequência. Use sabão e água ou álcool em gel.</p>
                </div>  
                <Link to="/"><div className="cardSobre"> 
              <img className="voltar" src={voltar} />
                </div></Link>       
            </div>
        )   
    }
}