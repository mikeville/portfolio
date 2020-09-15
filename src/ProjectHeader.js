import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './ProjectHeader.scss';


function ProjectHeader() {
    return (
      <div className="ProjectHeader">
        <div className="header__home-link">
          <Link to="/">Mike Deal</Link>
        </div>
        <div class="header__about-links">
        <Link to="/#about-link">About</Link>
        </div>
      </div>
    )
  }

export default ProjectHeader;