import React from 'react';
import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
import '../../Project.scss';
import './Rapmatics.scss';

function Rapmatics() {
    return (
      <div className="Project Rapmatics">
        <ProjectHeader />        
        <section className="project__intro">
          <div class="contained">
            <h1 className="project__title">Rapmatics</h1>
            <h2 className="project__subtitle">Lyric maps</h2>
            <div class="grid">
              <div className="span-7 body-copy">
                <p>
                  Music has many properties (pitch, rhythm, tempo, etc), but repetition is what makes something <em>feel</em> musical.
                </p>
                <p>
                    These flow-mapping, loop-doodling spit-samples are an ongoing tribute to lyrical repetition in hip hop.
                  </p>
              </div>
              <div className="span-3 align-right note">
              </div>
            </div>
          </div>
        </section>
        <div className="project__body">
          test
        </div>
        <ProjectFooter />
      </div>
    )
  }


export default Rapmatics;