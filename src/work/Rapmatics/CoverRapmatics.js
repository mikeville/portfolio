import React from 'react';
import './Rapmatics.scss';
import coverImage1 from './media/rapmatic--give-it-to-me-800.gif' 
import coverImage2 from './media/rapmatic--animated--shimmy.gif' 
import coverImage3 from './media/rapmatic--animated--can-i-kick-it.gif' 



class CoverRapmatics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverRapmatics">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 ">
                            <img src={coverImage1}></img>
                        </div>
                        <div className="col-sm-4 hide-on-mobile">
                            <img src={coverImage2}></img>
                        </div>
                        <div className="col-sm-4 hide-on-mobile">
                            <img src={coverImage3}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default CoverRapmatics;