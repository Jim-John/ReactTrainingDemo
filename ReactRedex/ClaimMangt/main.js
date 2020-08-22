import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import ClaimsUpdate from './components/claims/ClaimsUpdate.jsx'; 
import ClaimsView from './components/claims/ClaimsView.jsx'; 
import Header from './components/common/Header.jsx';
import FooterComponent from './components/common/FooterComponent.jsx';
import Navigation from './components/common/Navigation.jsx'; 
import Success from  './components/common/Success.jsx';
import Login from './components/login/Login.jsx';
import App from './components/common/App.jsx';
import Home from './components/common/Home.jsx';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import loggedInIndicatorReducer from './reducers/loggedInIndicator.jsx';
import loggedInNameReducer from './reducers/loggedInName.jsx';
import claimViewReducer from './reducers/ClaimViewReducer.jsx';
const allReducers=combineReducers(
    {
        
        loggedInNameReducer:loggedInNameReducer,
        loggedInIndicatorReducer:loggedInIndicatorReducer,
        claimViewReducer:claimViewReducer
    }
)
const store=createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
store.subscribe(()=> console.log("store updated==>"+JSON.stringify(store.getState())));
ReactDOM.render(


  <Provider store={store}>
  
    <div>
  <Router history = {browserHistory}>
  <Route path = "/" component = {App}>
         <IndexRoute component = {Login} />
         <Route path = "home" component = {Home} />
         <Route path = "claim" component = {ClaimsView} />
         <Route path = "updateclaim/:claimId" component = {ClaimsUpdate} />
         <Route path = "login" component = {Login} />
   </Route>
 </Router>
   </div>
   </Provider>
  , document.getElementById('root')
); 

