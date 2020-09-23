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
        </div>
    );
    }

}

export default Work;