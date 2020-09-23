import React from 'react';
import './Billboard.scss';


class CoverBillboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBillboard">
                <div className="container-inner">
                Billboard cover
                </div>
            </div>
        );
    };
}

export default CoverBillboard;