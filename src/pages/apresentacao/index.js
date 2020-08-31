import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import LineIcon from 'react-lineicons';

export default class sobre extends Component {
    render(){
        return (
            <div className="conteudo">
                <div className="cardApresentacao"> 
                    <h1>Kauã Maia Aquino</h1>
                    <img className="foto" src={"https://avatars3.githubusercontent.com/u/54816886?s=400&u=1b7694797609283d341be598349afe49472b3a55&v=4"} />
                </div>
                <div className="cardSobre"> 
                  <p>  &nbsp;  &nbsp;Projeto Desenvolvido para a aprendizagem da framework React</p>
                  <div className="redesSociais">
                  <a href="https://github.com/kaquino22" target="_blank"><LineIcon name="github-original"/></a>
                  <a href="https://www.instagram.com/kaua.ts/?hl=pt-br" target="_blank"><LineIcon name="instagram-filled"/></a>
                  <a href="https://www.linkedin.com/in/kau%C3%A3-maia-aquino-488a1a198/" target="_blank"><LineIcon name="linkedin-original"/></a>
                  </div>
                </div>
                <div className="Opcoes" >   
            <br></br>
            <Link to="/inicio"> Inicio </Link>
            <br></br>
            <Link  to="/documentacao"> Documentação </Link>
        </div>
            </div>
        )   
    }
}