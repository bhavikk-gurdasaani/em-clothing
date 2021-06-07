import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import {Switch,Route} from "react-router-dom";
const Hats=()=>(
  <div>
    <h1> Display Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/> 
      
    </div>
  );
}

export default App;
