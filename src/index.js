import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(<App store={ store }/>, document.getElementById('root'));
registerServiceWorker();
