import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './GoogleCreativeLab.scss';

function GoogleCreativeLab() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Google Createive Lab</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on GoogleCreativeLab</h2>
      </div>
    )
  }


export default GoogleCreativeLab;