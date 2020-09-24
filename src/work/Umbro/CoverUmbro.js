import React from 'react';
import './Umbro.scss';
import coverImage from './media/umbro-thumb-200403.svg'


class CoverUmbro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverUmbro">
                <div className="contained container-inner">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverUmbro;