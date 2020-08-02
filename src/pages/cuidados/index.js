import React, {Component} from 'react';
import './style.css';
import voltar from './voltar.svg';
import {Link} from 'react-router-dom';
import mao from './lavamao.jpeg';
import distancia from './distancia.jpg';
import mascara from './mascara.jpg';
import sintomas from './sintomas.png';


export default class cuidados extends Component {
    render(){
        return (
            <div className="conteudo">
                <div className="cardSobre"> 
                 <img className="mao" src={mao} />
                  <p>Lave suas mãos com frequência. Use sabão e água ou álcool em gel.</p>
                </div>
                <div className="cardSobre"> 
                 <img className="mao" src={distancia} />
                  <p>Mantenha uma distância segura de pessoas sem exceção alguma.</p>
                </div>
                <div className="cardSobre"> 
                 <img className="mao" src={mascara} />
                  <p>Use máscara.</p>
                </div>
                <div className="cardSobre"> 
                 <img className="mao" src={sintomas} />
                  <p>Em caso de Febre, tosse, e dificuldade de respirar procure um médico.</p>
                </div>
                <Link to="/"><div className="cardSobre"> 
              <img className="voltar" src={voltar} />
                </div></Link>       
            </div>
        )   
    }
}