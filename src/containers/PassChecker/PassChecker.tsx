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

  let displayContent = <div className="display">{display.map(() => '*')}</div>;

  if (display.length === 0) {
    displayContent = <div className="display">Please enter the password</div>
  }
  if (passStatus !== null) {
    displayContent = <div
      className={passStatus ? "correct display" : "wrong display"}>{passStatus ? 'Access Granted!' : 'Access Denied!'}</div>
  }

  return (
    <div className="pass-checker">
      {displayContent}
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