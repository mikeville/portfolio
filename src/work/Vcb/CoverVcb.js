import React from 'react';
import ImageCycler from '../../ImageCycler';
import './Vcb.scss';

import vcbCoverImg1 from './cover-images/vcb-cover-1.jpg'
import vcbCoverImg2 from './cover-images/vcb-cover-2.jpg'
import vcbCoverImg3 from './cover-images/vcb-cover-3.jpg'
import vcbCoverImg4 from './cover-images/vcb-cover-4.jpg'
import vcbCoverImg5 from './cover-images/vcb-cover-5.jpg'
import vcbCoverImg6 from './cover-images/vcb-cover-6.jpg'
import vcbCoverImg7 from './cover-images/vcb-cover-7.jpg'
import vcbCoverImg8 from './cover-images/vcb-cover-8.jpg'
import vcbCoverImg9 from './cover-images/vcb-cover-9.jpg'


class CoverVcb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCycling: true,
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
                <div className="container">
                    <ImageCycler imageCycling={this.state.imageCycling} images={this.state.vcbImageSources} />
                </div>
            </div>
        );
    };
}

export default CoverVcb;