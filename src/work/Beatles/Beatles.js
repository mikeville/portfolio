import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './Beatles.scss';

function Beatles() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Charting the Beatles</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Beatles</h2>
      </div>
    )
  }


export default Beatles;