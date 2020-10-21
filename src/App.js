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
import Pollen from './work/Pollen/Pollen';
import ObamaLegacy from './work/ObamaLegacy/ObamaLegacy';
import Statlas from './work/Statlas/Statlas';
import Beatles from './work/Beatles/Beatles';
import Billboard from './work/Billboard/Billboard';
import Umbro from './work/Umbro/Umbro';
import GoogleCreativeLab from './work/GoogleCreativeLab/GoogleCreativeLab';
import Businessweek from './work/Businessweek/Businessweek';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/work/vcb"> <Vcb /> </Route>
      <Route path="/work/trusat"> <Trusat /> </Route>
      <Route path="/work/beautifulnews"> <BeautifulNews /> </Route>
      <Route path="/work/vicenews"> <ViceNews /> </Route>
      <Route path="/work/pinterest"> <Pinterest /> </Route>
      <Route path="/work/splice"> <Splice /> </Route>
      <Route path="/work/whales"> <Whales /> </Route>
      <Route path="/work/rapmatics"> <Rapmatics /> </Route>
      <Route path="/work/pollen"> <Pollen /> </Route>
      <Route path="/work/obamalegacy"> <ObamaLegacy /> </Route>
      <Route path="/work/statlas"> <Statlas /> </Route>
      <Route path="/work/beatles"> <Beatles /> </Route>
      <Route path="/work/billboard"> <Billboard /> </Route>
      <Route path="/work/umbro"> <Umbro /> </Route>
      <Route path="/work/googlecreativelab"> <GoogleCreativeLab /> </Route>
      <Route path="/work/businessweek"> <Businessweek /> </Route>
    </Router>
  );
}

export default App;
