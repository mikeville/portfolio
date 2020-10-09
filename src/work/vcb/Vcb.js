import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';

const episodes = [
  {
    artist: "REM",
    song: "Man on the Moon",
    image: "imageURL"
  },
  {
    artist: "Superorganism",
    song: "asdfasdfasdfasd",
    image: "imageURL"
  },
  {
    artist: "Jamila Woods",
    song: "asdfsdf",
    image: "imageURL"
  }
]

const episodeList = episodes.map((episode) =>
  <div className="Vcb">
    <div>{episode.image}</div>
    <div>{episode.artist}</div>
    <div>{episode.song}</div>
  </div>
  );

class Vcb extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

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
              {episodeList}
            </div>
          </div>
          <ProjectFooter />
        </div>
      </div>
    )
  }

}


export default Vcb;