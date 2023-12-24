// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import December21Page from './December21Page';
import December22Page from './December22Page';
import December23Page from './December23Page';
import December24Page from './December24Page';

const Home = () => (
  <>
    <h1 className="title">Calendario para Ariel</h1>
    <h1 className="title">TE AMUU</h1>
    <div className="cards-container">{renderButtons()}</div>
    <div className="card"></div>
  </>
);

const DecemberPage = () => (
  <>
    <h1 className="title">Contenido de diciembre</h1>
    {/* Agrega aquí el contenido específico de diciembre */}
  </>
);

const JanuaryPage = () => (
  <>
    <h1 className="title">Contenido de enero</h1>
    {/* Agrega aquí el contenido específico de enero */}
  </>
);

const renderButtons = () => {
  const buttons = [];

  for (let i = 21; i <= 51; i++) {
    const buttonStyle = i % 2 === 0 ? 'purple' : 'blue';

    buttons.push(
      <div key={i} className="button-container">
        {i === 21 ? (
          <Link to={`/december/${i}`}>
            <button className={`heart ${buttonStyle}`}>
              {i}
            </button>
          </Link>
        ) : (
          <Link to={i <= 31 ? `/december/${i}` : `/january/${i - 31}`}>
            <button className={`heart ${buttonStyle}`}>
              {i <= 31 ? i : i - 31}
            </button>
          </Link>
        )}
        <p className={i <= 31 ? 'december-text' : 'january-text'}>
          {i <= 31 ? 'Diciembre' : 'Enero'}
        </p>
      </div>
    );
  }

  return buttons;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/december/:day" element={<DecemberPage />} />
      <Route path="/january/:day" element={<JanuaryPage />} />
      <Route path="/december/21" element={<December21Page />} />
      <Route path="/december/22" element={<December22Page />} />
      <Route path="/december/23" element={<December23Page />} />
      <Route path="/december/24" element={<December24Page />} />
    </Routes>
  </Router>
);

export default App;
