import React, { useEffect, useRef } from 'react';

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 20);
    const drops = Array(columns).fill(0);

    const characters = '0010100100101010010010101010101100010010100101001010101';

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Leve ajuste na opacidade
      ctx.fillRect(0, 0, width, height); 

      ctx.fillStyle = '#0F0'; // Cor verde para as letras
      ctx.font = '20px monospace'; 

      drops.forEach((y, index) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = index * 20; 

        ctx.fillText(text, x, y);

        // Reinicia a gota para que ela caia de novo
        if (y > height && Math.random() > 0.975) {
          drops[index] = 0; // Reinicia a gota no topo
        } else {
          drops[index] = y + 20; // Faz a gota cair
        }
      });
    };

    const interval = setInterval(drawMatrix, 100); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', // Mantém o canvas fixo na tela
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        backgroundColor: 'transparent', // Define a cor de fundo para preto
        zIndex: 1, // Coloca o canvas atrás de outros elementos
      }}
    />
  );
};

export default Matrix;