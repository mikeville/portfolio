import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';

function Trusat() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: TruSat</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on TruSat</h2>
      </div>
    )
  }


export default Trusat;