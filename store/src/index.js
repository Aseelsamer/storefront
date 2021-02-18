// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './rtkStore/index';


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//     </Provider>
// ,
//   document.getElementById('root')
// );
// reportWebVitals();

  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './rtkStore/index';

ReactDOM.render(
  
  <Provider store={store}>
    <App />
    </Provider>

,
  document.getElementById('root')
);

reportWebVitals();