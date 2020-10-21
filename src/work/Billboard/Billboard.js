import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './Billboard.scss';

function Billboard() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Billboard Charts Redesign</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Billboard</h2>
      </div>
    )
  }


export default Billboard;