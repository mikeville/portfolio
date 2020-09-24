import React from 'react';
import './Project.scss';


class CoverProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverProject">
                <div className="contained">
                    Project cover
                </div>
            </div>
        );
    };
}

export default CoverProject;