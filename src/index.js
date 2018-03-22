import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
