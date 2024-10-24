import React, { useEffect , useState } from 'react';
import './App.css'; 
import cadeadoImg from './cadeado.png';
import Matrix from './Matrix';
import AboutMe from './AboutMe';
 
const App = () => {
  const [scrolling, setScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setScrolling(true); // Define scrolling como true
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setScrolling(false), 1000); // Reseta scrolling após 1 segundo
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'PageDown' && !scrolling) { // Verifica se não está rolando
        event.preventDefault();
        scrollToSection('about');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrolling]); // Adiciona scrolling como dependência


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
     
      </div>

      <div id="about">
        <AboutMe /> 
      </div>
      
      <div id="services">
        <h2>Serviços</h2>
      
      </div>
      
      <div id="contact">
        <h2>Contato</h2>
      
      </div>
    </div>
  );
};

export default App;