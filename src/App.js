import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './reset.css';
import './App.scss';
import Home from './Home';
import Project1 from './work/vcb/Vcb';
import Project2 from './work/whales/Whales';
import Project3 from './work/pinterest/Pinterest';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/work/project1"> <Project1 /> </Route>
      <Route path="/work/project2"> <Project2 /> </Route>
      <Route path="/work/project3"> <Project3 /> </Route>
    </Router>
  );
}

export default App;
