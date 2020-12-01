import React from 'react';
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player/youtube"

import './Trusat.scss';


import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import imgPlaceholder from './media/trusat-placeholder.png' 
import imgPlaceholder16x9 from './media/trusat-placeholder-16x9.png' 
import imgPlaceholderDesktop from './media/trusat-placeholder-desktop.png' 
import imgDiagramProblem1 from './media/trusat-diagram-problem1.png' 
import imgDiagramProblem2 from './media/trusat-diagram-problem2.png' 
import imgDiagramProblem3 from './media/trusat-diagram-problem3.png' 
import imgDiagramHypothesis1 from './media/trusat-diagram-hypothesis1.png' 
import imgDiagramHypothesis2 from './media/trusat-diagram-hypothesis2.png' 
import imgDiagramHypothesis3 from './media/trusat-diagram-hypothesis3.png' 
import imgDiagramCentralized from './media/trusat-diagram-centralized.png' 
import imgDiagramDecentralized from './media/trusat-diagram-decentralized.png' 
import imgDiagramSolution from './media/trusat-diagram-solution.png' 


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
                    <li>Co-founder &amp; legal counsel: Brian Israel</li>  
                    <li>Lead designer: Mike Deal</li>  
                    <li>Community manager: Kim Macharia</li>  
                    <li>Product manager: Robert Keenan</li>  
                    <li>Lead frontend developer: John Gribbin</li>  
                    <li>Lead backend engineer: Kenan O'Neal</li>  
                    <li>Benefactor: Joseph Lubin</li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="trusat__section">
          <div className="trusat__section__title">
            Overview
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
                      <p>
                        <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      </p>
                    </div>
                    <div className="col-md-8">
                      <p>
                        In late 2018, the blockchain venture firm ConsenSys acquired the asteroid mining company Planetary Resources [exploji].
                      </p>
                      <p>
                        I led design on this new team. Our mission was to find applications for blockchain in the space industry to diversify, democratize, and decentralize space endeavors.
                      </p>
                      <p>
                        We focused on the high-priority issue of space sustainability, including the problem of space junk. The issue is is ripe with coordination challenges that a blochain is well-suited for, given its ability to foster cooperation between untrusting parties. We researched the incentives driving space situational awareness (SSA) to find systemic leverage points to target with software.
                      </p>
                      <p>
                        The result is TruSat, a live record of satellite behavior.
                      </p>
                      <p>
                        We first launched the TruSat Catalog to show backyard astronomers where to look in the sky to capture and submit fresh observations to the TruSat network.
                      </p>
                      <p>
                        We then began prototyping a location-based game to make the hobby of satellite tracking more accessible for space enthusiasts worldwide (think Pokemon Go for satellites). 
                      </p>
                      <p>
                        Below are designs from both apps, followed by a summary of the research driving our decisions.
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
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        A quick orientation.
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
                  <div className="row">
                    <div className="col-md-12">
                      Screenshots:
                    </div>
                    <div className="col-md-6">
                      <img src={imgPlaceholder16x9} alt="TruSat explainer video screenshot"></img>
                    </div>
                    <div className="col-md-6">
                      <img src={imgPlaceholder16x9} alt="TruSat explainer video screenshot"></img>
                    </div>
                    <div className="col-md-6">
                      <img src={imgPlaceholder16x9} alt="TruSat explainer video screenshot"></img>
                    </div>
                    <div className="col-md-6">
                      <img src={imgPlaceholder16x9} alt="TruSat explainer video screenshot"></img>
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
            <div className="trusat__section-body container">
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  <em>Pokemon Go</em> for satellites
                </h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        TruSat Mobile’s purpose is to enable anyone with a smartphone to spot satlellites and update the TruSat catalog.                      </p>
                      <p>
                        It has the challenge+reward mechanics of a location-based game, with the citizen science mission of documenting real data of observable events.                      </p>
                      <p>
                        While this case study includes mockups of this game, our team ceased development when COVID-19 hit, and the game was never launched. The product docs exist [here] as part of the broader TruSat’s open source project                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>
                        Little title
                      </h4>
                      <p>
                        TruSat tells you exactly how, when, and where to spot satellites. Log observations with your phone's camera, and join a global community of citizen scientists helping to preserve our spacefaring future.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
                        Receive an alert when an approaching sat is about to become visible to you.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
                        Follow a sat's A.R. orbit track, then snap a picture to capture an observation.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
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
                      <p>
                        TruSat uses the data from your photos to update an independent, global record satellite positions. 
                      </p>
                      <p>
                        How does it work? The low-light capabilities and astrophotography <a href="https://ai.googleblog.com/2019/11/astrophotography-with-night-sight-on.html" target="_blank">modes</a> in new smartphones enable TruSat to detect star constellations in your photos. This let's TruSat determine a satellite's position relative to the phone's GPS location. That's all the data it needs for one observation. TruSat then combines multiple observations across the planet to calculate the orbital trajectories of satellites
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
                        TruSat detects the sat's position based on its back-drop of star constellations.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
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
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Users without access to low-light-friendly phones or DSLR cameras can still capture valuable SSA data.
                      </p>
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
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        TruSat points users to the highest priority satellites for SSA analysis.
                      </p>
                      <p>
                        Some prioritization occurs algorithmically, based on factors like time since last observation.
                      </p>
                      <p>
                        Other prioritization comes from SSA industry partners who can task the network with missions to focus efforts on specific satellites most in need of data.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
                        Capture sats from the hit list of highest priorities to earn bigger bounties.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                      <p>
                        Join SSA industry partners in missions to capture valuable data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                        </div>
                        <div className="col-md-6">
                          <img src={imgPlaceholder} alt="TruSat mobile app screenshot"></img>
                        </div>
                        <div className="col-md-12">
                          <p>
                            Every satellite is a technical achievement with its own backstory. Reading about these missions is a quick way for the Space Dreamer persona learn about the space industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Satellites as collectibles
                      </p>
                      <p>
                        Observers earn badges to prove they've captured satellites. Some satellites are consistently easier to spot, while others can go unseen for months. 
                      </p>
                      <p>
                        Observers  with stronger reputation scores have greater influence over the system. Voting power in the decentralized governance of the network can be tied in part to a voter's track record of observations.
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
            <div className="trusat__section-body container">
              <div className="trusat__subsection row">
                  <div className="col-md-6">
                    <p>
                      TruSat Mobile’s purpose is to enable anyone with a smartphone to spot satlellites and update the TruSat catalog.
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
                        <h4>
                          Catalog home
                        </h4>
                      </p>
                      <p>
                        TruSat's catalog includes every publicly known object orbiting Earth (including classified satellites and space junk). It determines which satellites are the highest priorities in need of new observations.
                      </p>
                      <p>
                        The catalog provides backyard astronomers with data they can run in free desktop software to point their telescopes and camera rigs at the sky to collect new observations. 
                      </p>
                    </div>
                    <div className="col-md-9">
                      <img src={imgPlaceholderDesktop} alt="TruSat catalog screenshot"></img>
                    </div>
                  </div>
                  <div className="row trusat__subsection">
                    <div className="col-md-9">
                      <img src={imgPlaceholderDesktop} alt="TruSat object page screenshot"></img>
                    </div>
                    <div className="col-md-3">
                      <p>
                        <h4>
                          Objects
                        </h4>
                      </p>
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
                      <p>
                        <h4>
                          Profiles
                        </h4>
                      </p>
                      <p>
                        TruSat keeps track of each observer's collections of captured satellites.
                      </p>
                      <p>
                        This gives satellite trackers an alternative to the manual spreadsheet methods many currently use to keep track of their observation data. 
                      </p>
                    </div>
                    <div className="col-md-9">
                      <img src={imgPlaceholderDesktop} alt="TruSat profile page screenshot"></img>
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
                      <img src={imgPlaceholderDesktop} alt="TruSat Learning Hub screenshot"></img>
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
                </h3>
                <div className="project__image-stack">
                  <img src={imgPlaceholderDesktop} alt="TruSat landing page excerpt"></img>
                  <img src={imgPlaceholderDesktop} alt="TruSat landing page excerpt"></img>
                  <img src={imgPlaceholderDesktop} alt="TruSat landing page excerpt"></img>
                  <img src={imgPlaceholderDesktop} alt="TruSat landing page excerpt"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusat__section">
          <div className="trusat__section__title">
            Research
          </div>
          <div className="trusat__section__body">
            <div className="trusat__section-body container">
              <div className="trusat__subsection row">
                <div className="col-md-6">
                  <p>
                    Read on to learn about the systemic issue at the heart of space junk—and our plan to fix it.                    </p>
                </div>
              </div>
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  A big problem
                </h3>
                <p>
                  The space around Earth is about to get very congested.
                </p>
                <div className="container">
                  <div className="row trusat__subsection">
                    <div className="col-md-8">
                      <img src={imgDiagramProblem1} alt="Diagram of 25x increase"></img>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong>In the next decade, satellites will multiply by 25x.</strong> This will enable global internet access (which is awesome), but this pace of growth is outrunning our ability to prevent satellite collisions.
                      </p>
                    </div>
                  </div>
                  <div className="row trusat__subsection">
                    <div className="col-md-8">
                      <img src={imgDiagramProblem2} alt="Diagram of Kessler syndrome"></img>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong>Satellite collisions could trap humans on Earth.</strong> A chain reaction of collisions could trigger an exponentially thickening cage of debris. This is called the Kessler syndrome.
                      </p>
                    </div>
                  </div>
                  <div className="row trusat__subsection">
                    <div className="col-md-4">
                      <img src={imgDiagramProblem3} alt="Diagram of international coordination challenges"></img>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong>Ensuring sustainable operations is very hard.</strong> It costs satellite operators more in the short-term to follow sustainability measures. And there's little regulatory penalty if they don't. It's one big tragedy of the commons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trusat__subsection">
                <h3 className="project__section-title">
                  The missing piece
                </h3>
                <p>
                  The space around Earth is about to get very congested.
                </p>
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
                  <div className="row">
                    <div className="start-md-4 col-md-8">
                      <div className="note">
                        <p>
                          Governments and commercial data providers for SSA keep data private due to security and business interests. Even if they released more data, the world would have to trust it on good faith.
                        </p>
                        <p>
                          If we have data that all parties can trust to be open and accurate, in-orbit behavior can be measured and regulated, raising costs for unsustainable operations. This would better align an operator's economic incentives with the long-term sustainability of space.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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


