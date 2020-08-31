import React, {Component} from 'react';
import './style.css';
import voltar from './voltar.svg';
import {Link} from 'react-router-dom';
import cartoon from './cartoon.jpg';

export default class ajuda extends Component {
    render(){
        return (
            <div className="conteudo">
                 <div className="cardSobre"> 
                 <img className="imagemCartoon" src={cartoon} />
                  <p>  &nbsp;&nbsp;Se você não se sentir bem, siga as orientações da autoridade de saúde local.<br/>
                      Mas nunca esqueça sua mascara e sempre lave bem as mãos.</p>
                </div>
                <Link to="/inicio"><div className="cardSobre"> 
              <img className="voltar" src={voltar} />
                </div></Link>   
            </div>
        )   
    }
}