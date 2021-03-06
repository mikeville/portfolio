import React from 'react';
import './Whales.scss';
import coverImage from './media/whales-cover-200405-1931--full--duller_highlights.svg' 


class CoverWhales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverWhales">
                <div className="container">
                    <img src={coverImage} alt="Sample glyphs from whale song visualization"></img>
                </div>
            </div>
        );
    };
}

export default CoverWhales;