// December30Page.jsx
import React, { useEffect, useState } from 'react';

const Enero07Page = () => {
  const [audio] = useState(new Audio('/audio/found.mp3'));

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
      <h1 className="title">07 de enero You're my Everything</h1>
      <img src="/07Enero2024.jpg" alt="Imagen de enero 07" />
    </>
  );
};

export default Enero07Page;