import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import '../../Project.scss';
import './ObamaLegacy.scss';

import imgEnergy1 from './media/obama-climate-cover2-main.gif' 
import imgEnergy2 from './media/obama-cover-master3--trimmed.gif' 
import imgEnergy3 from './media/obama-energy-thumb2b.gif' 
import imgMilitary1 from './media/obama-military-cover2-main.gif' 
import imgMilitary2 from './media/obama-military-thumb1b.gif' 
import imgMilitary3 from './media/obama-military-thumb2b.gif' 
import imgCriminalJustice1 from './media/obama-criminal-justice2-main.gif' 
import imgCriminalJustice2 from './media/obama-cj-thumb2b.gif' 
import imgCriminalJustice3 from './media/obama-cj-thumb1b.gif' 


function ObamaLegacy() {
    return (
      <div className="Project Obama">
        <ProjectHeader />
        <div className="project__body container">
          <div className="project__intro-wrapper">
            <div className="project__intro">
              <h1 className="project__title">Obama's Legacy</h1>
              <h2 className="project__subtitle">Role goes here</h2>
              <div className="container project__info">
                <div className="row">
                  <div className="col-md-7 body-copy">
                    <p>
                      This three-part series of animations discusses Obama's long-term impact in the categories of energy, military strategy, and criminal justice. It aired on HBO over three nights during his final week as POTUS.
                    </p>
                  </div>
                  <div className="col-md-3 start-md-9 note">
                    <p className="note__title">
                      Recognition
                    </p>
                    <ul className="credit-list">
                      <li>Society for News Design Award of Excellence (2017)</li>  
                    </ul>
                    <p className="note__title">
                      Team
                    </p>
                    <ul className="credit-list">
                      <li>Visuals: Kris Cave, Michael Deal, Andrew Macfarlane, Brian McGee, Kenton Powell, Grace Shin</li>  
                      <li>Writing: Reid Cherlin, Taylor Dolven, Allison McCann, Isabella McKinley-Corbo.</li>  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project__content container">
            <section className="row">
              <div className="col-xs-12 note">
                <img src={imgEnergy1} alt="Excerpts from Obama's Energy Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgEnergy2} alt="Excerpts from Obama's Energy Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgEnergy3} alt="Excerpts from Obama's Energy Legacy"></img>
              </div>
              <div className="col-xs-12">
                Play Button Here
              </div>
            </section>
            <section className="row">
              <div className="col-xs-12 note">
                <img src={imgMilitary1} alt="Excerpts from Obama's Military Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgMilitary2} alt="Excerpts from Obama's Military Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgMilitary3} alt="Excerpts from Obama's Military Legacy"></img>
              </div>
              <div className="col-xs-12">
                Play Button Here
              </div>
            </section>
            <section className="row">
              <div className="col-xs-12 note">
                <img src={imgCriminalJustice1} alt="Excerpts from Obama's Criminal Justice Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgCriminalJustice2} alt="Excerpts from Obama's Criminal Justice  Legacy"></img>
              </div>
              <div className="col-xs-6">
                <img src={imgCriminalJustice3} alt="Excerpts from Obama's Criminal Justice  Legacy"></img>
              </div>
              <div className="col-xs-12">
                Play Button Here
              </div>
            </section>
          </div>
        </div>
        <ProjectFooter />
      </div>
    )
  }


export default ObamaLegacy;