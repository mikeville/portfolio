import React from 'react';
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player/youtube"

import BrowserChrome from "../../BrowserChrome"
import TrusatCanvasTest from "./TrusatCanvasTest"
import TrusatCanvas from "./TrusatCanvas"

import './Trusat.scss';

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';

import vidExplainerZoom from './media/explainer/trusat-explainer-zoom.mp4'
import vidExplainerPlan from './media/explainer/trusat-explainer-plan.mp4'
import vidExplainerCapture from './media/explainer/trusat-explainer-capture.mp4'
import vidExplainerPosat from './media/explainer/trusat-explainer-posat.mp4'

import imgDesktopCatalog from './media/screenshots-desktop/trusat-current_app_catalog.jpg' 
import imgDesktopObject from './media/screenshots-desktop/trusat-current_app_object.jpg' 
import imgDesktopProfile from './media/screenshots-desktop/trusat-current_app_profile.jpg' 
import imgDesktopLandingPage from './media/screenshots-desktop/trusat-landing_page.png' 
import imgDesktopLearningHub from './media/screenshots-desktop/trusat-learning_hub-1200w.jpg' 

import imgScreenshotLeaderboard from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_leaderboard.png' 
import imgScreenshotPosat from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_proof-of-satellite.png'
import imgScreenshotMission from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_mission.png'
import imgScreenshotObject from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_object-story.png'
import imgScreenshotPriorities from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_priorities.png'
import imgScreenshotCollection from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_collection.png'
import imgScreenshotNotification from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_notification.png'
import imgScreenshotManualMode from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_manual-mode.png'
import imgScreenshotCapture from './media/screenshots/trusat-GalaxyS10_Mock--cropped--200420-0014b.gif' 
import imgScreenshotPlateSolving from './media/screenshots/trusat-GalaxyS10_Mock--plate_solving-b.gif' 


import imgDiagramProblem1 from './media/trusat-diagram-problem1.png' 
import imgDiagramProblem2 from './media/trusat-diagram-problem2.png' 
import imgDiagramProblem3 from './media/trusat-diagram-problem3.png' 
import imgDiagramHypothesis1 from './media/trusat-diagram-hypothesis1.png' 
import imgDiagramHypothesis2 from './media/trusat-diagram-hypothesis2.png' 
import imgDiagramHypothesis3 from './media/trusat-diagram-hypothesis3.png' 
import imgDiagramCentralized from './media/trusat-diagram-centralized.png' 
import imgDiagramDecentralized from './media/trusat-diagram-decentralized.png' 
import imgDiagramSolution from './media/trusat-diagram-solution.png' 
import imgPersonaDreamer from './media/trusat-user_research-diagrams-201204-08.png' 
import imgPersonaWorker from './media/trusat-user_research-diagrams-201204-09.png' 
import imgPersonaHobbyist from './media/trusat-user_research-diagrams-201204-10.png' 
import imgPersonaSpectrum1 from './media/trusat-user_research-diagrams-201204-03.png' 
import imgPersonaSpectrum2 from './media/trusat-user_research-diagrams-201204-04.png' 
import imgPersonaSpectrum3 from './media/trusat-user_research-diagrams-201204-05.png' 
import imgPersonaSpectrum4 from './media/trusat-user_research-diagrams-201204-06.png' 
import imgPersonaSpectrum5 from './media/trusat-user_research-diagrams-201204-07.png' 
import imgPersonaPlan0 from './media/trusat-user_research-diagrams-201204-11.png' 
import imgPersonaPlan1 from './media/trusat-user_research-diagrams-201204-01.png' 
import imgPersonaPlan2 from './media/trusat-user_research-diagrams-201204-02.png' 


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
          <div className="project__intro">
            <h1 className="project__title">TruSat</h1>
            <h2 className="project__subtitle">Creative direction, product design</h2>
            <div className="container project__info">
              <div className="row">
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
          </div>
        </div>
        <section className="trusat__section">
          <div className="trusat__section__title--top">
            <TrusatCanvas />
          </div>
          <div className="trusat__section__body">
            <div className="trusat__section-body container">
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  Backstory
                </h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 note">
                      <img className="project__screenshot zneg1" src={imgScreenshotPlateSolving} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-8">
                      <p className="trusat__research__caption-offset--1">
                      🤯 In late 2018, the blockchain venture firm ConsenSys acquired the asteroid mining company Planetary Resources.
                      </p>
                      <p>
                      ✨ I led design on this new team. Our mission was to find applications for blockchain in the space industry to diversify, democratize, and decentralize space endeavors.
                      </p>
                      <p>
                      🌍 We focused on the high-priority issue of space sustainability, including the problem of space junk. The issue is is ripe with coordination challenges that a blochain is well suited to, given its ability to foster cooperation between untrusting parties. We researched the incentives driving space situational awareness (SSA) to find systemic leverage points to target with software.
                      </p>
                      <p>
                      🛰 The result is <a href="https://trusat.org/" target="_blank">TruSat</a>, a citizen-powered record of satellite behavior.
                      </p>
                      <p>
                      🔭 We first launched the <a href="https://trusat.org/catalog/priorities" target="_blank">TruSat Catalog</a> to show backyard astronomers where to look in the sky to capture and submit fresh observations to the TruSat network.
                      </p>
                      <p>
                      📱 We then began prototyping a location-based game to make the hobby of satellite tracking more accessible to space enthusiasts worldwide (think Pokemon Go for satellites). 
                      </p>
                      <p>
                      📓 Below are designs for both apps, followed by a summary of the research driving our decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trusat__subsection">
              <div className="trusat__section-body container">
                <h3 className="project__section-title">
                  Explainer video
                </h3>
                <div className="container">
                  <div className="row trusat__subsubsection">
                    <div className="col-md-4">
                      <p>
                        Watch for a quick orientation.
                      </p>
                      <p>
                        I scripted, storyboarded, and art directed this video, and the amazing Louis Wes illustrated and animated it. Music and sound by Jennifer Pague.
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="video-wrapper">
                        <ReactPlayer
                            className="trusat__video"
                            url="https://www.youtube.com/watch?v=H-J7zngl6xE&feature=emb_title"
                            controls frameBorder="0"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="row trusat__subsubsection">
                    <div className="col-md-12">
                      <h4>
                        Excerpts:
                      </h4>
                      <div className="trusat__research__caption-offset--1"></div>
                    </div>
                    <div className="col-md-6">
                      <video src={vidExplainerZoom} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                    </div>
                    <div className="col-md-6">
                      <video src={vidExplainerPlan} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                    </div>
                    <div className="col-md-6">
                      <video className="trusat__research__caption-offset--2" src={vidExplainerCapture} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                    </div>
                    <div className="col-md-6">
                      <video className="trusat__research__caption-offset--2" src={vidExplainerPosat} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusat__section trusat__section--research">
          <div className="trusat__section__title">
            Research
          </div>
          <div className="trusat__section__body">
            <div className="trusat__section--research1 trusat__section--blue">
              <div className="container">
                {/* <div className="trusat__subsubsection row">
                  <div className="col-md-6">
                    <p>
                      Read on to learn about the systemic issue at the heart of space junk and our plan to fix it.                    </p>
                  </div>
                </div> */}
                <div className="trusat__subsection">
                  <h3 className="project__section-title">
                    Defining the problem
                  </h3>
                  <p>
                    The space around Earth is about to get very congested.
                  </p>
                  <div className="container">
                    <div className="row trusat__subsubsection--problem">
                      <div className="col-md-8">
                        <img src={imgDiagramProblem1} alt="Diagram of 25x increase"></img>
                      </div>
                      <div className="col-md-4 trusat__research__caption-offset--4">
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
                        <img src={imgDiagramProblem2} alt="Diagram of Kessler syndrome"></img>
                      </div>
                      <div className="col-md-4 trusat__research__caption-offset--4">
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
                        <img src={imgDiagramProblem3} alt="Diagram of international coordination challenges"></img>
                      </div>
                      <div className="col-md-4 trusat__research__caption-offset--4">
                        <h4>
                        Ensuring sustainable operations is very hard.
                        </h4>
                        <p>
                          It costs satellite operators more in the short-term to follow sustainability measures. And there's little regulatory penalty if they don't. It's one big tragedy of the commons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trusat__subsection">
                  <h3 className="project__section-title">
                    The missing piece
                  </h3>
                  <div className="container project__image-stack">
                    <div className="row">
                      <div className="col-md-4">
                        <p>
                          As a planet, we have international <strong>standards</strong>* for sustainable practices in space. 
                        </p>
                        <p className="note">
                          *tk link to standards here
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
                          But the <strong>data</strong> needed to measure compliance is locked away. Without trusted SSA data, there’s no accountability. Without accountability, there’s no sustainability.
                        </p>
                      </div>
                      <div className="col-md-8">
                        <img src={imgDiagramHypothesis3} alt="Diagram section for trusted SSA data (this missing piece)"></img>
                      </div>
                    </div>
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
                  <div className="trusat__subsection trusat__research__caption-offset--1">
                    <div className="row">
                      <div className="col-md-8">
                        <img src={imgDiagramCentralized} alt="Diagram of centralized SSA data"></img>
                      </div>
                      <div className="col-md-4">
                        <h4>
                          Centralized
                        </h4>
                        <p>
                          Sustainable practices require an unrealistic degree of trust between untrusting institutions.
                        </p>
                      </div>
                    </div>
                    <div className="row trusat__subsection">
                      <div className="col-md-8">
                        <img src={imgDiagramDecentralized} alt="Diagram of decentralized SSA data"></img>
                      </div>
                      <div className="col-md-4">
                        <h4>
                          Decentralized
                        </h4>
                        <p>
                          Sustainability requires <em>zero</em> trust between institutions. 
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
                        <p>
                          With trusted data, in-orbit behavior can be better regulated, raising costs for unsustainable operations. This would better align an operator's economic incentives with the long-term sustainability of space.
                        </p>
                        <p>
                          If we build software that enables citizen scientists across the planet to spot satellites, we can crowdsource a decentralized, trusted SSA data source.
                        </p>
                      </div>
                      <div className="col-md-8">
                        <img src={imgDiagramSolution} alt="Diagram of TruSat solution"></img>
                      </div>
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
                  Georgia Rakusen carried out most of our user research, with support from Andrea Morales Coto and Katie Johnson.
                    </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8">
                      We determined three main sub-personas within the broader audience of space enthusiasts interested in technology:
                    </div>
                  </div>
                  <div className="row trusat__subsubsection trusat__research__caption-offset--1 trusat__personas">
                    <div className="col-md-4">
                      <img className="trusat__avatar" src={imgPersonaDreamer} alt="Persona avatar for space dreamers"></img>
                      <h4>Space Dreamer</h4>
                      <p className="note">
                      Interested in a career in space. Follows space-related social media accounts. Doesn't own relevant equipment. May have participated in a citizen-science project before. Has never seen a satellite.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="trusat__avatar" src={imgPersonaWorker} alt="Persona avatar for STEM workers"></img>
                      <h4>STEM Worker</h4>
                      <p className="note">
                        Working in a STEM-related career. Has little spare time. May have technical acumen to use free sat-tracking software. Has seen satellites and/or used satellite-finding apps.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="trusat__avatar" src={imgPersonaHobbyist} alt="Persona avatar for hobbyists"></img>
                      <h4>Hobbyist</h4>
                      <p className="note">
                      Looking for a new technical hobby. Has a DSLR and/or telescope. Is comfortable tinkering with hardware. Able to use some free sat-tracking software. May be retired with spare time.
                      </p>
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
                        <p>
                          <ol>
                            <li>
                              <strong>Number of <em>observers</em></strong>&mdash;to serve our mission to diversify, democratize, and decentralize space.
                            </li>
                            <li>
                            <strong>Number of <em>observations</em></strong>&mdash;to be an effective source of SSA data.
                            </li>
                          </ol>               
                        </p>
                        <p>
                        Our long-term vision requires increasing both, but we needed to prioritize the needs of one audience first.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 trusat__research__caption-offset--4">
                    <h3 className="project__section-title">
                      Segmenting
                    </h3>
                    <p>
                      By targeting the retired hobbyist persona first, we can leverage their experience, equipment access, and free time budgeted for related hobbies. Of our key personas, the hobbyist is most likely to establish amateur ground station (via DIY photo rigs and <a href="https://unistellaroptics.com/" target="_blank">smart telescopes</a>) to capture high volumes of data.
                    </p>
                  </div>
                </div>
                <div className="project__image-stack">
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
                      <h4>
                        Citizen-science game
                      </h4>
                      <p>
                        After proving the network’s viability through use of its ground station tools, we plan to launch a location-based game to help newcomers participate in the hobby of satellite tracking, with hopes of converting some to power users with ground stations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusat__section">
          <div className="trusat__section__title">
            Game Concept
          </div>
          <div className="trusat__section__body">
            <div className="container">
              <div className="trusat__subsubsection">
                <h3 className="project__section-title">
                  <em>Pokemon Go</em> for satellites
                </h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <p>
                        TruSat Mobile’s purpose is to enable anyone with a smartphone to spot satlellites and update the TruSat catalog.                      </p>
                      <p>
                        It has the challenge+reward mechanics of a location-based game, with the citizen science mission to document observable events in nature.                      </p>
                    </div>
                    <div className="col-xs-10 col-md-3 start-md-9 note">
                      While this case study includes mockups of this game, our team ceased development when COVID-19 hit, and the game was never launched. The product docs exist [here] as part of TruSat’s broader open source project.        

                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <h4>
                        If you can see stars, you can see satellites
                      </h4>
                      <p>
                        TruSat shows you exactly how, when, and where to spot satellites. Log observations with your phone's camera, and join a global community of citizen scientists helping to preserve our spacefaring future.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotNotification} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        Receive an alert when an approaching sat is about to become visible to you.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="project__screenshot zneg1" src={imgScreenshotCapture} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        Watch as the sat follows the A.R. orbit track, then snap a picture to capture an observation.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotLeaderboard} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        Now you "own" the sat...until another tracker captures it somewhere else on Earth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <h4 className="trusat__research__caption-offset--1">
                        Snap a photo
                      </h4>
                      <p>
                        TruSat uses the data from your photos to update an independent, global record satellite positions. 
                      </p>
                      <p className="note">
                        How does it work? The low-light capabilities and astrophotography <a href="https://ai.googleblog.com/2019/11/astrophotography-with-night-sight-on.html" target="_blank">modes</a> in new smartphones enable TruSat to detect star constellations in your photos. This let's TruSat determine a satellite's position relative to the phone's GPS location. That's all the data it needs for one observation. TruSat then combines multiple observations across the planet to calculate the orbital trajectories of satellites
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="project__screenshot zneg1" src={imgScreenshotPlateSolving} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        TruSat detects the sat's position based on its back-drop of star constellations.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotPosat} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        It combines observations from around the world to update the sat's trajectory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotManualMode} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-4">
                      <h4 className="trusat__research__caption-offset--1">
                        Wide accessibility
                      </h4>
                      <p>
                        Users without access to low-light-friendly phones or DSLR cameras can still capture valuable SSA data.
                      </p>
                      <div className="note">
                        <p>
                          "Manual mode" uses the same gyroscope-assisted star map from the A.R. mode to show a satellite's orbit track, with the addition of "finish lines" drawn between two stars that the satellite will appear to pass between.
                        </p>
                        <p>
                          Observers watch the sky as the satellite approaches the imaginary finish line between the two stars, then hit "capture" as the satellite crosses the line. TruSat uses this this time-based data in its orbital calculations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection container">
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="trusat__research__caption-offset--1">
                      Join missions
                    </h4>
                    <p>
                      TruSat points users to the highest priority satellites for SSA analysis.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img className="project__screenshot" src={imgScreenshotPriorities} alt="TruSat mobile app screenshot"></img>
                    <p className="project__screenshot-caption">
                      Capture sats from the hit list of highest priorities to earn bigger bounties.
                    </p>
                    <p className="note">
                        Sats are prioritied algorithmically, based on factors like time since last observation.
                      </p>
                  </div>
                  <div className="col-md-4">
                    <img className="project__screenshot" src={imgScreenshotMission} alt="TruSat mobile app screenshot"></img>
                    <p className="project__screenshot-caption">
                      Join SSA industry partners in missions to capture valuable data.
                    </p>
                    <p className="note">
                      Partners can task the network to focus efforts on specific satellites most in need of data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotCollection} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-4">
                      <img className="project__screenshot" src={imgScreenshotObject} alt="TruSat mobile app screenshot"></img>
                      <p className="project__screenshot-caption">
                        Every satellite is a technical achievement with its own backstory. The Space Dreamer persona clean learn about the space industry through these stories.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4 className="trusat__research__caption-offset--1">
                        Satellites as collectibles
                      </h4>
                      <p>
                        Observers earn badges to prove they've captured satellites. Some satellites are consistently easier to spot, while others can go unseen for months. 
                      </p>
                      <p>
                        Observers  with stronger accuracy scores have greater influence over the TruSat network, as voting power in the network's governance is determined mainly by an observer's record of observations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusat__section">
          <div className="trusat__section__title">
            Launch
          </div>
          <div className="trusat__section__body">
            <div className="container">
              <div className="trusat__subsubsection row">
                  <div className="col-md-6">
                    <p>
                      In October of 2019, we launched TruSat's first app&mdash;<a href="https://trusat.org/catalog/priorities" target="_blank">The&nbsp;TruSat&nbsp;Catalog</a>&mdash;providing backyard astronomers with data they can run in free desktop software to point their telescopes and camera rigs at the sky to collect new observations. 
                    </p>
                  </div>
              </div>
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  Catalog
                </h3>
                <div className="container">
                  <div className="row trusat__subsection">
                    <div className="col-md-3">
                      <p>
                        TruSat's catalog includes every publicly known object orbiting Earth (including classified satellites and space junk). It determines which satellites are the highest priorities in need of new observations.
                      </p>
                    </div>
                    <div className="col-md-9">
                      <BrowserChrome>
                        <img src={imgDesktopCatalog} alt="TruSat catalog screenshot"></img>
                      </BrowserChrome>
                    </div>
                  </div>
                  <div className="row trusat__subsection">
                    <div className="col-md-9">
                      <BrowserChrome>
                        <img src={imgDesktopObject} alt="TruSat object page screenshot"></img>
                      </BrowserChrome>
                    </div>
                    <div className="col-md-3">
                        <h4>
                          Objects
                        </h4>
                      <p>
                        Observers can learn the backstories of the satellites they capture.
                      </p>
                      <p>
                        Every object page includes an immutable record of its orbital behavior.
                      </p>
                    </div>
                  </div>
                  <div className="row trusat__subsection">
                    <div className="col-md-3">
                        <h4>
                          Profiles
                        </h4>
                      <p>
                        TruSat keeps track of each observer's collections of captured satellites.
                      </p>
                      <p>
                        This gives satellite trackers an alternative to the manual spreadsheet methods many currently use to keep track of their observation data. 
                      </p>
                    </div>
                    <div className="col-md-9">
                      <BrowserChrome>
                        <img src={imgDesktopProfile} alt="TruSat profile page screenshot"></img>
                      </BrowserChrome>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  Learning Hub
                </h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-9">
                      <BrowserChrome>
                        <img src={imgDesktopLearningHub} alt="TruSat Learning Hub screenshot"></img>
                      </BrowserChrome>
                    </div>
                    <div className="col-md-3">
                      <p>
                        A common denominator in all our personas is a desire to learn, so we're continuously updating TruSat's documentation with new instructional materials and learning modules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  Landing page
                <div className="trusat__research__caption-offset--1" >
                </div>
                </h3>
                <BrowserChrome>
                  <img src={imgDesktopLandingPage} alt="TruSat landing page"></img>
                </BrowserChrome>
              </div>
            </div>
          </div>
        </section>
        <section className="trusat__section trusat__section--bottom trusat__section--blue">
          <div className="container">
            <div className="trusat__subsubsection row">
              <div className="col-md-7">
                <h3 className="project__section-title">
                  Next steps  
                </h3>
                <p>
                  While the project may no longer be funded, it lives on in the open source community. 
                </p>
                <p>
                  Follow TruSat on Github and Discord to join the discussion and contribute to the catalog.
                </p>
                <p>
                Special thanks to Joseph Lubin for funding the project 
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProjectFooter />
    </div>
    )
  }
}

export default Trusat;


