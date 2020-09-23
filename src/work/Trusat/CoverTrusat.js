import React from 'react';
import './Trusat.scss';
import coverImage from './media/trusat-concept-phone-3up-200508-1243.jpg' 


class CoverTrusat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverTrusat">
                <div className="container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverTrusat;