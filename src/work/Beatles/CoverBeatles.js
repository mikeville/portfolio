import React from 'react';
import './Beatles.scss';
import coverImage from './media/beatles-cover-comp-200410-1958.gif' 


class CoverBeatles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBeatles">
                <div className="container container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverBeatles;