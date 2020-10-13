import React from 'react';
import ReactPlayer from "react-player/youtube"

import './Vcb.scss';

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import Modal from '../../Modal';
import VcbThumb from './VcbThumb';

import imgArtist1 from './media/vcbTempThumb.png' 

class Vcb extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        episodes: [
          {
            artist: "Jamila Woods",
            song: "Eartha",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/eb-4fn0yLwA"
          },
          {
            artist: "Drugdealer",
            song: "Fools",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/_pg_yD57bW0"
          },
          {
            artist: "Nakhane",
            song: "Interloper",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/KuVXE3iNnkI"
          },
          {
            artist: "Flying Lotus ft. Andderson .Paak",
            song: "More",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/eb-4fn0yLwA"
          },
          {
            artist: "Superorganism",
            song: "Everybody Wants to Be Famous",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/_pg_yD57bW0"
          },
          {
            artist: "R.E.M.",
            song: "Man on the Moon",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/KuVXE3iNnkI"
          },
          {
            artist: "Toro Y Moi",
            song: "Freelance",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/eb-4fn0yLwA"
          },
          {
            artist: "Deerhunter",
            song: "Plains",
            image: imgArtist1,
            url: "https://www.youtube.com/embed/_pg_yD57bW0"
          },
          {
            artist: "Christian Scott aTunde  Adjuah",
            song: "Ancestral Recall",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "Lily & Madeleine",
            song: "Can't Help the Way I Feel",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "Andrew Bird",
            song: "Sisyphus",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "Justice",
            song: "Love S.O.S. (WWW)",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
          },
          {
            artist: "ARTIST",
            song: "SONG",
            image: imgArtist1,
            url: "URL"
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
        <div>
          <ProjectHeader />
          <div className="project__body container">
            <div className="project__intro">
              <h1 className="project__title">Verse Chorus Bridge</h1>
              <h2 className="project__subtitle">Client: Vice News</h2>
              <h2 className="project__subtitle">Role: Art direction, design, animation</h2>
              <div className="container project__info">
                <div className="row">
                  <div className="col-md-7 body-copy">
                    <p>
                    A series of over 30 interviews with musicians about their songwriting process for Vice News Tonight on HBO. I designed and animated music visualizations, using patterns of tiles to illustrate the layers of sound the artists describe.
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
