import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Modal from './../Modal';
import './About.scss';

import { FaInstagram, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

import imgBeatlesNewsweek from './media/beatles-newsweek-181106.jpg' 
import imgPinterestCandy from './media/IMG_0513-650x487.jpeg' 
import imgKanyeMonsterTweet from './media/kanye-tweet-monster-vid.jpg' 
import imgMomaTalkToMe from './media/moma-ge.jpg' 
import imgTronReference from './media/tron.jpg' 


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          content: [
            {
              recognition: "The home energy calculator I worked on with Lisa Strausfeld and team was shown in the MoMa’s ‘Talk To Me’ exhibition.",
              img: imgMomaTalkToMe
            },
            {
              recognition: "Tim Heintzelman and I made a video of muppets lip syncing Kanye West’s ‘Monster.’",
              img: imgKanyeMonsterTweet
            },
            {
              recognition: "The Pinterest logo has been baked into many sweet foods.",
              img: imgPinterestCandy
            },
            {
              recognition: "A scene from Tron Legacy references one of the Charting the Beatles graphics.",
              img: imgTronReference
            },
            {
              recognition: "Newsweek comissioned a new graphc in my Charting the Beatles series.",
              img: imgBeatlesNewsweek
            }
          ],
          activeContent: "tbd"
        }
    }
  
    showModal(content, e) {
        this.setState({
        activeContent: content,
        show: !this.state.show
        });
    };
  
    
    render() {
        return (
            <div  id="about" className="About">
                <a name="about-anchor"></a>
                <div className="container about__container">
                    <div className="row about__header">
                        <div className="col-xs-12">
                            <Link className="about__work-link" to="/#work"><span className="about__work-link__icon"><FaArrowUp/></span> Work</Link>
                        </div>
                    </div>
                    <div className="row about__section about__section--contact">
                        <div className="col-xs-12 about__section__title">
                            Get in touch
                        </div>
                        <div className="col-xs-12">
                            <div className="row about__section__content">
                                <div className="col-md-12">
                                    <div className="contact-icon">
                                        <a href="https://www.linkedin.com/in/mikedeal/" target="_blank"><FaLinkedin/></a>
                                    </div>
                                    <div className="contact-icon">
                                        <a href="https://www.instagram.com/michaelvision/" target="_blank"><FaInstagram/></a>
                                    </div>
                                    <div className="contact-icon">
                                        <a href="https://twitter.com/dealville" target="_blank"><FaTwitter/></a>
                                    </div>
                                    <a href="mailto:thedeal@gmail.com" target="_blank">thedeal@gmail.com  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row about__section about__section--bio">
                        <div className="col-xs-12 about__section__title">
                            Bio
                        </div>
                        <div className="col-xs-12 col-md-10 about__section__content">
                            <p>
                            Ahoy! I'm a Seattle-born, Brooklyn-based design director searching for new ways to spread info and ideas that increase our well being.
                            </p>
                            <p>
                            I have 11 years of experience serving a range of audiences and organizations. I design holistically—balancing user needs with business goals, and merging product with brand to create useful tools with impactful stories. I love working with others to solve complex puzzles in uncharted waters. Long live the funk.
                            </p>
                        </div>
                    </div>
                    <div className="row about__section about__section--services">
                        <div className="col-xs-12 about__section__title">
                            Services
                        </div>
                        <div className="col-xs-12 about__section__content">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Creative direction</li>
                                        <li>Product design and UX</li>
                                        <li>Design strategy</li>
                                        <li>Design systems</li>
                                        <li>Prototyping</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Presentation design</li>
                                        <li>Explainer videos</li>
                                        <li>Branded content</li>
                                        <li>Data visualization</li>
                                        <li>Infographics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row about__section about__section--clients">
                        <div className="col-xs-12 about__section__title">
                            Former teams
                        </div>
                        <div className="col-xs-12 about__section__content">
                            <div className="row">
                                <ul className="col-sm-4">
                                    <li>Vice News</li>
                                    <li>Pentagram</li>
                                </ul>
                                <ul className="col-sm-4">
                                    <li>Google Creative Lab</li>
                                    <li>Splice</li>
                                </ul>
                                <ul className="col-sm-4">
                                    <li>Local Projects</li>
                                    <li>ConsenSys</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row about__section about__section--clients">
                        <div className="col-xs-12 about__section__title">
                            Clients
                        </div>
                        <div className="col-xs-12 about__section__content">
                            <div className="row">
                                <ul className="col-sm-4">
                                    <li>Medium</li>
                                    <li>Pinterest</li>
                                    <li>SuperRare</li>
                                </ul>
                                <ul className="col-sm-4">
                                    <li>Newsweek</li>
                                    <li>Businessweek</li>
                                    <li>Fast Company</li>
                                </ul>
                                <ul className="col-sm-4">
                                    <li>Universal Music</li>
                                    <li>Umbro</li>
                                    <li>Information Is Beautiful</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row about__section about__section--recognition">
                        <div className="col-xs-12 about__section__title">
                            Recognition
                        </div>
                        <div className="col-xs-12 about__section__content">
                            <div className="row">
                                <ul className="col-sm-6 col-lg-3 about__modal-links">
                                    <li>Highlights</li>
                                    <li onClick={(e) => this.showModal(this.state.content[0], e)}>Hung in the Museum of Modern Art</li>
                                    <li onClick={(e) => this.showModal(this.state.content[1], e)}>Tweeted by Kanye</li>
                                    <li onClick={(e) => this.showModal(this.state.content[2], e)}>Baked into candy</li>
                                    <li onClick={(e) => this.showModal(this.state.content[3], e)}>Referenced in <em>Tron: Legacy</em></li>
                                    <li onClick={(e) => this.showModal(this.state.content[4], e)}>Personal work printed in <em>NY Times</em>, <em>Newsweek</em>, <em>National Geographic</em>, and others</li>

                                </ul>
                                <ul className="col-sm-6 col-lg-3">
                                    <li>Other exhibitions</li>
                                    <li>Aquarium Tropical, Paris, Baleinopolis (2020)</li>
                                    <li>AIGA Design Archives (2010)</li>
                                </ul>
                                <ul className="col-sm-6 col-lg-3">
                                    <li>Awards</li>
                                    <li>(3x) Society for News Design 39 (2017)</li>
                                    <li>Society for News Design 38 (2016)</li>
                                    <li>Motion Awards: News Graphics (2016)</li>
                                    <li>Y-Combinator semi-finalist (2014)</li>
                                    <li>HOW Magazine Best Logotype (2011)</li>
                                    <li>Type Directors Club Certification of Excellence (2011)</li>
                                    <li>AIGA 365: Design Effectiveness (2011)</li>
                                </ul>
                                <ul className="col-sm-6 col-lg-3">
                                    <li>Speaking</li>
                                    <li>New York Creative Tech Week (2016)</li>
                                    <li>Sci Viz Conference (2016)</li>
                                    <li>Art &amp; Science of Whales, Icahn School of Medicine (2016)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row about__footer">
                        <div className="col-xs-12 col-md-6">
                            Check out my partner <a href="http://megmake.com" target="_blank">Meg</a> for more creative direction and brand strategy.
                        </div>
                        <div className="col-xs-12 col-md-6 about__back-to-top">
                            <a onClick={window.scrollTo(0, 0)} href="#top-anchor"><span className="about__work-link__icon"><FaArrowUp/></span> Back to top</a>
                        </div>
                    </div>
                </div>
                <Modal onClose={this.showModal.bind(this)} show={this.state.show}>
                    <img src={this.state.activeContent.img} alt={this.state.activeContent.recognition}></img>
                    <p className="Modal__caption">{this.state.activeContent.recognition}</p>
                </Modal>

            </div>
        );
    };
};

export default About;