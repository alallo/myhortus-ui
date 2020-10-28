import React from 'react';
import './App.css';
import Login from '../Auth/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Story from '../Story/story';
import { PrivateRoute } from '../Auth/privateRoute';

function App() 
{
  return (

    <Router>
        <PrivateRoute path="/" component={Story} exact />
        <Route path="/login" component={Login} />   
    </Router>
  );
}

export default App;
