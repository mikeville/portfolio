import React from 'react';
import './Statlas.scss';
import coverImage from './media/statlas-mock-comp-200405.jpg' 


class CoverStatlas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverStatlas">
                <div className="container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverStatlas;