import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CoverVcb from './work/vcb/CoverVcb';
import CoverWhales from './work/whales/CoverWhales';
import CoverPinterest from './work/pinterest/CoverPinterest';
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
                    {/* <div className="cover__header cover__header--fixed-top"> */}
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
        </div>
    );
    }

}

export default Work;