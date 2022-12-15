import React from 'react';
import './PassChecker.css';

const PassChecker = () => {

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="pass-checker">
      <div className="display">results</div>
      <div className="buttons-wrapper">
        {digits.map((digit) => (
            <div className="button" key={digit}>{digit}</div>
        ))}
        <div className="button">clear</div>
        <div className="button">0</div>
        <div className="button">enter</div>
      </div>

    </div>
  );
};

export default PassChecker;