import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './Pollen.scss';

function Pollen() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Pollen</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Pollen</h2>
      </div>
    )
  }


export default Pollen;