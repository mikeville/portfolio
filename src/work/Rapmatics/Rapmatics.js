import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import '../../Project.scss';
import './Rapmatics.scss';

import imgCanIKickIt from './media/rapmatic--animated--can-i-kick-it.gif' 
import imgGiveItToMe from './media/rapmatic--give-it-to-me-800.gif' 
import imgSoWhatchaWant from './media/rapmatic--watchoo-want-800.gif' 
import imgPartyUp from './media/rapmatic--party-up-800.01b72abd--2021update2.gif' 
import imgTheWorldIsYours from './media/rapmatic--the-world-is-yours-800.gif' 
import imgWorkIt from './media/rapmatic--animated--work-it.gif' 
import imgIzzo from './media/rapmatic--animated--hova.gif' 
import imgTheBridgeIsOver from './media/rapmatic--animated--bridge-is-over.gif' 
import imgChildrensStory from './media/rapmatic--animated--knockem-out.gif' 
import imgNextEpisode from './media/rapmatic--animated--next-episode.gif' 
import imgShimmyShimmyYa from './media/rapmatic--animated--shimmy.gif' 


class Rapmatics extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

componentDidMount() {
  window.scrollTo(0, 0);
}

render() {
  return (
      <div className="Project Rapmatics">
        <Helmet>
          <title>Mike Deal: Rapmatics</title>
        </Helmet>
        <ProjectHeader />        
        <div className="project__body">
          <div className="project__intro-wrapper">
            <div className="project__intro container">
              <h1 className="project__title">Rapmatics</h1>
              <h2 className="project__subtitle">Lyric maps</h2>
              <div class="container project__info">
                <div className="row">
                  <div className="col-md-7 body-copy">
                    <p>
                      Music has many properties (pitch, rhythm, tempo, etc), but repetition is what makes something <em>feel</em> musical.
                    </p>
                    <p>
                      These doodles are a tribute to patterns of repetition and poetic structure in hip hop.
                    </p>
                  </div>
                  <div className="col-xs-10 col-md-3 start-md-9 note">
                    <p className="note__title">
                      Further reading
                    </p>
                    <ul className="credit-list">
                      <li><a href="http://www.ethanhein.com/wp/2014/repetition-defines-music/" target="_blank">Repetition defines music</a> <span className="nobr">&mdash;Ethan Hein</span></li>  
                      <li><a href="https://www.youtube.com/watch?v=uTINOGFv-Dw" target="_blank">Repetition begets awareness</a> <span className="nobr">&mdash;Weezy F. Baby</span></li>  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project__content">
            <div className="rapmatic-container bg--green">
              <div className="container">
                <div className="row">
                  <img className="start-md-4 col-md-6" src={imgCanIKickIt} alt="lyric diagram for `Can I Kick It`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--red">
              <div className="container">
                <div className="row">
                  <img className="start-md-4 col-md-6" src={imgGiveItToMe} alt="lyric diagram for `Give It To Me`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--yellow">
              <div className="container">
                <div className="row">
                  <img className="start-md-1 col-md-6" src={imgSoWhatchaWant} alt="lyric diagram for `So What'cha Want`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--red">
              <div className="container">
                <div className="row">
                  <img className="start-md-3 col-md-6" src={imgPartyUp} alt="lyric diagram for `Party Up`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--green the-world-is-yours">
              <div className="container">
                <div className="row">
                  <img className="start-md-2 col-md-6" src={imgTheWorldIsYours} alt="lyric diagram for `The World Is Yours`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--yellow">
              <div className="container">
                <div className="row">
                  <img className="start-md-3 col-md-6" src={imgWorkIt} alt="lyric diagram for `Work It`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--green">
              <div className="container">
                <div className="row">
                  <img className="start-md-2 col-md-6" src={imgIzzo} alt="lyric diagram for `Izzo`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--red bridge-over">
              <div className="container">
                <div className="row">
                  <img className="start-md-4 col-md-6" src={imgTheBridgeIsOver} alt="lyric diagram for `The Bridge Is Over`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--yellow">
              <div className="container">
                <div className="row">
                  <img className="start-md-3 col-md-6" src={imgChildrensStory} alt="lyric diagram for `Children's Story`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--green">
              <div className="container">
                <div className="row">
                  <img className="start-md-3 col-md-6" src={imgNextEpisode} alt="lyric diagram for `Next Episode`"></img>
                </div>
              </div>
            </div>
            <div className="rapmatic-container bg--yellow">
              <div className="container">
                <div className="row">
                  <img className="start-md-1 col-md-6" src={imgShimmyShimmyYa} alt="lyric diagram for `Shimmy Shimmy Ya`"></img>
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


export default Rapmatics;