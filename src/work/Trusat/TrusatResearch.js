import React from 'react';

import TrusatCanvas from "./TrusatCanvas"

import './Trusat.scss';

import imgDiagramProblem1 from './media/trusat-concept-diagrams-201201-14.jpg' 
import imgDiagramProblem1Mobile from './media/trusat-user_research-diagrams-201204-13.jpg' 
import imgDiagramProblem2 from './media/trusat-concept-diagrams-201201-15.jpg' 
import imgDiagramProblem2Mobile from './media/trusat-user_research-diagrams-201204-14.jpg' 
import imgDiagramProblem3 from './media/trusat-concept-diagrams-201201-16.jpg' 
import imgDiagramProblem3Mobile from './media/trusat-user_research-diagrams-201204-15.jpg' 
import imgDiagramHypothesis1 from './media/trusat-concept-diagrams-201201-17.jpg' 
import imgDiagramHypothesis2 from './media/trusat-concept-diagrams-201201-18.jpg' 
import imgDiagramHypothesis3 from './media/trusat-concept-diagrams-201201-19.jpg' 
import imgDiagramHypothesisMobile from './media/trusat-concept-diagrams-201201-25.jpg' 
import imgDiagramCentralized from './media/trusat-concept-diagrams-201201-20.jpg' 
import imgDiagramCentralizedMobile from './media/trusat-concept-diagrams-201201-23.jpg' 
import imgDiagramDecentralized from './media/trusat-concept-diagrams-201201-21.jpg' 
import imgDiagramDecentralizedMobile from './media/trusat-concept-diagrams-201201-24.jpg' 
import imgDiagramSolution from './media/trusat-concept-diagrams-201201-22.jpg' 
import imgDiagramSolutionMobile from './media/trusat-concept-diagrams-201201-26.jpg' 
import imgPersonaDreamer from './media/trusat-user_research-diagrams-201204-08.jpg' 
import imgPersonaWorker from './media/trusat-user_research-diagrams-201204-09.jpg' 
import imgPersonaHobbyist from './media/trusat-user_research-diagrams-201204-10.jpg' 
import imgPersonaSpectrum1 from './media/trusat-user_research-diagrams-201204-03.jpg' 
import imgPersonaSpectrum2 from './media/trusat-user_research-diagrams-201204-04.jpg' 
import imgPersonaSpectrum3 from './media/trusat-user_research-diagrams-201204-05.jpg' 
import imgPersonaSpectrum4 from './media/trusat-user_research-diagrams-201204-06.jpg' 
import imgPersonaSpectrum5 from './media/trusat-user_research-diagrams-201204-07.jpg' 
import imgPersonaPlan0 from './media/trusat-user_research-diagrams-201204-11.jpg' 
import imgPersonaPlan1 from './media/trusat-user_research-diagrams-201204-01.jpg' 
import imgPersonaPlan2 from './media/trusat-user_research-diagrams-201204-02.jpg' 
import imgPersonaPlanMobile from './media/trusat-user_research-diagrams-201204-12.jpg' 



class TrusatResearch extends React.Component {
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
        <section className="trusat__section trusat__section--research">
          <TrusatCanvas format="sectionHeader" header="Research"/>
          <div className="trusat__section__body">
            <div className="trusat__section--research1 trusat__section--blue">
              <div className="trusat__subsection container">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="project__section-title">
                      Defining the problem
                    </h3>
                    <p>
                      The space around Earth is about to get very congested.
                    </p>
                  </div>
                </div>
                <div className="row trusat__subsubsection--problem">
                  <div className="col-md-8">
                    <img className="hide-on-mobile" src={imgDiagramProblem1} alt="Diagram of 25x increase"></img>
                    <img className="hide-on-desktop" src={imgDiagramProblem1Mobile} alt="Diagram of 25x increase"></img>
                  </div>
                  <div className="col-md-4 project__offset--4">
                    <h4>
                    In the next decade, satellites will multiply by <span className="trusat__highlight">25x</span>.
                    </h4>
                    <p>
                      This will enable global internet access (which is awesome), but this pace of growth is outrunning our ability to prevent satellite collisions.
                    </p>
                  </div>
                </div>
                <div className="row trusat__subsubsection--problem">
                  <div className="col-md-8">
                    <img className="hide-on-mobile" src={imgDiagramProblem2} alt="Diagram of Kessler syndrome"></img>
                    <img className="hide-on-desktop" src={imgDiagramProblem2Mobile} alt="Diagram of Kessler syndrome"></img>
                  </div>
                  <div className="col-md-4 project__offset--4">
                    <h4>
                    Satellite collisions could trap humans on Earth.
                    </h4>
                    <p>
                      A chain reaction of collisions could trigger an exponentially thickening cage of debris. This is called the Kessler syndrome.
                    </p>
                  </div>
                </div>
                <div className="row trusat__subsubsection--problem">
                  <div className="col-md-8">
                    <img className="hide-on-mobile" src={imgDiagramProblem3} alt="Diagram of international coordination challenges"></img>
                    <img className="hide-on-desktop" src={imgDiagramProblem3Mobile} alt="Diagram of international coordination challenges"></img>
                  </div>
                  <div className="col-md-4 project__offset--4">
                    <h4>
                    Ensuring sustainable operations is very hard.
                    </h4>
                    <p>
                      It costs satellite operators more in the short-term to follow sustainability measures. And there's little regulatory penalty if they don't. It's one big tragedy of the commons.
                    </p>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection container project__image-stack">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="project__section-title">
                      The missing piece
                    </h3>
                  </div>
                </div>
                <div className="hide-on-mobile">
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        As a planet, we have international <strong>standards</strong>* for sustainable practices in space. 
                      </p>
                      <p className="note">
                        *<a href="https://www.unoosa.org/res/oosadoc/data/documents/2018/aac_1052018crp/aac_1052018crp_20_0_html/AC105_2018_CRP20E.pdf" target="_blank">Guidelines for the Long-term Sustainability of Outer Space</a> and the <a href="https://www.weforum.org/projects/space-sustainability-rating" target="_blank">Space Sustainability Rating</a>
                      </p>
                    </div>
                    <div className="col-md-8">
                      <img src={imgDiagramHypothesis1} alt="Diagram section for SSA standards"></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        And we have the capacity to <strong>analyze</strong> in-orbit behavior against these standards.
                      </p>
                    </div>
                    <div className="col-md-8">
                      <img src={imgDiagramHypothesis2} alt="Diagram section for SSA analysis capabilities"></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        But the <strong className="trusat__highlight">data</strong> needed to measure compliance is locked away. Without trusted SSA data, there’s no accountability. Without accountability, there’s no sustainability.
                      </p>
                    </div>
                    <div className="col-md-8">
                      <img src={imgDiagramHypothesis3} alt="Diagram section for trusted SSA data (this missing piece)"></img>
                    </div>
                  </div>
                </div>
                <div className="hide-on-desktop">
                  <img src={imgDiagramHypothesisMobile} alt="Diagram section for trusted SSA data (this missing piece)"></img>
                  <p>
                    As a planet, we have international <strong>standards</strong>* for sustainable practices in space. 
                  </p>
                  <p className="note">
                    *tk link to standards here
                  </p>
                  <p>
                    And we have the capacity to <strong>analyze</strong> in-orbit behavior against these standards.
                  </p>
                  <p>
                    But the <strong className="trusat__highlight">data</strong> needed to measure compliance is locked away. Without trusted SSA data, there’s no accountability. Without accountability, there’s no sustainability.
                  </p>
                </div>
              </div>
              <div className="trusat__subsection container">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="project__section-title">
                      Our hypothesis
                    </h3>
                    <p>
                      If SSA data is decentralized, it can be trusted by all parties
                    </p>
                  </div>
                </div>
                <div className="trusat__subsection project__offset--1">
                  <div className="row row--swap--1-2">
                    <div className="col-md-8 col--swap">
                      <img className="hide-on-mobile" src={imgDiagramCentralized} alt="Diagram of centralized SSA data"></img>
                      <img className="hide-on-desktop" src={imgDiagramCentralizedMobile} alt="Diagram of centralized SSA data"></img>
                    </div>
                    <div className="col-md-4 col--swap ">
                      <p>
                        With <strong>centralized</strong> data sources, sustainable practices require an unrealistic degree of trust between untrusting institutions.
                      </p>
                    </div>
                  </div>
                  <div className="row  row--swap--1-2 trusat__subsection">
                    <div className="col-md-8 col--swap">
                      <img className="hide-on-mobile" src={imgDiagramDecentralized} alt="Diagram of decentralized SSA data"></img>
                      <img className="hide-on-desktop" src={imgDiagramDecentralizedMobile} alt="Diagram of decentralized SSA data"></img>
                    </div>
                    <div className="col-md-4 col--swap">
                      <p>
                        With <strong>decentralized</strong> data sources, sustainability requires <em>zero</em> trust between institutions. 
                      </p>
                      <p className="note">
                        Instead of trusting one another, participants trust a set of agreed-upon rules enforced by automated contracts. This is one of the fundamental concepts that makes bitcoin possible&mdash;no single entity can manipulate the bitcoin ledger, so all entities can trust it as a record of ownership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="trusat__subsection">
                  <div className="row">
                    <div className="col-md-4">
                      <h4>
                        Proposed solution
                      </h4>
                      <p>
                        If we build software that enables citizen scientists across the planet to spot satellites, we can crowdsource a decentralized, trusted SSA data source.
                      </p>
                      <p>
                        With trusted data, in-orbit behavior can be better regulated, raising costs for unsustainable operations. 
                      </p>
                      <p>
                        <em>This would better align an operator's economic incentives with the long-term sustainability of space activities.</em>
                      </p>
                    </div>
                    <div className="col-md-8">
                      <img className="hide-on-mobile" src={imgDiagramSolution} alt="Diagram of TruSat solution"></img>
                      <img className="hide-on-desktop" src={imgDiagramSolutionMobile} alt="Diagram of TruSat solution"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trusat__section--research2">
              <div className="trusat__subsection container">
                <div className="row">
                  <h3 className="project__section-title">
                      Personas
                    </h3>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      We interviewed dozens of space enthusiasts across four continents to determine personas. We discussed their motivations, along with their levels of access to local space-related industries and activities.
                    </p>
                  </div>
                  <div className="col-xs-10 col-md-4 start-md-8 note">
                    Our user research was led by <a href="https://www.linkedin.com/in/georgiarakusen/?originalSubdomain=uk" target="_blank">Georgia Rakusen</a> and <a href="https://andreamoralescoto.com/about/" target="_blank">Andrea Morales Coto</a>.
                    </div>
                </div>
                <div className="row">
                  <div className="col-sm-8 project__offset--1--mobile">
                    We determined three main sub-personas within the broader audience of space enthusiasts interested in technology:
                  </div>
                </div>
                <div className="row trusat__subsubsection project__offset--1 trusat__personas">
                  <div className="col-md-4 trusat__avatar">
                    <div className="row">
                      <div className="col-md-12 col-xs-4">
                        <img src={imgPersonaDreamer} alt="Persona avatar for space dreamers"></img>
                      </div>
                      <div className="col-md-12 col-xs-8">
                        <h4>Space Dreamer</h4>
                        <p className="note">
                          Interested in a career in space. Follows space-related social media accounts. Doesn't own relevant equipment. May have participated in a citizen-science project before. Has never seen a satellite.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 trusat__avatar">
                    <div className="row">
                      <div className="col-md-12 col-xs-4">
                        <img src={imgPersonaWorker} alt="Persona avatar for STEM workers"></img>
                      </div>
                      <div className="col-md-12 col-xs-8">
                        <h4>STEM Worker</h4>
                        <p className="note">
                          Working in a STEM-related career. Has little spare time. May have technical acumen to use free sat-tracking software. Has seen satellites and/or used satellite-finding apps.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 trusat__avatar">
                    <div className="row">
                      <div className="col-md-12 col-xs-4">
                        <img src={imgPersonaHobbyist} alt="Persona avatar for hobbyists"></img>
                      </div>
                      <div className="col-md-12 col-xs-8">
                        <h4>Hobbyist</h4>
                        <p className="note">
                          Looking for a new technical hobby. Has a DSLR and/or telescope. Is comfortable tinkering with hardware. Able to use some free sat-tracking software. May be retired with spare time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="trusat__spectrum-group">
                      <h4>
                        Geographic diversity
                      </h4>
                      <img src={imgPersonaSpectrum1} alt="Graph showing distribution of personas across dimension of audience size"></img>
                    </div>
                    <div className="trusat__spectrum-group">
                      <h4>
                        Access to equipment
                      </h4>
                      <img src={imgPersonaSpectrum2} alt="Graph showing distribution of personas across dimension of observations per observer"></img>
                    </div>
                    <div className="trusat__spectrum-group">
                      <h4>
                        Time budgeted for related hobbies
                      </h4>
                      <img src={imgPersonaSpectrum3} alt="Graph showing distribution of personas across dimension of time, experience, and access to equipment"></img>
                    </div>
                  </div>
                  <div className="col-md-5 start-md-6">
                    <div className="trusat__spectrum-group">
                      <h4>
                        Audience size
                      </h4>
                      <img src={imgPersonaSpectrum4} alt="Graph showing distribution of personas across dimension of geographic diversity"></img>
                    </div>
                    <div className="trusat__spectrum-group">
                      <h4>
                        Observations per observer
                      </h4>
                      <img src={imgPersonaSpectrum5} alt="Graph showing distribution of personas across dimension of time, experience, and access to equipment"></img>
                    </div>
                    <div>
                        <p>
                        To prioritize personas and use-cases, we considered our primary metrics to increase:
                      </p>
                      <ol>
                        <li>
                          <strong>Number of <em>observers</em></strong>&mdash;to serve our mission to diversify, democratize, and decentralize space.
                        </li>
                        <li>
                        <strong>Number of <em>observations</em></strong>&mdash;to be an effective source of SSA data.
                        </li>
                      </ol>               
                      <p>
                      Our long-term vision requires increasing both, but we needed to prioritize the needs of one audience first.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 project__offset--4">
                    <h3 className="project__section-title">
                      Segmenting
                    </h3>
                    <p>
                      By targeting the retired hobbyist persona first, we can leverage their experience, equipment access, and free time budgeted for related hobbies. Of our key personas, the hobbyist is most likely to establish amateur ground station (via DIY photo rigs and <a href="https://unistellaroptics.com/" target="_blank">smart telescopes</a>) to capture high volumes of data.
                    </p>
                  </div>
                </div>
                <div className="project__image-stack hide-on-mobile">
                  <div className="row">
                    <div className="col-md-9">
                      <img src={imgPersonaPlan0} alt="Arrow for diagram below"></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-9">
                      <img src={imgPersonaPlan1} alt="Top portion of diagram showing segmenting of each persona into two two apps: one for a broader audience and one for power users"></img>
                    </div>
                    <div className="col-md-3">
                      <h4>
                        Ground station tool
                      </h4>
                      <p>
                        So we began building a ground station tool to both serve existing trackers (by automating their data collection process), and to seed the TruSat network with data sources.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-9">
                      <img src={imgPersonaPlan2} alt="Bottom portion of diagram showing segmenting of each persona into two two apps: one for a broader audience and one for power users"></img>
                    </div>
                    <div className="col-md-3">
                      <h4 className="project__offset--1">
                        Citizen-science game
                      </h4>
                      <p>
                        After proving the network’s viability through use of its ground station tools, we plan to launch a location-based game to help newcomers participate in the hobby of satellite tracking, with hopes of converting some to power users with ground stations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hide-on-desktop">
                  <img src={imgPersonaPlanMobile} alt="Diagram showing segmenting of each persona into two two apps: one for a broader audience and one for power users"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    )
  }
}

export default TrusatResearch;


