import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CoverHeader from './CoverHeader'
import CoverCaption from './CoverCaption'
import './Work.scss';

import CoverVcb from './work/Vcb/CoverVcb';
import CoverTrusat from './work/Trusat/CoverTrusat';
import CoverBeautifulNews from './work/BeautifulNews/CoverBeautifulNews';
import CoverViceNews from './work/ViceNews/CoverViceNews';
import CoverSplice from './work/Splice/CoverSplice';
import CoverWhales from './work/Whales/CoverWhales';
import CoverPinterest from './work/Pinterest/CoverPinterest';
import CoverRapmatics from './work/Rapmatics/CoverRapmatics';
import CoverPollen from './work/Pollen/CoverPollen';
import CoverObamaLegacy from './work/ObamaLegacy/CoverObamaLegacy';
import CoverStatlas from './work/Statlas/CoverStatlas';
import CoverBeatles from './work/Beatles/CoverBeatles';
import CoverBillboard from './work/Billboard/CoverBillboard';
import CoverUmbro from './work/Umbro/CoverUmbro';
import CoverGoogleCreativeLab from './work/GoogleCreativeLab/CoverGoogleCreativeLab';
import CoverBusinessweek from './work/Businessweek/CoverBusinessweek';




class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleTestClick = this.handleTestClick.bind(this);
    }



    handleTestClick() {
        console.log("hello click worked")
    }

    render() {
    return (
        <div className="Work">
            <section className="cover">
                <Link to="/work/vcb/vcb">
                    <div className="cover__header">
                        <CoverHeader project="Verse Chorus Bridge" role="Role goes heeeere" />
                    </div>
                    <CoverVcb />
                    <CoverCaption>
                        Art direction and animation for 30 interviews with musicians, visualizing the musical layers and songwriting process.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <a href="https://trusat.org/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="TruSat" role="Role goes heeeere" />
                    </div>
                    <CoverTrusat />
                    <CoverCaption>
                        Creative direction and product design for TruSat, the independent catalog of satellites—a volunteer-led project to promote space sustainability.
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <a href="https://informationisbeautiful.net/beautifulnews/"  target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Beautiful News" role="Role goes heeeere" />
                    </div>
                    <CoverBeautifulNews />
                    <CoverCaption>
                        Various visual data stories for <em><a href="https://informationisbeautiful.net/beautifulnews/" target="_blank">Beautiful News</a></em>, highlighting positive trends across our planet.
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <Link to="/work/pinterest/pinterest">
                    <div className="cover__header">
                        <CoverHeader project="Pinterest Identity" role="Role goes heeeere" />
                    </div>
                    <CoverPinterest />
                    <CoverCaption>
                        Brand identity for Pinterest, designed in collaboration with the amazing <a href="https://carlospagan.com/portfolio/pinterest" target="_blank">Juan Carlos Pagan</a>.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vicenews/vicenews">
                    <div className="cover__header">
                        <CoverHeader project="Vice News" role="Role goes heeeere" />
                    </div>
                    <CoverViceNews />
                    <CoverCaption>
                        I served as Design Director at <em>Vice News</em> through the conception and launch of <em>Vice News Tonight on HBO</em>, the rebuilding of ViceNews.com, and the design of two years of daily graphic content for TV and web.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <a href="https://splice.com/features/sounds" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Splice" role="Role goes heeeere" />
                    </div>
                    <CoverSplice />
                    <CoverCaption>
                        I designed Splice Sounds from concept to launch&emdash;a Spotify-like platform for musicians to distribute and collect audio samples. The product has been the central engine for Splice's growth and 9-figure valuation.
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <Link to="/work/whales/whales">
                    <div className="cover__header">
                        <CoverHeader project="Whale Song Explained" role="Role goes heeeere" />
                    </div>
                    <CoverWhales />
                    <CoverCaption>
                        A graphic notation system for transcribing humpback whale songs to reveal their musical structure. Published in <em><a href="http://opinionator.blogs.nytimes.com/2014/10/05/how-to-make-music-with-a-whale/" target="_blank">The New York Times</a></em> and <em>The Wire</em> magazine. Exhibited at <em>Aquarium Tropical, Paris, Baleinopolis</em>.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/rapmatics/rapmatics">
                    <div className="cover__header">
                        <CoverHeader project="Rapmatics" role="Role goes heeeere" />
                    </div>
                    <CoverRapmatics />
                    <CoverCaption>
                        A series of lyrical diagrams
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <a href="http://pollenmagazine.com/001" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Pollen" role="Role goes heeeere" />
                    </div>
                    <CoverPollen />
                    <CoverCaption>
                        Design and illustration for a book of essays, poetry, and short fiction. All illustrations are collages cut from photos of the dioramas in the American Museum of Natural History.
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <Link to="/work/obamalegacy/obamalegacy">
                    <div className="cover__header">
                        <CoverHeader project="Obama's Legacy" role="Role goes heeeere" />
                    </div>
                    <CoverObamaLegacy />
                    <CoverCaption>
                        This three-part series of animations discusses Obama's long-term impact in the categories of energy, military strategy, and criminal justice. It aired on HBO over three nights during his final week in office.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <a href="https://statlas.co/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Statlas" role="Role goes heeeere" />
                    </div>
                    <CoverStatlas />
                    <CoverCaption>
                        In 2013 I quit my day job to build a baseball news app with live infographic coverage of every MLB game. A stripped down version still exists <a href="http://statlas.co" target="_blank" >here</a>
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <a href="https://chartingthebeatles.net/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Charting the Beatles" role="Role goes heeeere" />
                    </div>
                    <CoverBeatles />
                    <CoverCaption>
                        A study of the Beatles through data visualization. Published in <em>National Geographic, Newsweek, Understanding the World </em>(Taschen), <em>Atlas of Knowledge </em>(MIT Press), <em>Data Visualisation: A Handbook for Data-Driven Design, </em>and others. Featured on <a href="http://gawker.com/5451795/there-are-probably-some-beatles-lyrics-to-describe-this" target="_blank"><em>Gawker</em></a><em>, </em><a href="http://www.brainpickings.org/2010/01/19/charting-the-beatles/" target="_blank"><em>Brain Pickings</em></a><em>, </em><a href="http://www.theguardian.com/news/datablog/2012/oct/05/beatles-charts-infographics" target="_blank"><em>The Guardian</em></a><em>, </em><a href="http://kottke.org/10/01/beatles-infographics" target="_blank"><em>Kottke</em></a><em>, </em>and others.
                    </CoverCaption>
                </a>
            </section>
            <section className="cover">
                <div>
                    <div className="cover__header">
                        <CoverHeader project="Billboard Charts redesign" role="Role goes heeeere" />
                    </div>
                    <CoverBillboard />
                    <CoverCaption>
                        An updated design system for the authoritative resource on the music business. Designed w/ Michael Bierut's team at Pentagram.
                    </CoverCaption>
                </div>
            </section>
            <section className="cover">
                <Link to="/work/umbro/umbro">
                    <div className="cover__header">
                        <CoverHeader project="Umbro World Cup visualization" role="Role goes heeeere" />
                    </div>
                    <CoverUmbro />
                    <CoverCaption>
                        A visual language for soccer highlights. Umbro covered the World Cup with post-game recaps, pairing this graphic system with their commentary.
                    </CoverCaption>
                </Link>
            </section>
            <section className="cover">
                <div>
                    <div className="cover__header">
                        <CoverHeader project="Google Creative Lab" role="Role goes heeeere" />
                    </div>
                    <CoverGoogleCreativeLab />
                    <CoverCaption>
                        I spent a year at Google working on product design R&amp;D, and campaigns for projects like <a href="https://loon.co/" target="_blank" class="link--default">Loon</a>&emdash;Alphabet&#x27;s internet balloon moonshot.
                    </CoverCaption>
                </div>
            </section>
            <section className="cover">
                <Link to="/work/businessweek/businessweek">
                    <div className="cover__header">
                        <CoverHeader project="Businessweek special issue" role="Role goes heeeere" />
                    </div>
                    <CoverBusinessweek />
                    <CoverCaption>
                        I led the research and execution of a suite of graphic stories for a Businessweek special issue, exploring the lingering ripple effects of the 2008 financial collapse.
                    </CoverCaption>
                </Link>
            </section>
        </div>
    );
    }

}

export default Work;