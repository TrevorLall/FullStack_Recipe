import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import singleRecipe from './pages/SingleRecipe'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes/:slug" component={singleRecipe} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
