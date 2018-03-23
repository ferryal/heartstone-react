import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import CardInfo from './components/CardInfo'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/:cardId" component={CardInfo}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
