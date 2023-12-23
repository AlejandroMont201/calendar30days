// December23Page.jsx
import React, { useEffect, useState } from 'react';

const December23Page = () => {
  const [audio] = useState(new Audio('/audio/christmastree.mp3'));

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
      <h1 className="title">23 de Diciembre, tu segundo dia en Chile Mi Amor (te extraño)</h1>
      <img src="/23diciembre2023.jpg" alt="Imagen de diciembre 23" />
    </>
  );
};

export default December23Page;
