import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './ProjectFooter.scss';


function ProjectFooter() {
    return (
      <div className="ProjectFooter">
          <div className="container">
            <Link to="/">
              Back to project list
            </Link>
          </div>
      </div>
    )
  }

export default ProjectFooter;