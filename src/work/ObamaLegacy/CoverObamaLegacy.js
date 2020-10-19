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
            <div className="CoverObamaLegacy">
                <div className="container">
                    <img src={coverImage} alt="Excerpts from Obama's Legacy videos"></img>
                </div>
            </div>
        );
    };
}

export default CoverObamaLegacy;