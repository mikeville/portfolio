import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './About.scss';

function About() {
    return (
        <div className="About">
            <a name="about-anchor"></a>
            <div className="container about__container">
                <div className="row about__header">
                    <div className="col-xs-12">
                        <a href="#top-anchor">Work</a>
                    </div>
                </div>
                <div className="row about__section about__section--contact">
                    <div className="col-xs-12 about__section__title">
                        Get in touch
                    </div>
                    <div className="col-xs-12">
                        <div className="row about__section__content">
                            <div className="col-md-6">
                                thedeal@gmail.com
                            </div>
                            <div className="col-md-6 contact-icon-container">
                                <div className="contact-icon">
                                    x
                                </div>
                                <div className="contact-icon">
                                    x
                                </div>
                                <div className="contact-icon">
                                    x
                                </div>
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
                        Ahoy! I'm a Seattle-born, Brooklyn-based design director searching for new ways to spread info and ideas that increase our well being.                        </p>
                        <p>
                        I have 11 years of experience serving a range of audiences and organizations. I design holistically—balancing user needs with business goals, and merging product with brand to create useful tools with impactful stories. I love working with others to solve complex puzzles in uncharted waters.                        </p>
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
                            <ul className="col-sm-6 col-lg-3">
                                <li>Selected press for personal work</li>
                                <li>New York Times</li>
                                <li>Kanye West</li>
                                <li>Guardian</li>
                                <li>Newsweek</li>
                                <li>Gawker</li>
                                <li>FastCo</li>
                                <li>Deadspin</li>
                                <li>Kottke</li>
                                <li>Brainpickings</li>
                            </ul>
                            <ul className="col-sm-6 col-lg-3">
                                <li>Exhibited</li>
                                <li>Aquarium Tropical, Paris, Baleinopolis (2020)</li>
                                <li>Museum of Modern Art, New York City, Talk to Me (2011)</li>
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
                <div className="row about__header">
                    <div className="col-xs-12">
                        <a href="#top-anchor">Back to top</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;