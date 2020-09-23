import React from 'react';
import './ObamaLegacy.scss';
import coverImage from './media/obama-cover-master3--trimmed.gif' 


class CoverObamaLegacy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverProject">
                <div className="container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverObamaLegacy;