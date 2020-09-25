import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import '../../Project.scss';

function Businessweek() {
    return (
      <div className="Project Businessweek">
        <ProjectHeader />
        <div className="project__body contained">
          <h1 className="project__title">Businessweek</h1>
          <h2 className="project__subtitle">Data visualization and design</h2>
          <div className="project__intro grid">
            <div className="span-7 body-copy">
              <p>
                I joined the Businessweek team to lead the research and design of visual news stories for a special issue marking the five-year anniversary of the financial meltdown triggering the Great Recession.
              </p>
            </div>
            <div className="span-5 note">
              <p className="note__title">
                Team
              </p>
              <ul className="credit-list">
                <li>Editor: Josh Tyrangiel</li>  
                <li>Creative Director: Richard Turley</li>  
                <li>Design Director: Cynthia Hoffman</li>  
                <li>Designers and graphics editors: Rob Vargas, Allison McCann, Dorothy Gambrell, Chris Nosenzo, &amp; Evan Applegate.</li>  
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Businessweek;