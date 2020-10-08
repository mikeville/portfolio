import React from 'react';
import './Billboard.scss';
import coverImage from './media/billboard-cover-181105-MegLAZ_123_RT--padding-p-1600.jpg' 


class CoverBillboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBillboard">
                <div className="container">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverBillboard;