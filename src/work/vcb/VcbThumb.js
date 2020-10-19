import React from 'react';


class VcbThumb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    
    render() {
        this.imgAltText = "Screenshots from interview with " + this.props.artist + " about '" + this.props.song + "'"

        return (
            <div className="VcbThumb">
                <div>
                    <img className="VcbThumb__img" src={this.props.image} alt={this.imgAltText}></img>
                </div>
                <div>{this.props.artist}</div>
                <div>{this.props.song}</div>
            </div>
        )
    }
}

export default VcbThumb;