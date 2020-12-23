import React from 'react';

import BrowserChrome from "../../BrowserChrome"
import Loader from "../../Loader"

import TrusatCanvas from "./TrusatCanvas"

import './Trusat.scss';

import vidCapture from './media/trusat-Phone3vbr-1020w-shortened.mp4'
import vidStarMatch from './media/trusat-Phone--star_match_2.mp4'

import imgDesktopCatalog from './media/screenshots-desktop/trusat-current_app_catalog.jpg' 
import imgDesktopObject from './media/screenshots-desktop/trusat-current_app_object.jpg' 
import imgDesktopProfile from './media/screenshots-desktop/trusat-current_app_profile.jpg' 
import imgDesktopLandingPage from './media/screenshots-desktop/trusat-landing_page.jpg' 
import imgDesktopLearningHub from './media/screenshots-desktop/trusat-learning_hub-1200w.jpg' 

import imgScreenshotLeaderboard from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_leaderboard.png' 
import imgScreenshotPosat from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_proof-of-satellite.png'
import imgScreenshotMission from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_mission.png'
import imgScreenshotObject from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_object-story.png'
import imgScreenshotPriorities from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_priorities.png'
import imgScreenshotCollection from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_collection.png'
import imgScreenshotNotification from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_notification.png'
import imgScreenshotManualMode from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_manual-mode.png'



class TrusatApp extends React.Component {
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
        <section className="trusat__section">
          <TrusatCanvas format="sectionHeader" header="Concept"/>
          <div className="trusat__section__body">
            <div className="container">
              <div className="trusat__subsubsection row">
                <div className="col-xs-12">
                  <h3 className="project__section-title">
                    <em>Pokemon Go</em> for satellites
                  </h3>
                </div>
                <div className="col-md-8">
                  <p>
                    TruSat Mobile’s purpose is to enable anyone with a smartphone to spot satlellites and update the TruSat catalog.                      </p>
                  <p>
                    It has the challenge+reward mechanics of a location-based game, with the citizen science mission to document observable events in nature.                      </p>
                </div>
                <div className="col-xs-10 col-md-4 note">
                  While this case study includes mockups of this game, our team ceased development when COVID-19 hit, and the game was never launched. The <a href="https://learn.trusat.org/docs/roadmap" target="_blank">product docs</a> live on within TruSat’s broader open source project.        

                </div>
              </div>
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
              <div className="trusat__subsection row">
                <div className="col-md-4">
                  <img className="project__screenshot" src={imgScreenshotNotification} alt="TruSat mobile app screenshot"></img>
                  <p className="project__screenshot-caption">
                    Receive an alert when an approaching satellite is about to become visible to you.
                  </p>
                </div>
                <div className="col-md-4 loader-content-container">
                  <Loader />
                  <video className="video-snack project__screenshot zneg1 loader-content video-with-line trusat__video-screenshot" src={vidCapture} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                  <p className="project__screenshot-caption trusat__video-screenshot-caption">
                    Watch as the satellite follows the A.R. orbit track, then snap a picture to capture an observation.
                  </p>
                </div>
                <div className="col-md-4">
                  <img className="project__screenshot" src={imgScreenshotLeaderboard} alt="TruSat mobile app screenshot"></img>
                  <p className="project__screenshot-caption">
                    Now you "own" the satellite...until another tracker captures it somewhere else on Earth.
                  </p>
                </div>
              </div>
              <div className="row trusat__subsection">
                <div className="col-md-4">
                  <h4 className="project__offset--1">
                    Snap a photo
                  </h4>
                  <p>
                    TruSat uses the data from your photos to update an independent, global record satellite positions. 
                  </p>
                  <p className="note">
                    How does it work? The low-light capabilities and astrophotography <a href="https://ai.googleblog.com/2019/11/astrophotography-with-night-sight-on.html" target="_blank">modes</a> in new smartphones enable TruSat to detect star constellations in your photos. This let's TruSat determine a satellite's position relative to the phone's GPS location. That's all the data it needs for one observation. TruSat then combines multiple observations across the planet to calculate the orbital trajectories of satellites
                  </p>
                </div>
                <div className="col-md-4 loader-content-container">
                  <Loader />
                  <video className="video-snack project__screenshot zneg1 loader-content video-with-line trusat__video-screenshot" src={vidStarMatch} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                  <p className="project__screenshot-caption">
                    TruSat detects the satellite's position based on its back-drop of star constellations.
                  </p>
                </div>
                <div className="col-md-4">
                  <img className="project__screenshot" src={imgScreenshotPosat} alt="TruSat mobile app screenshot"></img>
                  <p className="project__screenshot-caption">
                    It combines observations from around the world to update the satellite's trajectory.
                  </p>
                </div>
              </div>
              <div className="row row--swap--1-2 trusat__subsection">
                <div className="col-md-4 col--swap">
                  <img className="project__screenshot" src={imgScreenshotManualMode} alt="TruSat mobile app screenshot"></img>
                </div>
                <div className="col-md-4 col--swap">
                  <h4 className="project__offset--1">
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
              <div className="row trusat__subsection">
                <div className="col-md-4">
                  <h4 className="project__offset--1">
                    Join missions
                  </h4>
                  <p>
                    TruSat points users to the highest priority satellites for SSA analysis.
                  </p>
                </div>
                <div className="col-md-4">
                  <img className="project__screenshot" src={imgScreenshotPriorities} alt="TruSat mobile app screenshot"></img>
                  <div className="project__screenshot-caption">
                    <p>
                      Capture sats from the hit list of highest priorities to earn bigger bounties.
                    </p>
                    <p className="note">
                      Sats are prioritied algorithmically, based on factors like time since last observation.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="project__screenshot" src={imgScreenshotMission} alt="TruSat mobile app screenshot"></img>
                  <div className="project__screenshot-caption">
                    <p>
                      Join SSA industry partners in missions to capture valuable data.
                    </p>
                    <p className="note">
                      Partners can task the network to focus efforts on specific satellites most in need of data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row row--swap--1-2 trusat__subsection">
                <div className="col-md-8 col--swap">
                  <div className="row">
                    <div className="col-md-6">
                      <img className="project__screenshot" src={imgScreenshotCollection} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-6 project__offset--neg3-mobile">
                      <img className="project__screenshot" src={imgScreenshotObject} alt="TruSat mobile app screenshot"></img>
                      <div className="project__screenshot-caption">
                        <p>
                          Every satellite is a technical achievement with its own backstory. 
                        </p>
                        <p className="note">
                          The Space Dreamer persona clean learn about the space industry through these stories.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col--swap">
                  <h4 className="project__offset--1">
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
        </section>
        <section className="trusat__section">
          <TrusatCanvas format="sectionHeader" header="Launch"/>
          <div className="trusat__section__body">
            <div className="container">
              <div className="trusat__subsubsection row">
                <div className="col-md-6">
                  <p>
                    In October of 2019, we launched the first phase of TruSat&mdash;<a href="https://trusat.org/catalog/priorities" target="_blank">The&nbsp;TruSat&nbsp;Catalog</a>&mdash;providing backyard astronomers with data they can run in free desktop software to point their telescopes and camera rigs at the sky to collect new observations. 
                  </p>
                </div>
              </div>
              <div className="trusat__subsection row">
                <div className="col-xs-12">
                  <h3 className="project__section-title">
                    Catalog
                  </h3>
                </div>
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
              <div className="trusat__subsection row row--swap--1-2">
                  <div className="col-md-9 col--swap">
                    <BrowserChrome>
                      <img src={imgDesktopObject} alt="TruSat object page screenshot"></img>
                    </BrowserChrome>
                  </div>
                  <div className="col-md-3 col--swap">
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
              <div className="trusat__subsection row">
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
                <div className="trusat__subsection">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="project__section-title">
                        Learning Hub
                      </h3>
                    </div>
                  </div>
                  <div className="row row--swap--1-2">
                    <div className="col-md-9 col--swap">
                      <BrowserChrome>
                        <img src={imgDesktopLearningHub} alt="TruSat Learning Hub screenshot"></img>
                      </BrowserChrome>
                    </div>
                    <div className="col-md-3 col--swap">
                      <p>
                        A common denominator in all our personas is a desire to learn, so we're continuously updating TruSat's documentation with new instructional materials and learning modules.
                      </p>
                    </div>
                  </div>
                </div>
              <div className="trusat__subsection row">
                <div className="col-xs-12">
                  <h3 className="project__section-title">
                    Landing page
                  </h3>
                </div>
                <div className="col-xs-12 project__offset--1">
                  <BrowserChrome>
                    <img src={imgDesktopLandingPage} alt="TruSat landing page"></img>
                  </BrowserChrome>
                </div>
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
                  While the project may no longer be funded, it lives on with the support of volunteers in the open source community. 
                </p>
                <p>
                  Follow TruSat on <a href="https://github.com/TruSat" target="_blank">Github</a> and learn how to get involved <a href="https://learn.trusat.org/docs/participate" target="_blank">here</a>.
                </p>
                <p>
                  🙏🏼 Many thanks to everyone who has contributed.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
    )
  }
}

export default TrusatApp;


