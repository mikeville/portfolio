import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './CoverHeader.scss';


class CoverHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    
    render() {
        const projectName = this.props.project;
        const role = this.props.role;

        return (
            <div className="CoverHeader">
                <div className="container"> 
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 cover__header__title">
                            {projectName}
                        </div>
                        <div className="col-xs-12 col-sm-6 cover__header__description">
                            {role}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoverHeader;