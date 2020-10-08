import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import '../../Project.scss';
import imgRisk from './media/businessweek-photo-risk.jpg' 
import imgTimeline from './media/businessweek-photo-timeline.jpg' 
import imgHeads from './media/businessweek-photo-heads.jpg' 


function Businessweek() {
    return (
      <div className="Project Businessweek">
        <ProjectHeader />
        <div className="project__body contained">
          <div className="project__intro">
            <h1 className="project__title">Businessweek</h1>
            <h2 className="project__subtitle">Data visualization and design</h2>
            <div className="container project__info">
              <div className="row">
                <div className="col-md-7 body-copy">
                  <p>
                    I joined the Businessweek team to lead the research and design of visual news stories for a special issue marking the five-year anniversary of the financial meltdown triggering the Great Recession.
                  </p>
                </div>
                <div className="col-md-3 offset-md-9 note">
                  <p className="note__title">
                    Team
                  </p>
                  <ul className="credit-list">
                    <li>Editor: Josh Tyrangiel</li>  
                    <li>Creative Director: Richard Turley</li>  
                    <li>Design Director: Cynthia Hoffman</li>  
                    <li>Designers and graphics editors: Rob Vargas, Allison McCann, Dorothy Gambrell, Chris Nosenzo, &amp; Evan Applegate.</li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project__content">
            <section>
              <h3 className="project__section-title">
                “Too Contagious to Fail”
              </h3>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 note">
                    <p>
                      A diagram showing the risk each major financial instituion was exposed to by [risk] from each other. Concentrations of longer arrows indicate more counterparty risk exposure.
                    </p>
                  </div>
                  <div className="col-md-9">
                    <img src={imgRisk} alt="Photo of 'Too Contagious to Fail' graphic"></img>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h3 className="project__section-title">
                Key index timelines
              </h3>
              <img src={imgTimeline} alt="Photo of key index timeline graphics"></img>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 note">
                    <p>
                      At the start of each section in the issue—one for each year sinc ethe meltdown—is a stack of graphs showing key economic indexes (GDP, household income, etc.). More of each index is revealed as the issue unfolds.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h3 className="project__section-title">
                “World Leader Roulette”
              </h3>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 note">
                    <p>
                      Designed with Allison McCann
                    </p>
                    <p>
                      The purple in this heatmap shows drops in unemployment from 2007-2013, serving as the stage over which different world leaders come and go (marked by black dots). We figured eye-crops made for a more compelling set of headshots.
                    </p>
                  </div>
                </div>
              </div>
              <img src={imgHeads} alt="Photo of 'World Leader Roulette' graphic"></img>
            </section>
          </div>
        </div>
        <ProjectFooter />
      </div>
    )
  }


export default Businessweek;