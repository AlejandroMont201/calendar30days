// December31Page.jsx
import React, { useEffect, useRef } from 'react';

const December31Page = () => {
  // Utilizamos useRef para acceder al elemento de video
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);
  const videoRef11 = useRef(null);
  const videoRef12 = useRef(null);
  const videoRef13 = useRef(null);
  const videoRef14 = useRef(null);
  const videoRef15 = useRef(null);
  const videoRef16 = useRef(null);
  const videoRef17 = useRef(null);
  const videoRef18 = useRef(null);
  const videoRef19 = useRef(null);
  const videoRef20 = useRef(null);

  useEffect(() => {
    // Reproduce la música al cargar la página
    const audio = new Audio('/audio/changed.mp3');
    audio.play();

    // Reinicia la música al finalizar
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });

    // Reproduce los videos automáticamente al cargar la página
    videoRef1.current.play();
    videoRef2.current.play();

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
      <h1 className="title">31 de Diciembre, último día del año, amor, nuestro primer año juntos </h1>
      {/* Añadir elementos de video en bucle infinito */}
      <video ref={videoRef1} width="640" height="360" controls loop>
        <source src="/video/video31/2.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef2} width="640" height="360" controls loop>
        <source src="/video/video31/3.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef3} width="640" height="360" controls loop>
        <source src="/video/video31/4.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef4} width="640" height="360" controls loop>
        <source src="/video/video31/5.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef5} width="640" height="360" controls loop>
        <source src="/video/video31/6.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef6} width="640" height="360" controls loop>
        <source src="/video/video31/7.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef7} width="640" height="360" controls loop>
        <source src="/video/video31/8.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef8} width="640" height="360" controls loop>
        <source src="/video/video31/9.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef9} width="640" height="360" controls loop>
        <source src="/video/video31/10.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef10} width="640" height="360" controls loop>
        <source src="/video/video31/11.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef11} width="640" height="360" controls loop>
        <source src="/video/video31/12.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef12} width="640" height="360" controls loop>
        <source src="/video/video31/13.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef13} width="640" height="360" controls loop>
        <source src="/video/video31/14.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef14} width="640" height="360" controls loop>
        <source src="/video/video31/15.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef15} width="640" height="360" controls loop>
        <source src="/video/video31/16.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef16} width="640" height="360" controls loop>
        <source src="/video/video31/17.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef17} width="640" height="360" controls loop>
        <source src="/video/video31/18.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef18} width="640" height="360" controls loop>
        <source src="/video/video31/19.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef19} width="640" height="360" controls loop>
        <source src="/video/video31/20.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef20} width="640" height="360" controls loop>
        <source src="/video/video31/21.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <video ref={videoRef20} width="640" height="360" controls loop>
        <source src="/video/31diciembre.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </>
  );
};

export default December31Page;
