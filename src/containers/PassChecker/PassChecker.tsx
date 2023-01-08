import React from 'react';
import './PassChecker.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {checkResult, remove, result} from "./passCheckerSlice";

const PassChecker = () => {
  const dispatch = useDispatch();
  const digits = useSelector((state: RootState) => state.passChecker.digits);
  const display = useSelector((state: RootState) => state.passChecker.result);
  const passStatus = useSelector((state: RootState) => state.passChecker.checker);

  let displayContent = <p className="display-text">{display.map(() => '*')}</p>;

  if (display.length === 0) {
    displayContent = <p className="display-text">Please enter the password</p>
  }
  if (passStatus !== null) {
    displayContent = <p
      className={passStatus ? "correct display-text" : "wrong display-text"}>{passStatus ? 'Access Granted!' : 'Access Denied!'}</p>
  }

  return (
    <div className="pass-checker">
      <div className="display">{displayContent}</div>
      <div className="buttons-wrapper">
        {digits.map((digit, index) => (
          <div onClick={() => dispatch(result(index))} style={{order: digits[index]}} className="button"
               key={digit}>{digit}</div>
        ))}
        <div onClick={() => dispatch(remove())} className="button remove">{"<"}</div>
        <div onClick={() => dispatch(checkResult())} className="button">E</div>
      </div>
    </div>
  );
};

export default PassChecker;