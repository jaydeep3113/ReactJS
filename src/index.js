import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCalc from './component/Asgn1/simpleCalc';
import FirstClass from './component/firstClass';
import SecondClass from './component/secondClass';
import Calc1 from './component/Asgn2/calc1';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Calc1/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
