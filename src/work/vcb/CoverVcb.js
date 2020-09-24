import React from 'react';
import ImageCycler from '../../ImageCycler';
import './Vcb.scss';

import vcbCoverImg1 from './cover-images/vcb-cover-1.png'
import vcbCoverImg2 from './cover-images/vcb-cover-2.png'
import vcbCoverImg3 from './cover-images/vcb-cover-3.png'
import vcbCoverImg4 from './cover-images/vcb-cover-4.png'
import vcbCoverImg5 from './cover-images/vcb-cover-5.png'
import vcbCoverImg6 from './cover-images/vcb-cover-6.png'
import vcbCoverImg7 from './cover-images/vcb-cover-7.png'
import vcbCoverImg8 from './cover-images/vcb-cover-8.png'
import vcbCoverImg9 from './cover-images/vcb-cover-9.png'


class CoverVcb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCycling: false,
            vcbImageSources: [
                vcbCoverImg1,
                vcbCoverImg2,
                vcbCoverImg3,
                vcbCoverImg4,
                vcbCoverImg5,
                vcbCoverImg6,
                vcbCoverImg7,
                vcbCoverImg8,
                vcbCoverImg9
            ]
        };
    }

    render() {
        return (
            <div className="CoverVcb">
                <div className="contained">
                    <ImageCycler imageCycling={this.state.imageCycling} images={this.state.vcbImageSources} />
                </div>
            </div>
        );
    };
}

export default CoverVcb;