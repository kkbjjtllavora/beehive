import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { user } from './containers/authentication/store/reducers';
import { profile } from './containers/profile/store/reducers';
import { teamMembers } from './containers/dashboard/store/reducers';
import { investments } from './containers/investments/store/reducers';

const rootReducer = combineReducers({
  user,
  profile,
  teamMembers,
  investments
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
