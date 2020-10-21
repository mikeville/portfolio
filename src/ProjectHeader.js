import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './ProjectHeader.scss';

import homeHeaderImage from './media-global/mikemake-logo-181102-2208--squishy_600px.gif' 


function ProjectHeader() {
    return (
      <div className="ProjectHeader">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 header__home-link">
              <Link to="/"><img src={homeHeaderImage}></img></Link>
            </div>
            <div className="col-xs-6 header__about-links">
              <Link to="/#about">About</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProjectHeader;