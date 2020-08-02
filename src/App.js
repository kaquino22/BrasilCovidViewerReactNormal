import React from 'react';
import api from './services/Api';
import Header from './components/Header';
import './style.css'
import Main from './pages/main'
import Footer from './components/Footer'
import Routes from './routes';

const App = () => (
  <div className="App">
  <Header/>
  <Routes/>
  <Footer/>
  </div>
);




export default App;
