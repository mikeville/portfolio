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
                    <div className="col-xs-12 about__section__content">
                        Hi there. I'm a multi-disciplinary design director with 11 years of experience serving a wide range of audiences etc etc. I've taught design at the school of visual arts. I'm a multi-disciplinary design director with 11 years of experience serving a wide range of audiences etc etc. I've taught design at the school of visual arts. 
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
                                    <li>UX and product design</li>
                                    <li>Prototyping</li>
                                    <li>Design systems</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li>Explainer videos</li>
                                    <li>Data visualization</li>
                                    <li>Infographics</li>
                                    <li>Content design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row about__section about__section--clients">
                    <div className="col-xs-12 about__section__title">
                        Clients
                    </div>
                    <div className="col-xs-12 about__section__content">
                        <div className="row">
                            <ul className="col-sm-6 col-lg-3">
                                <li>Medium</li>
                                <li>Google</li>
                                <li>Pinterest</li>
                            </ul>
                            <ul className="col-sm-6 col-lg-3">
                                <li>Pentagram</li>
                                <li>Universal Music</li>
                                <li>Umbro</li>
                            </ul>
                            <ul className="col-sm-6 col-lg-3">
                                <li>Newsweek</li>
                                <li>Businessweek</li>
                                <li>Fast Company</li>
                            </ul>
                            <ul className="col-sm-6 col-lg-3">
                                <li>Vice</li>
                                <li>Information Is Beautiful</li>
                                <li>SuperRare</li>
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