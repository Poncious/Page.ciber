import React, { useEffect , useState } from 'react';
import './App.css'; 
import cadeadoImg from './cadeado.png';
import besouroImg from "./besouro.png"
import Matrix from './Matrix';
import AboutMe from './AboutMe';

 
const App = () => {
  const [scrolling, setScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setScrolling(true); 
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setScrolling(false), 1000); 
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'PageDown' && !scrolling) { 
        event.preventDefault();
        scrollToSection('about');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrolling]); 


  return (
    <div className="App">
      <Matrix /> 
      <div className="background" />
      <div className="matrix-effect" />
      <img src={cadeadoImg} alt="Cadeado" className="image" />

      <h2 className="text">Júlio Pôncio</h2> 
      <div className="text2">Specialist in Cibersecurity</div>

      <div className="nav">
        <div className="nav-item" onClick={() => scrollToSection('home')}>Home</div>
        <div className="nav-item" onClick={() => scrollToSection('about')}>Sobre</div>
        <div className="nav-item" onClick={() => scrollToSection('services')}>Serviços</div>
        <div className="nav-item" onClick={() => scrollToSection('contact')}>Contato</div>
      </div>

      <div id="home">
  <h1>Bem-vindo à minha página!</h1>
  <p>Conteúdo adicional para permitir a rolagem...</p>
      </div>

      <div id="about">
        <AboutMe /> 
      </div>
      
      <div id="services">
        <h2>Serviços</h2>
        <img src={besouroImg} alt="Descrição da imagem" className="service-image" />

      </div>
      
      <div id="contact">
        <h2>Contato</h2>
      
      </div>
    </div>
  );
};

export default App;