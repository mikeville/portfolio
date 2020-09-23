import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './About.scss';



function About() {
    return (
        <div className="About">
            <div className="about__container">
                <a name="about-anchor"></a>
                <div className="about__header">
                    <a href="#top-anchor">Work</a>
                </div>
                <div className="about__section about__section--contact">
                    <div className="about__section__title">
                        Get in touch
                    </div>
                    <div className="about__section__content column-container">
                        <div className="column2">
                            thedeal@gmail.com
                        </div>
                        <div className="column2 column2--right-align">
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
                <div className="about__section about__section--bio">
                    <div className="about__section__title">
                        Bio
                    </div>
                    <div className="about__section__content">
                        Hi there. I'm a multi-disciplinary design director with 11 years of experience serving a wide range of audiences etc etc. I've taught design at the school of visual arts. I'm a multi-disciplinary design director with 11 years of experience serving a wide range of audiences etc etc. I've taught design at the school of visual arts. 
                    </div>
                </div>
                <div className="about__section about__section--services">
                    <div className="about__section__title">
                        Services
                    </div>
                    <div className="about__section__content column-container">
                        <div className="column2">
                            <ul>
                                <li>Creative direction</li>
                                <li>UX and product design</li>
                                <li>Prototyping</li>
                                <li>Design systems</li>
                            </ul>
                        </div>
                        <div className="column2">
                            <ul>
                                <li>Explainer videos</li>
                                <li>Data visualization</li>
                                <li>Infographics</li>
                                <li>Content design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about__section about__section--clients">
                    <div className="about__section__title">
                        Clients
                    </div>
                    <div className="about__section__content column-container">
                        <div className="column2">
                            <ul>
                                <li>Creative direction</li>
                                <li>UX and product design</li>
                                <li>Prototyping</li>
                                <li>Design systems</li>
                            </ul>
                        </div>
                        <div className="column2">
                            <ul>
                                <li>Explainer videos</li>
                                <li>Data visualization</li>
                                <li>Infographics</li>
                                <li>Content design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about__section about__section--recognition">
                    <div className="about__section__title">
                        Recognition
                    </div>
                    <div className="about__section__content column-container">
                        <div className="column4">
                            <ul>
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
                        </div>
                        <div className="column4">
                            <ul>
                                <li>Exhibited</li>
                                <li>Aquarium Tropical, Paris, Baleinopolis (2020)</li>
                                <li>Museum of Modern Art, New York City, Talk to Me (2011)</li>
                                <li>AIGA Design Archives (2010)</li>
                            </ul>
                        </div>
                        <div className="column4">
                            <ul>
                                <li>Awards</li>
                                <li>(3x) Society for News Design 39 (2017)</li>
                                <li>Society for News Design 38 (2016)</li>
                                <li>Motion Awards: News Graphics (2016)</li>
                                <li>Y-Combinator semi-finalist (2014)</li>
                                <li>HOW Magazine Best Logotype (2011)</li>
                                <li>Type Directors Club Certification of Excellence (2011)</li>
                                <li>AIGA 365: Design Effectiveness (2011)</li>
                            </ul>
                        </div>
                        <div className="column4">
                            <ul>
                                <li>Speaking</li>
                                <li>New York Creative Tech Week (2016)</li>
                                <li>Sci Viz Conference (2016)</li>
                                <li>Art & Science of Whales, Icahn School of Medicine (2016)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about__header">
                    <a href="#top-anchor">Back to top</a>
                </div>
            </div>

        </div>
    );
}

export default About;