import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ImageCycler from './ImageCycler';
import CoverWhales from './work/whales/CoverWhales';
import CoverPinterest from './work/pinterest/CoverPinterest';
import './Work.scss';



class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageCycling: false,
            vcbImageSources: [
                "images/vcb/cover/vcb-cover-1.png",
                "images/vcb/cover/vcb-cover-2.png",
                "images/vcb/cover/vcb-cover-3.png",
                "images/vcb/cover/vcb-cover-4.png",
                "images/vcb/cover/vcb-cover-5.png",
                "images/vcb/cover/vcb-cover-6.png",
                "images/vcb/cover/vcb-cover-7.png",
                "images/vcb/cover/vcb-cover-8.png",
                "images/vcb/cover/vcb-cover-9.png"
            ]
        }
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
                <Link to="/work/project1">
                    {/* <div className="cover__header cover__header--fixed-top"> */}
                    <div className="cover__header">
                        <div className="cover__header__title">
                            Verse Chorus Bridge
                        </div>
                        <div className="cover__header__description">
                            Art direction, animation
                        </div>
                        <div className="cover__header__action">
                            Watch episodes
                        </div>
                    </div>
                    <div className="cover__body">
                        <ImageCycler imageCycling={this.state.imageCycling} images={this.state.vcbImageSources} />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/project2">
                    <div className="cover__header">
                        <div className="cover__header__title">
                            Whale Song Explained
                        </div>
                        <div className="cover__header__description">
                            Art direction, animation
                        </div>
                        <div className="cover__header__action">
                            See and hear
                        </div>
                    </div>
                    <div className="cover__body">
                        <CoverWhales />
                    </div>
                </Link>
            </section>
            <section className="cover">
                <Link to="/work/project2">
                    <div className="cover__header">
                        <div className="cover__header__title">
                            Pinterest branding
                        </div>
                        <div className="cover__header__description">
                            Identity design
                        </div>
                        <div className="cover__header__action">
                            More
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