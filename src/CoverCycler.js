import React from 'react';


class CoverCycler extends React.Component {
    state = {
        imageIndex: 0,
        imageSources: [
            "images/vcb/cover/vcb-cover-1.png",
            "images/vcb/cover/vcb-cover-2.png",
            "images/vcb/cover/vcb-cover-3.png",
            "images/vcb/cover/vcb-cover-4.png",
            "images/vcb/cover/vcb-cover-5.png",
            "images/vcb/cover/vcb-cover-6.png",
            "images/vcb/cover/vcb-cover-7.png",
            "images/vcb/cover/vcb-cover-8.png",
            "images/vcb/cover/vcb-cover-9.png"
        ]
    };

    render() {

        this.cycleImages();

        return (
            <div>
                <img id="testImage" src={this.state.imageSources[this.state.imageIndex]}></img>
            </div>
        );
    };

    cycleImages() {
        console.log(this.state.imageIndex)

        this.state.imageIndex++
        // this.setState({ imageIndex : this.imageIndex++ }) 
        // ^ causes infinite loop

        if (this.state.imageIndex == this.state.imageSources.length) {
            // this.state.imageIndex = 0;
            this.setState({ imageIndex : 0 })
        }
        
        // document.getElementById('testImage').src({this.state.imageSources[this.state.imageIndex]});
        // console.log( document.getElementById('testImage') )


        setTimeout(this.cycleImages.bind(this), 1 * 1000)
    }



}

export default CoverCycler;