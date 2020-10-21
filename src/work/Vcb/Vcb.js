import React from 'react';
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player/youtube"

import './Vcb.scss';

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import Modal from '../../Modal';
import VcbThumb from './VcbThumb';

import imgAndrewBird from './media/vcb-andrew_bird-cover.gif' 
import imgBroods from './media/vcb-broods-cover-3_frame.gif' 
import imgChristianScott from './media/vcb-christian_scott-cover.gif' 
import imgCourtneyBarnett from './media/vcb-courtney_barnett-cover-3_frame.gif' 
import imgDeafheaven from './media/vcb-deafheaven-cover-3_frame.gif' 
import imgDeerhunter from './media/vcb-deerhunter-cover.gif' 
import imgDrugdealer from './media/vcb-drugdealer-cover.gif'
import imgFlylo from './media/vcb-flylo-cover.gif'
import imgGrizzlyBear from './media/vcb-grizzly_bear-cover-3_frame.gif'
import imgJadenSmith from './media/vcb-jaden-cover-3_frame.gif'
import imgJamilaWoods from './media/vcb-jamila-cover.gif'
import imgJonnyMarr from './media/vcb-jonny_marr-cover-3_frame.gif'
import imgJustice from './media/vcb-justice-cover-3_frame.gif'
import imgKurtVile from './media/vcb-kurt-cover-3_frame.gif'
import imgLilMad from './media/vcb-lilmad-cover.gif'
import imgNakhane from './media/vcb-nakhane-cover.gif'
import imgPhoenix from './media/vcb-phoenix-cover-3_frame.gif'
import imgREM from './media/vcb-rem-cover-3_frame.gif'
import imgRostam from './media/vcb-rostam-cover-3_frame.gif'
import imgScreamingFemales from './media/vcb-screaming_females-cover-3_frame.gif'
import imgSnailMail from './media/vcb-snail_mail-cover-3_frame.gif'
import imgSparks from './media/vcb-sparks-cover-3_frame.gif'
import imgSuperorganism from './media/vcb-superorganism-cover-3_frame.gif'
import imgTheGoTeam from './media/vcb-the_go_team-cover-3_frame.gif'
import imgToroYMoi from './media/vcb-toro-cover.gif'
import imgUMO from './media/vcb-umo-cover-3_frame.gif'
import imgZiggyMarley from './media/vcb-ziggy-cover-3_frame.gif'

class Vcb extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        episodes: [
          {
            artist: "Jamila Woods",
            song: "Eartha",
            image: imgJamilaWoods,
            url: "https://www.youtube.com/embed/KuVXE3iNnkI"
          },
          {
            artist: "Drugdealer",
            song: "Fools",
            image: imgDrugdealer,
            url: "https://www.youtube.com/embed/KVVcwGcxY3c"
          },
          {
            artist: "Nakhane",
            song: "Interloper",
            image: imgNakhane,
            url: "https://www.youtube.com/embed/Xyuf4wbDLqA"
          },
          {
            artist: "Flying Lotus ft. Anderson .Paak",
            song: "More",
            image: imgFlylo,
            url: "https://www.youtube.com/embed/_pg_yD57bW0"
          },
          {
            artist: "Superorganism",
            song: "Everybody Wants to Be Famous",
            image: imgSuperorganism,
            url: "https://www.youtube.com/embed/wHaV77qdw6E"
          },
          {
            artist: "R.E.M.",
            song: "Man on the Moon",
            image: imgREM,
            url: "https://www.youtube.com/embed/eb-4fn0yLwA"
          },
          {
            artist: "Toro Y Moi",
            song: "Freelance",
            image: imgToroYMoi,
            url: "https://www.youtube.com/embed/hRKIqrF8sT0"
          },
          {
            artist: "Deerhunter",
            song: "Plains",
            image: imgDeerhunter,
            url: "https://www.youtube.com/embed/aUvZefdghLc"
          },
          {
            artist: "Christian Scott aTunde  Adjuah",
            song: "Ancestral Recall",
            image: imgChristianScott,
            url: "https://www.youtube.com/embed/OV2qV64V2QI"
          },
          {
            artist: "Lily & Madeleine",
            song: "Can't Help the Way I Feel",
            image: imgLilMad,
            url: "https://www.youtube.com/embed/LcXqVHJQ0vw"
          },
          {
            artist: "Andrew Bird",
            song: "Sisyphus",
            image: imgAndrewBird,
            url: "https://www.youtube.com/embed/M5xO9Q3HBv4"
          },
          {
            artist: "Justice",
            song: "Love S.O.S. (WWW)",
            image: imgJustice,
            url: "https://www.youtube.com/embed/dDD5dAHhAYc"
          },
          {
            artist: "Ziggy Marley",
            song: "Rebellion Rising",
            image: imgZiggyMarley,
            url: "https://www.youtube.com/embed/_iuzHwBJvJU"
          },
          {
            artist: "Kurt Vile",
            song: "Bassackwards",
            image: imgKurtVile,
            url: "https://www.youtube.com/embed/rCMoRgVMt8s"
          },
          {
            artist: "Broods",
            song: "Peach",
            image: imgBroods,
            url: "https://www.youtube.com/embed/qTShnaWE_N0"
          },
          {
            artist: "Unknown Mortal Orchestra",
            song: "Not in Love, We're Just High",
            image: imgUMO,
            url: "https://www.youtube.com/embed/1bGTxHwBtQ4"
          },
          {
            artist: "Courtney Barnett",
            song: "City Looks Pretty",
            image: imgCourtneyBarnett,
            url: "https://www.youtube.com/embed/lJx1CPkxj7s"
          },
          {
            artist: "Jaden Smith",
            song: "Lost Boy",
            image: imgJadenSmith,
            url: "https://www.youtube.com/embed/tHZnZs6wFqc"
          },
          {
            artist: "Screaming Females",
            song: "Glass House",
            image: imgScreamingFemales,
            url: "https://www.youtube.com/embed/cWBXaZysuT4"
          },
          {
            artist: "Sparks",
            song: "Edith Piaf (Said It Beter Than Me)",
            image: imgSparks,
            url: "https://www.youtube.com/embed/PSVpgPy4ms4"
          },
          {
            artist: "Grizzly Bear",
            song: "Neighbors",
            image: imgGrizzlyBear,
            url: "https://www.youtube.com/embed/5KaoJuFUmN4"
          },
          {
            artist: "Phoenix",
            song: "J-boy",
            image: imgPhoenix,
            url: "https://www.youtube.com/embed/jOEq7tNo7xY"
          },
          {
            artist: "Deafheaven",
            song: "Honeycomb",
            image: imgDeafheaven,
            url: "https://www.youtube.com/embed/vYTM7kbsRmM"
          },
          {
            artist: "Snail Mail",
            song: "Pristine",
            image: imgSnailMail,
            url: "https://www.youtube.com/embed/d3ZrywI6RFE"
          },
          {
            artist: "Johny Marr",
            song: "The Tracers",
            image: imgJonnyMarr,
            url: "https://www.youtube.com/embed/yD2_pErDZp8"
          },
          {
            artist: "Rostam",
            song: "Gwan",
            image: imgRostam,
            url: "https://www.youtube.com/embed/8T9LfPr6Z3k"
          },
          {
            artist: "The Go! Team",
            song: "Mayday",
            image: imgTheGoTeam,
            url: "https://www.youtube.com/embed/dGHpgjnAvGE"
          },
        ],
        show: false,
        activeEpisode: "tbd"
    }
  }

  debugger(message) {
    console.log(this.state.activeEpisode)
  }


  showModal(episode, e) {
    this.setState({
      activeEpisode: episode,
      show: !this.state.show
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
  }

  render() {
    return (
      <div className="Project Vcb">
        <Helmet>
          <title>Mike Deal: Verse Chorus Bridge</title>
        </Helmet>
        <div>
          <ProjectHeader />
          <div className="project__body container">
            <div className="project__intro-wrapper">
              <div className="project__intro">
                <h1 className="project__title">Verse Chorus Bridge</h1>
                <h2 className="project__subtitle">Art direction, design, animation</h2>
                <div className="container project__info">
                  <div className="row">
                    <div className="col-md-7 body-copy">
                      <p>
                        Between 2017 and 2019, <em>Vice News Tonight on HBO</em> ran a series of interviews with musicians about their songwriting process. I designed and animated graphics visualizing the musical layers that artists described.
                      </p>
                      <p>
                        The tight deadlines called for a graphic system that could be reused for each episode, while allowing enough flexibility to fit the unique vibe of each musician.
                      </p>
                      <p>
                        I designed visuals for 30 episodes. By the 6th episode I'd locked in a system based on tiled patterns. The illustrated lines within the tiles complement the song's sound, while the grid between the tiles provides a versatile lattice for plotting musical structure.
                      </p>
                      <p>
                        More process notes <a href="https://www.instagram.com/explore/tags/vcbprocess/" target="_blank">here</a>.
                      </p>
                    </div>
                    <div className="col-md-4 start-md-8 note">
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
                        <li>Produced by: Brendan Kennedy, Caroline Pahl, Quinton Boudwin</li>  
                        <li>Edited by: Jeb Banegas</li>  
                        <li>Phoenix and Gwan episodes animated by Tim Livezey, Sparks and The Go! Team episodes animated by Kris Cave, Grizzly Bear episode animated by Kaz Ishii</li>  
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__content">
              <div className="container">
                <div className="row">
                  {this.state.episodes.map((episode) =>
                    <div key={episode.artist} className="col-md-4" onClick={(e) => this.showModal(episode, e)} >
                      <VcbThumb artist={episode.artist} song={episode.song} image={episode.image} />
                    </div>
                  )}
                </div>
              </div>
              <Modal onClose={this.showModal.bind(this)} show={this.state.show}>
                        <ReactPlayer
                          className="Modal__video"
                          url={this.state.activeEpisode.url}
                          controls
                          // playing="true"
                          frameBorder="0"
                        />
                      </Modal>
            </div>
          </div>
          <ProjectFooter />
        </div>
      </div>
    )
  }

}


export default Vcb;
