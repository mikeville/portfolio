import React from 'react';
import './Trusat.scss';

import Loader from "../../Loader"

import imgScreenshotNotification from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_notification.png'
import imgScreenshotPriorities from './media/screenshots/trusat-GalaxyS10_Mock--cropped2_priorities.png'
import vidCapture from './media/trusat-Phone3vbr-1020w-shortened.mp4'



class CoverTrusat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverTrusat Project container">
                <div className="row trusat__cover-offsetter">
                    <div className="col-md-4 hide-on-mobile">
                    <img className="project__screenshot" src={imgScreenshotNotification} alt="TruSat mobile app screenshot"></img>
                    </div>
                    <div className="col-md-4 loader-content-container">
                    <Loader />
                    <video className="video-snack project__screenshot zneg1 loader-content video-with-line trusat__video-screenshot" src={vidCapture} muted preload="metadata" autoPlay="autoPlay" loop="loop"></video>
                    </div>
                    <div className="col-md-4 hide-on-mobile">
                    <img className="project__screenshot" src={imgScreenshotPriorities} alt="TruSat mobile app screenshot"></img>
                    </div>
                </div>
                <div className="trusat__cover-caption-spacer">

                </div>
            </div>
        );
    };
}

export default CoverTrusat;