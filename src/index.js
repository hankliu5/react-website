import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MenuContainer from "./MenuContainer";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MenuContainer />, document.getElementById('container'));

registerServiceWorker();
