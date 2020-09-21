import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './reset.css';
import './App.scss';
import Home from './Home';
import Vcb from './work/vcb/Vcb';
import Whales from './work/whales/Whales';
import Pinterest from './work/pinterest/Pinterest';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/work/vcb/vcb"> <Vcb /> </Route>
      <Route path="/work/whales/whales"> <Whales /> </Route>
      <Route path="/work/pinterest/pinterest"> <Pinterest /> </Route>
    </Router>
  );
}

export default App;
