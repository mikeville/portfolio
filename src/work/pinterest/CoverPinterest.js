import React from 'react';
import './Pinterest.scss';
import coverImage from './media/pinterest-cover-181105-1814.png' 


class CoverPinterest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverPinterest">
                <div className="container container-inner">
                    <img src={coverImage} alt="Pinterest logo"></img>
                </div>
            </div>
        );
    };
}

export default CoverPinterest;