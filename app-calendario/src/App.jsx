import React from 'react';
import './App.css';

function App() {
  const generateButtonStyle = (index) => {
    return index % 2 === 0 ? 'purple' : 'blue';
  };

  const renderButtons = () => {
    const buttons = [];

    for (let i = 21; i <= 51; i++) {
      const buttonStyle = generateButtonStyle(i - 21);
      const buttonText = i <= 31 ? `Diciembre` : `Enero`;
      const buttonTextStyle = i <= 31 ? 'december-text' : 'january-text';

      buttons.push(
        <div key={i} className="button-container">
          <button className={`heart ${buttonStyle}`}>
            {i <= 31 ? i : i - 31}
          </button>
          <div className={buttonTextStyle}>{buttonText}</div>
        </div>
      );
    }

    return buttons;
  };

  return (
    <>
      <h1 className="title">Calendario para Ariel</h1>
      <h1 className="title">TE AMUU</h1>
      <div className="cards-container">{renderButtons()}</div>
      <div className="card"></div>
    </>
  );
}

export default App;
