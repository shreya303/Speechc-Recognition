import React from "react";
import Dictaphone from './dictaphoneSetup.js';
import Home from './Home';
import About from './About';
import Time from './Time';
import Speech from './Speech';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/dictaphone" component={Dictaphone}/>
      <Route exact path="/time" component={Time}/>
      <Route exact path="/speech" component={Speech}/>

    </div>
  );
}

export default App;
