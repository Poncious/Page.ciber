import React from 'react';
import './App.css'; 
import cadeadoImg from './cadeado.png';

const App = () => {
  return (
    <div className="App">
      <div className="background" />
        <img src={cadeadoImg} alt="Cadeado" className="image" />

        <h2 className="text">Júlio Pôncio</h2> 
        <div className="text2">Specialist in Cibersecurity</div>

        <div className="nav">
        <div className="nav-item">Home</div>
        <div className="nav-item">Sobre</div>
        <div className="nav-item">Serviços</div>
        <div className="nav-item">Contato</div>
       </div>


       <div className="content">
        <div className="section">Conteúdo da Seção 1</div>
        <div className="section">Conteúdo da Seção 2</div>
        <div className="section">Conteúdo da Seção 3</div>
        <div className="section">Conteúdo da Seção 4</div>
        <div className="section">Conteúdo da Seção 5</div>
      </div>
      </div>
  );
};

export default App;