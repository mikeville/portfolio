import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './Splice.scss';

function Splice() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Splice Sounds</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Splice</h2>
      </div>
    )
  }


export default Splice;