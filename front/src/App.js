import React from 'react';
import './App.css';

import './bootstrap.min.css';
import List from './component/users/list'
import Add from './component/users/add'

import Edit from './component/users/edit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/header';
import Home from './component/Home';

function App() {
  return (
   
    <Router>
    <div>
    <Header/>
      <Switch>
      <Route exact path="/" component={Home}>
         <Home/>
        </Route>
        <Route exact path="/users">
         <List/>
        </Route>
        <Route render={(props) =>  <Add {...props} />} path="/add">
         
        </Route>
        <Route render={(props) =>  <Edit {...props} />} path="/edit/:id" >
           
        </Route>

      </Switch>
    </div>
  </Router>
   );
}

export default App;
