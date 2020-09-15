// To-dos:
// Stop cycleImages() if component unmounts? Change to cycle via setInterval?

import React from 'react';

class ImageCycler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCycling: this.props.imageCycling,
            speed: this.props.speed ? this.props.speed : 1.5,
            imageSources: this.props.images,
            imageIndex: 0
        };
        
        this.cycleImages = this.cycleImages.bind(this);
    }

    componentDidMount() {
        if (this.state.imageCycling) this.cycleImages()
    }

    render() {
        return (
            <div>
                <img id="testImage" src={this.state.imageSources[this.state.imageIndex]}></img>
            </div>
        );
    };

    cycleImages() {
        this.state.imageIndex++
        if (this.state.imageIndex == this.state.imageSources.length) {
            this.setState({ imageIndex : 0 })
        }
        this.setState({ imageIndex: this.state.imageIndex++ })
        setTimeout(this.cycleImages, 1000 * this.state.speed )
    }
}

export default ImageCycler;