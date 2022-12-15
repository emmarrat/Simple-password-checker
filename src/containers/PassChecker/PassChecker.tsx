import React from 'react';
import './PassChecker.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {remove, result} from "./passCheckerSlice";

const PassChecker = () => {
  const dispatch = useDispatch();
  const digits = useSelector((state: RootState) => state.passChecker.digits);
  const display = useSelector((state: RootState) => state.passChecker.result);

  console.log(display);

  let displayContent = (<div className="display">{display}</div>);

  if(display.length === 0) {
    displayContent = <div className="display">Please enter the password</div>
  }

  return (
    <div className="pass-checker">
      {displayContent}
      <div className="buttons-wrapper">
        {digits.map((digit, index) => (
            <div onClick={() => dispatch(result(index))} className="button" key={digit}>{digit}</div>
        ))}
        <div onClick={() => dispatch(remove())} className="button">remove</div>
        <div className="button">enter</div>
      </div>

    </div>
  );
};

export default PassChecker;