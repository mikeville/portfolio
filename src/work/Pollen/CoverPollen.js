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
                <div className="contained">
                    <div className="columns columns--2">
                        <div>
                            <img src={coverImage1}></img>
                        </div>
                        <div>
                            <img src={coverImage2}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default CoverPollen;