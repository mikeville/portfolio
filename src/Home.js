import React from 'react';
import ProjectListBig from './ProjectListBig';
import About from './About';
// import './Home.scss';


function Home() {
  return (
    <div className="Home">
      <div className="home__header contained">
          <h2 className="home__header__title">Mike Deal</h2>
          <h3 className="home__header__headline">
          Design director for products and stories
          </h3>
      </div>
      <ProjectListBig />
      <About />
    </div>
  );
}


export default Home;