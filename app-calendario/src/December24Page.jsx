// December24Page.jsx
import React, { useEffect, useRef } from 'react';

const December24Page = () => {
  // Utilizamos useRef para acceder al elemento de video
  const videoRef = useRef(null);

  useEffect(() => {
    // Reproduce la música al cargar la página
    const audio = new Audio('/audio/navidadsin.mp3');
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
      <h1 className="title">24 de Diciembre, día antes de Navidad jsjsj(te extraño mucho)</h1>
      {/* Añadir un elemento de video en bucle infinito */}
      <video ref={videoRef} width="640" height="360" controls loop>
        <source src="/video/24diciembre.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </>
  );
};

export default December24Page;

