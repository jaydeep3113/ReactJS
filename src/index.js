import React from 'react';
import ReactDOM from 'react-dom';
import FirstClass from './component/firstClass';
import SecondClass from './component/secondClass';
import SimpleCalc from './component/Asgn1/simpleCalc';
import Calc1 from './component/Asgn2/calc1';
import Calc3 from './component/Asgn3/calc3';
import Mapper from './component/Asgn3/mapper';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Mapper/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
