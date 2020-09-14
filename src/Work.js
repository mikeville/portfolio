import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CoverCycler from './CoverCycler';
// import './covercycle.js'
import './Work.scss';



function Work() {
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
                    {/* <img id="project-cover--vcb__image" src="images/vcb/cover/vcb-cover-1.png" alt="Verse Chorus Bridge cover"></img> */}
                    <CoverCycler />
                </div>
            </section>
        </div>
    );
}

export default Work;