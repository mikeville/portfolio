import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CoverHeader from './CoverHeader'

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
import './Work.scss';



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
                    <div className="cover__body">
                        <CoverVcb />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vcb/vcb">
                    <div className="cover__header">
                        <CoverHeader project="TruSat" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverTrusat />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/beautifulnews/beautifulnews">
                    <div className="cover__header">
                        <CoverHeader project="Beautiful News" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverBeautifulNews />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/pinterest/pinterest">
                    <div className="cover__header">
                        <CoverHeader project="Pinterest Identity" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverPinterest />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vicenews/vicenews">
                    <div className="cover__header">
                        <CoverHeader project="Vice News" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverViceNews />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/splice/splice">
                    <div className="cover__header">
                        <CoverHeader project="Splice" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverSplice />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/whales/whales">
                    <div className="cover__header">
                        <CoverHeader project="Whale Song Explained" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverWhales />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/rapmatics/rapmatics">
                    <div className="cover__header">
                        <CoverHeader project="Rapmatics" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverRapmatics />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/pollen/pollen">
                    <div className="cover__header">
                        <CoverHeader project="Pollen" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverPollen />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/obamalegacy/obamalegacy">
                    <div className="cover__header">
                        <CoverHeader project="Obama's Legacy" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverObamaLegacy />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/statlas/statlas">
                    <div className="cover__header">
                        <CoverHeader project="Statlas" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverStatlas />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/beatles/beatles">
                    <div className="cover__header">
                        <CoverHeader project="Charting the Beatles" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverBeatles />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/billboard/billboard">
                    <div className="cover__header">
                        <CoverHeader project="Billboard Redesign" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverBillboard />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/umbro/umbro">
                    <div className="cover__header">
                        <CoverHeader project="Umbro" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverUmbro />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/googlecreativelab/googlecreativelab">
                    <div className="cover__header">
                        <CoverHeader project="Google Creative Lab" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverGoogleCreativeLab />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/businessweek/businessweek">
                    <div className="cover__header">
                        <CoverHeader project="Businessweek" role="Role goes heeeere" />
                    </div>
                    <div className="cover__body">
                        <CoverBusinessweek />
                    </div>
                </Link>
            </section>
        </div>
    );
    }

}

export default Work;