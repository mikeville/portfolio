import React from 'react';
import p5 from 'p5';

class TrusatCanvasTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myRef = React.createRef();
    }

    sketch = function(p) {
        const canvas = 540;
        let eyelid1Pos;
        let eyelid2Pos;
        
        
        p.setup = function() {
            p.noLoop();
            p.createCanvas(canvas, canvas);
            p.colorMode(p.HSB, 100);
            p.angleMode(p.DEGREES);
            p.imageMode(p.CENTER);
        }
        
            
        p.setEyelidPos = function() {
        
            if (p.mouseY < canvas*1/4) {
                eyelid1Pos = canvas*1/4
                eyelid2Pos = canvas*3/4
            } else if (p.mouseY > canvas*1/4 && p.mouseY < canvas*2/4 ){
                eyelid1Pos = p.mouseY
                eyelid2Pos = canvas*2/4 - (p.mouseY - canvas*2/4)
            } else if (p.mouseY > canvas*2/4 && p.mouseY < canvas*3/4){
                eyelid1Pos = canvas*2/4 - (p.mouseY - canvas*2/4)
                eyelid2Pos = p.mouseY
            } else {
                eyelid1Pos = canvas*3/4
                eyelid2Pos = canvas*1/4
            }
        
        }
        
        p.mouseMoved = function() {
            p.setEyelidPos();
            p.redraw();
        }
        
        p.draw = function() {
            p.background(80, 50, 80)
        
            p.setEyelidPos()
        
            p.noFill();
            p.stroke(0, 0, 0, 80);
            p.strokeWeight(2);
        
            p.beginShape();
            p.vertex(0, canvas/2)
            p.bezierVertex(canvas*(1/4), canvas*(2/4), canvas*(1/4), eyelid1Pos, canvas*(2/4), eyelid1Pos);
            p.bezierVertex(canvas*(3/4), eyelid1Pos, canvas*(3/4), canvas*(1/2), canvas, canvas*(1/2));
            p.bezierVertex(canvas*(3/4), canvas*(2/4), canvas*(3/4), eyelid2Pos, canvas*(1/2), eyelid2Pos);
            p.bezierVertex(canvas*(1/4), eyelid2Pos, canvas*(1/4), canvas*(2/4), 0, canvas*(2/4));
            p.endShape(p.CLOSE);
        
        
        
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current)
    }

    render() {
        return (
            <div className="CoverWhales">
                <div className="cover__container">
                    <div id="testID" ref={this.myRef}>

                    </div>
                </div>
            </div>
        );
    };
}

export default TrusatCanvasTest;