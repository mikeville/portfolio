import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import './Whales.scss';


class Whales extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  componentDidMount() {
    window.scrollTo(0, 0);    
    window.addEventListener("resize", this.resizeIframe);
  }

  resizeIframe() {
    var iFrame = document.getElementById("whales-iframe");
    console.log(iFrame)
    iFrame.height = window.innerHeight;
  }

  render() {
    return (
      <div className="Project Whales">
        <div>
          <ProjectHeader />
            <div className="iframe-wrapper">
              <iframe onLoad={this.resizeIframe} id="whales-iframe" className="project-iframe" src="https://mikemake.com/projects/whales/" title="Whale Song Explained"></iframe>
            </div>
          <ProjectFooter />
        </div>
      </div>
    )
  }

}

export default Whales;