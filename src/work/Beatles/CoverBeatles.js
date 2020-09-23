import React from 'react';
import './Beatles.scss';


class CoverBeatles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBeatles">
                <div className="container-inner">
                    Beatles cover
                </div>
            </div>
        );
    };
}

export default CoverBeatles;