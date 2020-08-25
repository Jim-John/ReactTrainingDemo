import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import ClaimsUpdate from './components/claims/ClaimsUpdate.jsx'; 
import ClaimsView from './components/claims/ClaimsView.jsx'; 
import Login from './components/login/Login.jsx';
import App from './components/common/App.jsx';
import Home from './components/common/Home.jsx';
ReactDOM.render(
  
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
  , document.getElementById('root')
); 

