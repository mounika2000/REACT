import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import {ProductProvider} from './components/Context';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
       <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
 