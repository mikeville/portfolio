import React from 'react';

import './Work.scss';


class CoverCaption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="temp-caption container">
                <div className="row">
                    <div className="col-md-6 temp-caption__caption">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default CoverCaption;