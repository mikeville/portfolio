import React from 'react';
import Loader from './Loader';

import './Modal.scss';


class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClose = e => {
        console.log("closing?")
        this.props.onClose && this.props.onClose(e);
      };
    
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="Modal">
                <div className="Modal__bg"
                    onClick={e => {
                        this.onClose(e);
                    }}
                >
                </div>
                <div className="Modal__loader-container">
                    <Loader />
                </div>
                <div className="Modal__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;