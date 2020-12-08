import React from 'react';
import p5 from 'p5';
import Globe from "./media/earth-shadows-400px.jpg";


class TrusatCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myRef = React.createRef();
    }

    sketch = function(p) {
        var canvasDiv = document.getElementById("globe-canvas-container");
        var width = canvasDiv.offsetWidth; //Get width of container
      
        var mobileBreakpoint = 600;
        var maxHeight = 640;
      
        var scrollPos = 0;
      
        var imgEarth;
        var imgEarthSize = 400;
        var earthPosition;
      
        // Make an array of random numbers to serve as positions for the satellite shapes
        var diameterMin = 150; // sat swarm's closest distance to Earth
        var diameterMax = 800; // sat swarm's furthest distance to Earth
        var numberOfSats = 400;
        var randomPositions = Array.from(
          { length: numberOfSats },
          () =>
            Math.floor(Math.random() * (diameterMax - diameterMin + 1)) + diameterMin
        );
      
        p.getHeight = (width) => {
          if (width < mobileBreakpoint) {
            // if user is on mobile
            height = 450; // set height to 450px
          } else if (width*height > maxHeight) {
            height = maxHeight; // otherwise, make height proportional to width
          } else {
            height = width * 0.5625; // otherwise, make height proportional to width
          }
          return height;
        };
      
        var height = p.getHeight(width);
      
        p.getEarthPosition = (width) => {
        // old function for making Earth not centered on desktop
        
        //   if (width < mobileBreakpoint) {
        //     // if user is on mobile
        //     earthPosition = (width * 1) / 2; // center Earth
        //   } else {
        //     earthPosition = (width * 2) / 3; // otherwise, make it fit desktop composition
        //   }
        //   return earthPosition;

        return width/2;
        };
      
        p.preload = () => {
          imgEarth = p.loadImage(Globe, (img) => {
            img.resize(0, imgEarthSize);
          });
        };
      
        // If user changes window size, resize the canvas to match that of its container
        p.windowResized = () => {
          width = canvasDiv.offsetWidth;
          height = p.getHeight(width);
          p.resizeCanvas(width, height);
          earthPosition = p.getEarthPosition(width);
        };
      
        p.mouseWheel = (event) => {
          scrollPos += event.delta;
        };
      
        // Draw a little satellite shape
        p.makeSat = (position) => {
          p.rotate(p.radians(scrollPos / 20 + position));
          p.ellipse(position, position, 5, 5);
        };
      
        p.setup = () => {
          p.createCanvas(width, p.getHeight(width));
        };
      
        p.draw = () => {
          p.background("#081122");
      
          p.fill("white");
          p.noStroke();
      
          // position Earth image on canvas
          p.translate(p.getEarthPosition(width), p.getHeight(width) / 2);
          p.image(imgEarth, imgEarth.width / -2, imgEarth.width / -2);
      
          // draw sats
          for (let i = 0; i < randomPositions.length; i++) {
            p.makeSat(randomPositions[i]);
          }
        };      

    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current)
    }

    render() {
        return (
            <div className="CoverWhales">
                <div className="cover__container">
                    <div id="globe-canvas-container" ref={this.myRef}>

                    </div>
                </div>
            </div>
        );
    };
}

export default TrusatCanvas;