import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CoverHeader from './CoverHeader'
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
                </Link>
            </section>
            <section className="cover">
                <a href="https://trusat.org/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="TruSat" role="Role goes heeeere" />
                    </div>
                    <CoverTrusat />
                </a>
            </section>
            <section className="cover">
                <a href="https://informationisbeautiful.net/beautifulnews/"  target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Beautiful News" role="Role goes heeeere" />
                    </div>
                    <CoverBeautifulNews />
                </a>
            </section>
            <section className="cover">
                <Link to="/work/pinterest/pinterest">
                    <div className="cover__header">
                        <CoverHeader project="Pinterest Identity" role="Role goes heeeere" />
                    </div>
                    <CoverPinterest />
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vicenews/vicenews">
                    <div className="cover__header">
                        <CoverHeader project="Vice News" role="Role goes heeeere" />
                    </div>
                    <CoverViceNews />
                </Link>
            </section>
            <section className="cover">
                <a href="https://splice.com/features/sounds" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Splice" role="Role goes heeeere" />
                    </div>
                    <CoverSplice />
                </a>
            </section>
            <section className="cover">
                <Link to="/work/whales/whales">
                    <div className="cover__header">
                        <CoverHeader project="Whale Song Explained" role="Role goes heeeere" />
                    </div>
                    <CoverWhales />
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/rapmatics/rapmatics">
                    <div className="cover__header">
                        <CoverHeader project="Rapmatics" role="Role goes heeeere" />
                    </div>
                    <CoverRapmatics />
                </Link>
            </section>
            <section className="cover">
                <a href="http://pollenmagazine.com/001" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Pollen" role="Role goes heeeere" />
                    </div>
                    <CoverPollen />
                </a>
            </section>
            <section className="cover">
                <Link to="/work/obamalegacy/obamalegacy">
                    <div className="cover__header">
                        <CoverHeader project="Obama's Legacy" role="Role goes heeeere" />
                    </div>
                    <CoverObamaLegacy />
                </Link>
            </section>
            <section className="cover">
                <a href="https://statlas.co/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Statlas" role="Role goes heeeere" />
                    </div>
                    <CoverStatlas />
                </a>
            </section>
            <section className="cover">
                <a href="https://chartingthebeatles.net/" target="_blank">
                    <div className="cover__header">
                        <CoverHeader project="Charting the Beatles" role="Role goes heeeere" />
                    </div>
                    <CoverBeatles />
                </a>
            </section>
            <section className="cover">
                <div>
                    <div className="cover__header">
                        <CoverHeader project="Billboard Redesign" role="Role goes heeeere" />
                    </div>
                    <CoverBillboard />
                </div>
            </section>
            <section className="cover">
                <Link to="/work/umbro/umbro">
                    <div className="cover__header">
                        <CoverHeader project="Umbro" role="Role goes heeeere" />
                    </div>
                    <CoverUmbro />
                </Link>
            </section>
            <section className="cover">
                <div>
                    <div className="cover__header">
                        <CoverHeader project="Google Creative Lab" role="Role goes heeeere" />
                    </div>
                    <CoverGoogleCreativeLab />
                </div>
            </section>
            <section className="cover">
                <Link to="/work/businessweek/businessweek">
                    <div className="cover__header">
                        <CoverHeader project="Businessweek" role="Role goes heeeere" />
                    </div>
                    <CoverBusinessweek />
                </Link>
            </section>
        </div>
    );
    }

}

export default Work;