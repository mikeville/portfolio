import React from 'react';
import './Businessweek.scss';
import coverImage from './media/businessweek-photo-comp.jpg' 


class CoverBusinessweek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBusinessweek">
                <div className="contained">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverBusinessweek;