import React from 'react';
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
            artist: "REM",
            song: "Man on the Moon",
            image: imgArtist1
          },
          {
            artist: "Superorganism",
            song: "asdfasdfasdfasd",
            image: imgArtist1
          },
          {
            artist: "Jamila Woods",
            song: "asdfsdf",
            image: imgArtist1
          }
        ],
        show: false
    }
  }


  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
  }

  render() {
    return (
      <div className="Project VCB">
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
                  <div className="col-md-3 start-md-9 note">
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
              <Modal onClose={this.showModal} show={this.state.show}>
                <iframe className="embedly-embed w-lightbox-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_pg_yD57bW0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_pg_yD57bW0&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_pg_yD57bW0%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube" width="940" height="528" scrolling="no" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>
              </Modal>
              {this.state.episodes.map((episode) =>
                <div onClick={ e => {this.showModal(); }} >
                  <VcbThumb artist={episode.artist} song={episode.song} image={episode.image} />
                </div>
              )}
            </div>
          </div>
          <ProjectFooter />
        </div>
      </div>
    )
  }

}


export default Vcb;
