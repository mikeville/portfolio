import React from 'react';
import ReactPlayer from "react-player/youtube"

import TrusatCanvas from "./TrusatCanvas"
import Loader from "../../Loader"

import './Trusat.scss';


import vidCapture from './media/trusat-Phone3vbr-1020w-shortened.mp4'

import vidExplainerZoom from './media/explainer/trusat-explainer-zoom.mp4'
import vidExplainerPlan from './media/explainer/trusat-explainer-plan.mp4'
import vidExplainerCapture from './media/explainer/trusat-explainer-capture.mp4'
import vidExplainerPosat from './media/explainer/trusat-explainer-posat.mp4'



class TrusatOverview extends React.Component {
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
          <div className="trusat__section__title--top">
            <TrusatCanvas />
          </div>
          <div className="trusat__section__body container">
            <div className="trusat__subsection row">
              <div className="col-xs-12">
                <h3 className="project__section-title">
                  Backstory
                </h3>
              </div>
              <div className="col-md-4 note loader-content-container">
                <Loader />
                <video className="video-snack project__screenshot zneg1 loader-content video-with-line" src={vidCapture} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
              </div>
              <div className="col-md-8">
                <p className="project__offset--1 project__screenshot-caption--mobile">
                🤯 In late 2018, the blockchain venture firm <a href="https://consensys.net/" target="_blank">ConsenSys</a> acquired the asteroid mining company Planetary Resources.
                </p>
                <p>
                ✨ I led design on this new team at ConsenSys. Our mission was to find applications for blockchain in the space industry to diversify, democratize, and decentralize space endeavors.
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
            <div className="trusat__subsection row">
                <div className="col-xs-12">
                  <h3 className="project__section-title">
                    Explainer video
                  </h3>
                  <div className="spacer project__offset--1">

                  </div>
                </div>
                <div className="col-md-4">
                  <p>
                    Watch for a quick orientation.
                  </p>
                  <p>
                    I scripted, storyboarded, and art directed this video, and the amazing <a href="https://louiswes.com/" target="_blank">Louis Wes</a> illustrated and animated it. Music and sound by sonic guru <a href="https://www.instagram.com/jenniferpaguesounds/?hl=en" target="_blank">Jennifer Pague</a>.
                  </p>
                </div>
                <div className="col-md-8 trusat__subsubsection">
                  <div className="video-wrapper">
                    <ReactPlayer
                        className="trusat__video"
                        url="https://www.youtube.com/watch?v=H-J7zngl6xE&feature=emb_title"
                        controls frameBorder="0"
                        width="100%"
                      />
                  </div>
                </div>
                <div className="col-md-12">
                  <h4>
                    Excerpts:
                  </h4>
                  <div className="project__offset--1"></div>
                </div>
                <div className="col-md-6">
                  <video className="video-snack" src={vidExplainerZoom} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                </div>
                <div className="col-md-6">
                  <video className="video-snack project__offset--1--mobile" src={vidExplainerPlan} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                </div>
                <div className="col-md-6">
                  <video className="video-snack project__offset--2 project__offset--1--mobile" src={vidExplainerCapture} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                </div>
                <div className="col-md-6">
                  <video className="video-snack project__offset--2 project__offset--1--mobile" src={vidExplainerPosat} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                </div>
            </div>
          </div>
        </section>
    </div>
    )
  }
}

export default TrusatOverview;


