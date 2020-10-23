import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';

function Project() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Pinterest Identity</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Project3</h2>
      </div>
    )
  }


export default Project;