import React from 'react';
import p5 from 'p5';

class CoverWhales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myRef = React.createRef();
    }

    sketch = function(p) {
        console.log("test")
        p.setup = function() {
            p.noLoop();
            console.log("setup ran")
        }

        p.draw = function() {
            console.log("drawing");

        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current)
    }

    render() {
        return (
            <div className="CoverWhales">
                <div className="cover__container">
                    <div ref="{this.myRef}">

                    </div>
                </div>
            </div>
        );
    };
}

export default CoverWhales;