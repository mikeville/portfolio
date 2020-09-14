import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './reset.css';
import './App.css';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/project1"> <Project1 /> </Route>
      <Route path="/project2"> <Project2 /> </Route>
      <Route path="/project3"> <Project3 /> </Route>
    </Router>
  );
}

export default App;
