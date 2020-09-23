import React from 'react';
import './Businessweek.scss';


class CoverBusinessweek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBusinessweek">
                <div className="container-inner">
                Businessweek cover
                </div>
            </div>
        );
    };
}

export default CoverBusinessweek;