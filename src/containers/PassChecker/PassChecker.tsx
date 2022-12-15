import React from 'react';
import './PassChecker.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {result} from "./passCheckerSlice";

const PassChecker = () => {
  const dispatch = useDispatch();
  const digits = useSelector((state: RootState) => state.passChecker.digits);
  const display = useSelector((state: RootState) => state.passChecker.result);



  return (
    <div className="pass-checker">
      <div className="display">{display}</div>
      <div className="buttons-wrapper">
        {digits.map((digit, index) => (
            <div onClick={() => dispatch(result(index))} className="button" key={digit}>{digit}</div>
        ))}
        <div className="button">clear</div>
        <div className="button">enter</div>
      </div>

    </div>
  );
};

export default PassChecker;