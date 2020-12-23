import React from 'react';
import { Suspense, lazy } from 'react';

import {Helmet} from "react-helmet";

import './Trusat.scss';

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';


import TrusatOverview from "./TrusatOverview"


const TrusatResearch = React.lazy(() => import('./TrusatResearch'));
const TrusatApp = React.lazy(() => import('./TrusatApp'));



class Trusat extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

componentDidMount() {
  window.scrollTo(0, 0);
}

render() {
  return (
    <div className="Project Trusat">
      <Helmet>
        <title>Mike Deal: TruSat design case study</title>
      </Helmet>
      <ProjectHeader />
      <div className="project__body">
        <div className="project__intro-wrapper container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="project__title">TruSat</h1>
              <h2 className="project__subtitle">Creative direction, product design</h2>
            </div>
          </div>
          <div className="project__info row">
            <div className="col-md-7 body-copy">
              <p>
                <a href="https://trusat.org/" target="_blank">TruSat</a> is a citizen-powerd satellite catalog, enabling backyard astronomers to help improve the transparency and sustainability of space operations. I was responsible for the product’s design and brand, while contributing to its strategy and development.
              </p>
              <p>
                Below is a product design case study.
              </p>
            </div>
            <div className="col-xs-10 col-md-3 start-md-9 note">
              <p className="note__title">
                Team
              </p>
              <ul className="credit-list">
                <li>Co-founder: Chris Lewicki</li>  
                <li>Co-founder, legal counsel: Brian Israel</li>  
                <li>Lead designer: Mike Deal</li>  
                <li>Community manager: Kim Macharia</li>  
                <li>Product manager: Robert Keenan</li>  
                <li>Lead frontend developer: John Gribbin</li>  
                <li>Lead backend engineer: Kenan O'Neal</li>  
                <li>Illustrations: Louis Wes</li>  
                <li>Benefactor: Joseph Lubin</li>  
              </ul>
            </div>
          </div>
        </div>
        <TrusatOverview />
        <Suspense fallback={<div>Loading...</div>}>
          <TrusatResearch />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TrusatApp />
        </Suspense>
      </div>
      <ProjectFooter />
    </div>
    )
  }
}

export default Trusat;


