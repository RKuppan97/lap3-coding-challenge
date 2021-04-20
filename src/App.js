import React from 'react'
import { Header } from './components'
import { Home, Results } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App(){
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </>
    );
  
  };

export default App