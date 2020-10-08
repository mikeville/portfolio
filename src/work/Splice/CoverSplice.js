import React from 'react';
import './Splice.scss';
import coverImage from './media/splice-mock-200406-1022.jpg' 


class CoverSplice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverProject">
                <div className="container">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverSplice;