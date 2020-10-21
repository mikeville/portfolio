import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './BeautifulNews.scss';

function BeautifulNews() {
    return (
      <div>
        <Helmet>
          <title>Mike Deal: Beautiful News</title>
        </Helmet>
        <ProjectHeader />
        <h2>You're on BeautifulNews</h2>
      </div>
    )
  }


export default BeautifulNews;