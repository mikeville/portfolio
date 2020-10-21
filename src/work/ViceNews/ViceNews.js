import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import './ViceNews.scss';


class ViceNews extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  componentDidMount() {
    window.scrollTo(0, 0);    
    window.addEventListener("resize", this.resizeIframe);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeIframe);
  }

  resizeIframe() {
    var iFrame = document.getElementById("vicenews-iframe");
    console.log(iFrame)
    iFrame.height = window.innerHeight;
  }

  render() {
    return (
      <div className="Project ViceNews">
          <Helmet>
          <title>Mike Deal: Vice News</title>
        </Helmet>
        <div>
          <ProjectHeader />
            <div className="iframe-wrapper">
              <iframe onLoad={this.resizeIframe} id="vicenews-iframe" className="project-iframe" src="https://mikemake.com/projects/vice/" title="Vice News design case study"></iframe>
            </div>
          {/* <ProjectFooter /> */}
        </div>
      </div>
    )
  }

}

export default ViceNews;