import React from 'react';
import './Pollen.scss';
import coverImage1 from './media/pollen-cover-book-181105-1250-p-800.jpg' 
import coverImage2 from './media/pollen-cover-collages-181105-1253.gif' 


class CoverPollen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverPollen">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={coverImage1} alt="Cover of Pollen Magazine"></img>
                        </div>
                        <div className="col-md-6 hide-on-mobile">
                            <img src={coverImage2} alt="Collage snippets from Pollen"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default CoverPollen;