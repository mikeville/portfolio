import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './Statlas.scss';

function Statlas() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Statlas</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on Statlas</h2>
      </div>
    )
  }


export default Statlas;