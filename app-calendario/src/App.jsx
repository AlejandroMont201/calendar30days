// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import December21Page from './December21Page';
import December22Page from './December22Page';
import December23Page from './December23Page';
import December24Page from './December24Page';
import December25Page from './December25Page';
import December26Page from './December26Page';
import December27Page from './December27Page';
import December28Page from './December28Page';
import December29Page from './December29Page';
import December30Page from './December30Page';
import December31Page from './December31Page';
import January01Page from './January01Page';
import January02Page from './January02Page';
import January03Page from './January03Page';
import January04Page from './January04Page';
import January05Page from './January05Page';
import January06Page from './January06Page';
import January07Page from './January07Page';
import January08Page from './January08Page';
import January09Page from './January09Page';
import January10Page from './January10Page';

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

  for (let i = 21; i <= 41; i++) {
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
      <Route path="/december/25" element={<December25Page />} />
      <Route path="/december/26" element={<December26Page />} />
      <Route path="/december/27" element={<December27Page />} />
      <Route path="/december/28" element={<December28Page />} />
      <Route path="/december/29" element={<December29Page />} />
      <Route path="/december/30" element={<December30Page />} />
      <Route path="/december/31" element={<December31Page />} />
      <Route path="/january/1" element={<January01Page />} />
      <Route path="/january/2" element={<January02Page />} />
      <Route path="/january/3" element={<January03Page />} />
      <Route path="/january/4" element={<January04Page />} />
      <Route path="/january/5" element={<January05Page />} />
      <Route path="/january/6" element={<January06Page />} />
      <Route path="/january/7" element={<January07Page />} />
      <Route path="/january/8" element={<January08Page />} />
      <Route path="/january/9" element={<January09Page />} />
      <Route path="/january/10" element={<January10Page />} />
    </Routes>
  </Router>
);

export default App;