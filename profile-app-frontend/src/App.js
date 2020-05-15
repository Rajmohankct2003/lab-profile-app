import React from 'react';
import './App.css';
import {Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        this is main page
      </header>

      <Link to="./login">Login</Link>
      <br />
      <Link to="./signup">Signup</Link>
      <br />

      <Route path="./login" component={Login}></Route>
    </div>
  );
}

export default App;
