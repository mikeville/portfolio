import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './ProjectHeader.scss';


function ProjectHeader() {
    return (
      <div className="ProjectHeader">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 header__home-link">
              <Link to="/">Mike Deal</Link>
            </div>
            <div className="col-xs-6 header__about-links">
            <Link to="/#about-link">About</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProjectHeader;