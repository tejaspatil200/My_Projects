import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import 'bootstrap/dist/js/bootstrap.js'
import store from './store';
import App2 from './App2';

ReactDOM.render( 
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render( 
 
    <React.StrictMode>
    <App2/>
  </React.StrictMode>,
 
  document.getElementById('root2')
);


reportWebVitals();
