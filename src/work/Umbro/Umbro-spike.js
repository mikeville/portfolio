import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import './Umbro.scss';

import imgIntro1 from './media/yg-umbro-wireframes-170817-2130--slicing-15.svg' 
import imgIntro2 from './media/yg-umbro-wireframes-170817-2130--slicing-16.svg' 
import imgIntro3 from './media/yg-umbro-wireframes-170817-2130--slicing-17.svg' 
import imgIntro4 from './media/yg-umbro-wireframes-170817-2130--slicing-18.svg' 
import imgInfamousGoal1 from './media/yg-umbro-wireframes-170817-2130--slicing-20.svg' 
import imgInfamousGoal2 from './media/yg-umbro-wireframes-170817-2130--slicing-21.svg' 
import imgInfamousGoal3 from './media/yg-umbro-wireframes-170817-2130--slicing-19.svg' 
import imgInfamousGoal4 from './media/yg-umbro-wireframes-170817-2130--slicing-22.svg' 
// import imgXXX from './media/XXXX' 



function Umbro() {
    return (
      <div className="Project Umbro">
        <ProjectHeader />
        <div className="project__body container">
          <div className="project__intro">
            <h1 className="project__title">Vital Stats for the World Cup in South Africa</h1>
            <h2 className="project__subtitle">Client: Umbro</h2>
            <h2 className="project__subtitle">My role goes here</h2>
            <div className="container project__info">
              <div className="row">
                <div className="col-md-7 body-copy">
                  <p>
                    Umbro covered the World Cup with post-game recaps across their digital channels. They paired their written analysis with this graphic system I designed to visualize game highlights.
                  </p>
                  <p>
                    Something about how I was commissioned.
                  </p>
                  <p>
                    Maybe smaller type: Umbro's final post of the series—a single bird's-eye view of all 64 matches—was the most trafficked post on their blog to that date. In response to the high engagement, Umbro gave away posters of the final graphic.
                  </p>
                </div>
                <div className="col-md-3 start-md-9 note">
                  <p className="note__title">
                    Recognition
                  </p>
                  <ul className="credit-list">
                  <li>“The best visualization of the World Cup” -<a href="https://www.fastcompany.com/1661843/infographic-of-the-day-the-best-visualization-of-the-world-cup-matches" target="_blank">FastCo</a></li>  
                  </ul>
                  <p className="note__title">
                    Published in books
                  </p>
                  <ul className="credit-list">
                    <li><em>Data Visualization: Convey, Clarify, Construct</em> by Do/Work Publishing</li>  
                    <li><em>Data Visualization: A Successful Design Process</em> by Andy Kirk</li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project__content container">
            <section className="row">
              <h3 className="col-xs-12 project__section-title ">
                  How to read these timelines
              </h3>
              <img className="col-xs-12" src={imgIntro1} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro2} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro3} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro4} alt="XXXX"></img>
            </section>
            <section className="row">
              <h3 className="col-xs-12 project__section-title ">
                  How to read these timelines
              </h3>
              <img className="col-xs-12" src={imgInfamousGoal1} alt="XXXX"></img>
              <img className="col-xs-12" src={imgInfamousGoal2} alt="XXXX"></img>
              <img className="col-xs-12" src={imgInfamousGoal3} alt="XXXX"></img>
              <img className="col-xs-12" src={imgInfamousGoal4} alt="XXXX"></img>
            </section>
            <section className="row">
              <h3 className="col-xs-12 project__section-title ">
                  How to read these timelines
              </h3>
              <img className="col-xs-12" src={imgIntro1} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro2} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro3} alt="XXXX"></img>
              <img className="col-xs-12" src={imgIntro4} alt="XXXX"></img>
            </section>
          </div>
        </div>
        <ProjectFooter />
      </div>
    )
  }


export default Umbro;