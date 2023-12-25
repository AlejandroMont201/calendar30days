// December25Page.jsx
import React, { useEffect, useState } from 'react';

const December25Page = () => {
  const [audio] = useState(new Audio('/audio/thecure.mp3'));

  useEffect(() => {
    const playAudio = () => {
      // Reproduce la música cuando hay una interacción del usuario
      audio.play();

      // Reinicia la música al finalizar
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      });

      // Elimina el manejador de eventos después de la primera interacción
      document.removeEventListener('click', playAudio);
    };

    // Agrega un manejador de eventos al documento para la primera interacción del usuario
    document.addEventListener('click', playAudio);

    // Detiene la música cuando el componente se desmonta
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      });

      // Elimina el manejador de eventos al desmontar el componente
      document.removeEventListener('click', playAudio);
    };
  }, [audio]);

  return (
    <>
      <h1 className="title">25 de Diciembre, FELIZ NAVIDAD MI AMOR (la primera de nuestra vida)</h1>
      {/* Añadir un elemento de video en bucle infinito */}
      <video width="640" height="360" controls loop>
        <source src="/video/25diciembre.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      
      <img src="/25diciembre2023.jpg" alt="Imagen de diciembre 25" />

    </>
  );
};

export default December25Page;
