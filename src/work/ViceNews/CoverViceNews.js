import React from 'react';
import './ViceNews.scss';
//temp, until I figure out whether to put cover in own general component:
import '../../Work.scss'; 
// ---------
import coverVideo from './media/yg-vn_site-170809-1246-cover_comp_1-05br.mp4' 
import BrowserChrome from "../../BrowserChrome"


class CoverViceNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverProject CoverViceNews">
                <div className="container">
                    <BrowserChrome>
                        <video className="cover__video" muted preload="metadata" playsInline autoPlay="autoplay" loop="loop">
                            <source src={coverVideo}></source>
                            Your browser does not support the video tag.
                        </video>
                    </BrowserChrome>
                </div>
            </div>
        );
    };
}

export default CoverViceNews; 