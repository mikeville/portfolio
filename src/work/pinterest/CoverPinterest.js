import React from 'react';
import './Pinterest.scss';
import pinterestCover from './media/pinterest-cover-181105-1814.png'


class CoverPinterest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverPinterest">
                <div className="container-inner">
                    <img src={pinterestCover}></img>
                </div>
            </div>
        );
    };
}

export default CoverPinterest;