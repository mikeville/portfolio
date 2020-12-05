import React from 'react';
import "./BrowserChrome.scss";

class BrowserChrome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="browser-mock">
                <div className="browser-mock__chrome">
                <div className="browser-mock__chrome--left">
                    <div className="browser-mock__chrome--button">
                    </div>
                </div>
                <div className="browser-mock__chrome--middle">
                </div>
                <div className="browser-mock__chrome--right">
                </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default BrowserChrome;