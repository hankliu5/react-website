import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuContainer from "./MenuContainer";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MenuContainer />, document.getElementById('container'));

registerServiceWorker();
