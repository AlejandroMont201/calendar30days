// December26Page.jsx
import React, { useEffect, useRef } from 'react';

const December26Page = () => {
  // Utilizamos useRef para acceder al elemento de video
  const videoRef = useRef(null);

  useEffect(() => {
    // Reproduce la música al cargar la página
    const audio = new Audio('/audio/pureima.mp3');
    audio.play();

    // Reinicia la música al finalizar
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });

    // Reproduce el video automáticamente al cargar la página
    videoRef.current.play();

    // Detiene la música y elimina los event listeners al desmontar el componente
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      });
    };
  }, []);

  return (
    <>
      <h1 className="title">26 de Diciembre, te extraño mucho mi amor</h1>
      {/* Añadir un elemento de video en bucle infinito */}
      <video ref={videoRef} width="640" height="360" controls loop>
        <source src="/video/26diciembre.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </>
  );
};

export default December26Page;

