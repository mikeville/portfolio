import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './reset.css';
import './App.scss';
import Home from './Home';
import Vcb from './work/Vcb/Vcb';
import Trusat from './work/Trusat/Trusat';
import BeautifulNews from './work/BeautifulNews/BeautifulNews';
import ViceNews from './work/ViceNews/ViceNews';
import Pinterest from './work/Pinterest/Pinterest';
import Splice from './work/Splice/Splice';
import Whales from './work/Whales/Whales';
import Rapmatics from './work/Rapmatics/Rapmatics';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/work/vcb/vcb"> <Vcb /> </Route>
      <Route path="/work/trusat/trusat"> <Trusat /> </Route>
      <Route path="/work/beautifulnews/beautifulnews"> <BeautifulNews /> </Route>
      <Route path="/work/vicenews/vicenews"> <ViceNews /> </Route>
      <Route path="/work/pinterest/pinterest"> <Pinterest /> </Route>
      <Route path="/work/splice/splice"> <Splice /> </Route>
      <Route path="/work/whales/whales"> <Whales /> </Route>
      <Route path="/work/rapmatics/rapmatics"> <Rapmatics /> </Route>

    </Router>
  );
}

export default App;
