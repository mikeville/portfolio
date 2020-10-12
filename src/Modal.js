import React from 'react';

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
                {this.props.children}
                <button
                    onClick={e => {
                        this.onClose(e);
                    }}
                >
                    Close
                </button>
            </div>
        )
    }
}

export default Modal;