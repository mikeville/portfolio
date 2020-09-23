import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
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
            <div  onClick={this.handleTestClick}>tester</div>
            <section className="cover">
                <Link to="/work/vcb/vcb">
                    <div className="cover__header">
                        <div className="cover__header__inner-container"> 
                            <div className="cover__header__title">
                                Verse Chorus Bridge
                            </div>
                            <div className="cover__header__description">
                                Art direction, animation
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverVcb />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vcb/vcb">
                    <div className="cover__header">
                        <div className="cover__header__inner-container"> 
                            <div className="cover__header__title">
                                TruSat
                            </div>
                            <div className="cover__header__description">
                                Roles goes here
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverTrusat />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/beautifulnews/beautifulnews">
                    <div className="cover__header">
                        <div className="cover__header__inner-container"> 
                            <div className="cover__header__title">
                                Beautiful News
                            </div>
                            <div className="cover__header__description">
                                Roles goes here
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverBeautifulNews />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/pinterest/pinterest">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                                Pinterest branding
                            </div>
                            <div className="cover__header__description">
                                Identity design
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverPinterest />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/vicenews/vicenews">
                    <div className="cover__header">
                        <div className="cover__header__inner-container"> 
                            <div className="cover__header__title">
                                Vice News
                            </div>
                            <div className="cover__header__description">
                                Roles goes here
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverViceNews />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/splice/splice">
                    <div className="cover__header">
                        <div className="cover__header__inner-container"> 
                            <div className="cover__header__title">
                                Splice
                            </div>
                            <div className="cover__header__description">
                                Roles goes here
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverSplice />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/whales/whales">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                                Whale Song Explained
                            </div>
                            <div className="cover__header__description">
                                Art direction, animation
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverWhales />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/rapmatics/rapmatics">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                                Rapmatics
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverRapmatics />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/pollen/pollen">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                                Pollen
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverPollen />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/obamalegacy/obamalegacy">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                                ObamaLegacy
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverObamaLegacy />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/statlas/statlas">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            Statlas
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverStatlas />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/beatles/beatles">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            Beatles
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverBeatles />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/billboard/billboard">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            Billboard
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverBillboard />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/umbro/umbro">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            Umbro
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverUmbro />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/googlecreativelab/googlecreativelab">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            GoogleCreativeLab
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverGoogleCreativeLab />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/businessweek/businessweek">
                    <div className="cover__header">
                        <div className="cover__header__inner-container">
                            <div className="cover__header__title">
                            Businessweek
                            </div>
                            <div className="cover__header__description">
                                Role
                            </div>
                        </div>
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