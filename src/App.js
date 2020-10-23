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

//test

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/vcb"> <Vcb /> </Route>
      <Route path="/trusat"> <Trusat /> </Route>
      <Route path="/beautifulnews"> <BeautifulNews /> </Route>
      <Route path="/vicenews"> <ViceNews /> </Route>
      <Route path="/pinterest"> <Pinterest /> </Route>
      <Route path="/splice"> <Splice /> </Route>
      <Route path="/whales"> <Whales /> </Route>
      <Route path="/rapmatics"> <Rapmatics /> </Route>
      <Route path="/pollen"> <Pollen /> </Route>
      <Route path="/obamalegacy"> <ObamaLegacy /> </Route>
      <Route path="/statlas"> <Statlas /> </Route>
      <Route path="/beatles"> <Beatles /> </Route>
      <Route path="/billboard"> <Billboard /> </Route>
      <Route path="/umbro"> <Umbro /> </Route>
      <Route path="/googlecreativelab"> <GoogleCreativeLab /> </Route>
      <Route path="/businessweek"> <Businessweek /> </Route>
    </Router>
  );
}

export default App;
