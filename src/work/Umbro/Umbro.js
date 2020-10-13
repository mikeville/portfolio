import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import './Umbro.scss';

import imgOnboarding1 from './media/yg-umbro-wireframes-170817-2130--slicing-15.svg' 
import imgOnboarding2 from './media/yg-umbro-wireframes-170817-2130--slicing-16.svg' 
import imgOnboarding3 from './media/yg-umbro-wireframes-170817-2130--slicing-17.svg' 
import imgOnboarding4 from './media/yg-umbro-wireframes-170817-2130--slicing-18b.svg' 
import imgInfamousGoal1 from './media/yg-umbro-wireframes-170817-2130--slicing-20.svg' 
import imgInfamousGoal2 from './media/yg-umbro-wireframes-170817-2130--slicing-21.svg' 
import imgInfamousGoal3 from './media/yg-umbro-wireframes-170817-2130--slicing-19.svg' 
import imgInfamousGoal4 from './media/yg-umbro-wireframes-170817-2130--slicing-22.svg' 
import imgTourney1 from './media/yg-umbro-wireframes-170817-2130--slicing-05(13).svg' 
import imgTourney2 from './media/yg-umbro-wireframes-170817-2130--slicing-06.svg' 
import imgTourney3 from './media/yg-umbro-wireframes-170817-2130--slicing-07.svg' 
import imgTourney4 from './media/yg-umbro-wireframes-170817-2130--slicing-08.svg' 
import imgTourney5 from './media/yg-umbro-wireframes-170817-2130--slicing-09.svg' 
import imgTourney6 from './media/yg-umbro-wireframes-170817-2130--slicing-10.svg' 
import imgTourney7 from './media/yg-umbro-wireframes-170817-2130--slicing-11.svg' 
import imgTourney8 from './media/yg-umbro-wireframes-170817-2130--slicing-12.svg' 
import imgTourney9 from './media/yg-umbro-wireframes-170817-2130--slicing-23.svg' 
import imgTourney10 from './media/yg-umbro-wireframes-170817-2130--slicing-24.svg' 
import imgTourney11 from './media/yg-umbro-wireframes-170817-2130--slicing-25.svg' 
import imgTourney12 from './media/yg-umbro-wireframes-170817-2130--slicing-26.svg' 
import imgTourney13 from './media/yg-umbro-wireframes-170817-2130--slicing-27.svg' 



  class Umbro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Project Umbro">
        <ProjectHeader />
        <div className="project__body">
          <div className="project__intro-wrapper">
            <div className="project__intro container">
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
          </div>


          <div className="project__content">


          {/* <!-- ONBOARDING **************************************** --> */}
            <div class="section section--onboarding">
              <div class="container">
                <div class="row section-title">
                  <div class="col-sm-6 start-sm-3">
                    <div class="section-title__title">
                      <div class="umbro-logo-container">
                        <img src="images/yg-umbro-wireframes-170817-2130--slicing-logo-29.svg"></img>
                      </div>
                      <h3>
                        How to read these timelines
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="row section-body">
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgOnboarding1} alt="XXXX"></img>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgOnboarding2} alt="XXXX"></img>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgOnboarding3} alt="XXXX"></img>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgOnboarding4} alt="XXXX"></img>
                  </div>
                </div>
              </div>      
            </div>

            <div class="section-break">
              <div id="section-break1__teeth"  class="section-break__teeth">
              </div>
            </div>

            {/* <!-- CLASSIC GOALS **************************************** --> */}
            <div class="section">
              <div class="container">
                <div class="row section-title">
                  <div class="col-sm-6 start-sm-3">
                    <div class="section-title__title">
                      <h3>
                        Infamous goals from the tournament
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="row section-body">
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgInfamousGoal4} alt="XXXX"></img>
                    <h6>
                      Portugal hammers North Korea with a 7-0 shutout.
                    </h6>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgInfamousGoal2} alt="XXXX"></img>
                    <h6>
                      While Spain dominates Switzerland all match, the Swiss slip one in for the win.
                    </h6>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgInfamousGoal1} alt="XXXX"></img>
                    <h6>
                      Argentina comes out swinging, but goes unanswered.
                    </h6>
                  </div>
                  <div class="col-xs-12 graphic-container graphic-container--onboarding">
                    <img src={imgInfamousGoal3} alt="XXXX"></img>
                    <h6>
                      After 90 balanced minutes, USA scores with seconds left.
                    </h6>
                  </div>
                </div>
              </div>      
            </div>

            <div class="section-break">
              <div id="section-break2__teeth"  class="section-break__teeth">
              </div>
            </div>


            {/* <!-- ALL GAMES **************************************** --> */}

            <div class="section section--tournament">
              <div class="container">
                <div class="row section-title">
                  <div class="col-sm-6 start-sm-3">
                    <div class="section-title__title">
                      <h3>
                        Every pass, shot, and goal of the World Cup
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="row section-body">

                  <div class="col-xs-12">
                    <div class="row">

                      <div class="col-md-6 subsection">
                        <h5>
                          Group A
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney1} alt="XXXX"></img>
                        </div>
                      </div>


                      <div class="col-md-6 subsection">
                          <h5>
                            Group B
                          </h5>            
                          <div class="col-xs-12 graphic-container graphic-container--group">
                            <img src={imgTourney2} alt="XXXX"></img>
                          </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-xs-12">
                    <div class="row">

                      <div class="col-md-6 subsection">
                        <h5>
                          Group C
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney3} alt="XXXX"></img>
                        </div>
                      </div>


                      <div class="col-md-6 subsection">
                        <h5>
                          Group D
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney4} alt="XXXX"></img>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-xs-12">
                    <div class="row">

                      <div class="col-md-6 subsection">
                        <h5>
                          Group E
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney5} alt="XXXX"></img>
                        </div>
                      </div>

                      <div class="col-md-6 subsection">
                        <h5>
                          Group F
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney6} alt="XXXX"></img>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-xs-12">
                    <div class="row">

                      <div class="col-md-6 subsection">
                        <h5>
                          Group G
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney7} alt="XXXX"></img>
                        </div>
                      </div>

                      <div class="col-md-6 subsection">
                        <h5>
                          Group H
                        </h5>            
                        <div class="graphic-container graphic-container--group">
                          <img src={imgTourney8} alt="XXXX"></img>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-xs-12">
                    <div class="row">

                      <div class="col-md-6 subsection">
                        <h5>
                          Round of 16
                        </h5>            
                        <div class="col-xs-12 graphic-container graphic-container--group">
                          <img src={imgTourney9} alt="XXXX"></img>
                        </div>
                      </div>

                      <div class="col-md-6 subsection tester">
                          <div class="sub-subsection">
                              <h5>
                                Quarter finals
                              </h5>            
                              <div class="graphic-container graphic-container--group">
                                <img src={imgTourney10} alt="XXXX"></img>
                              </div>
                          </div>
                          <div class="sub-subsection">
                              <h5>
                                Semi finals
                              </h5>            
                              <div class="graphic-container graphic-container--group">
                                <img src={imgTourney11} alt="XXXX"></img>
                              </div>

                          </div>
                          <div class="sub-subsection">
                            <h5>
                              Third place
                            </h5>            
                            <div class="col-xs-12 graphic-container graphic-container--group">
                              <img src={imgTourney12} alt="XXXX"></img>
                            </div>
                          </div>

                      </div>
                    </div>

                    <div class="col-xs-12 subsection subsection--final">
                      <div class="row subsection__title">
                        <div class="col-xs-12">
                          <h5>
                            Final
                          </h5>            
                        </div>
                      </div>
                      <div class="row subsection__body">
                        <div class="col-xs-12 graphic-container graphic-container--group">
                          <img src={imgTourney13} alt="XXXX"></img>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>      
            </div>

          </div>
        </div>
        <ProjectFooter />
      </div>
    )
  }
}

export default Umbro;