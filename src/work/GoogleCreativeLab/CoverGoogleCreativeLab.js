import React from 'react';
import './GoogleCreativeLab.scss';
import coverImage from './media/google-mock-censored-comp-100405.jpg' 


class CoverGoogleCreativeLab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverGoogleCreativeLab">
                <div className="container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverGoogleCreativeLab;