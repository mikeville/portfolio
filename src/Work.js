import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ImageCycler from './ImageCycler';
import CoverWhales from './CoverWhales';
import './Work.scss';



class Work extends React.Component {

    state = {
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

    render() {
    return (
        <div className="Work">
            <section className="cover">
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
            </section>
            <section className="cover">
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
            </section>
        </div>
    );
    }

}

export default Work;