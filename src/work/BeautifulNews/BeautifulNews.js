import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import './BeautifulNews.scss';


import imgTransRights from './media/502-transgender-rights--post_pub_update.svg' 
import imgPneumonia from './media/1228-children-pneumonia.svg' 
import imgHunger from './media/302-world-hunger.svg' 
import imgGirlsPrimarySchool from './media/1329-girls-out-of-school.svg' 
import imgFossilFuelBan from './media/BN - Countries banning internal combustion engines - flattened_optimized.svg' 

import imgAnimalRights from './media/1288-animal-welfare-laws.svg' 
import imgAppleADay from './media/1395-fruit-veg-diabetes.svg' 
import imgBees from './media/1240-vaccine-for-bees.svg' 
import imgBiconcrete from './media/1160-zero-emission-concrete.svg' 
import imgBlueEnergy from './media/1252-rivers-blue-membrane.svg' 
import imgBuildings from './media/612-zero-energy-buildings.svg' 
import imgBuses from './media/1336-electric-buses--post_pub_update.svg' 
import imgDiseases from './media/1382-disease-eradication--post_pub_update.svg' 
import imgDrinkingWater from './media/535-access-to-safer-water.svg' 
import imgEmissions from './media/20-zero-emissions-pledges--post_pub_update.svg' 
import imgEnglandFootball from './media/1325-women-in-football.svg' 
import imgFemaleYouthLiteracy from './media/1332-female-youth-literacy.svg' 
import imgFertilizer from './media/673-synthetic-fertilizer.svg' 
import imgGermanyPlastic from './media/1416-germany-plastic-ban.svg' 
import imgHospitals from './media/213-nonprofit-drug-company.svg' 
import imgInvestInKids from './media/1335-childhood-programs.svg' 
import imgKidPreschool from './media/1345-head-start-works.svg' 
import imgLoon from './media/1413-floating-internet-balloons.svg' 
import imgMethane from './media/1151-home-methane-digesters.svg' 
import imgNtds from './media/362-neglected-tropical-diseases post_pub_update.svg' 
import imgRhinos from './media/1320-rhino-populations.svg' 
import imgRussiaMortality from './media/40-russia-mortality-down.svg' 
import imgTurtles from './media/127-sea-turtles--post_pub_update.svg' 
import imgUkSmokers from './media/1371-smokers-are-quitting--post_pub_update.svg' 
import imgWarheads from './media/541-nuclear-warheads--post_pub_update.svg' 


function BeautifulNews() {
    return (
      <div className="Project BeautifulNews">
        <Helmet>
          <title>Mike Deal: Beautiful News</title>
        </Helmet>
        <ProjectHeader />
        <div className="project__body">
          <div className="project__intro-wrapper">
            <div className="project__intro container container--bnews">
              <h1 className="project__title">Beautiful News</h1>
              <h2 className="project__subtitle">Data stories</h2>
              <div class="container project__info">
                <div className="row">
                  <div className="col-md-7 body-copy">
                    <p>
                      I designed 30+ graphics for the <a href="beautifulnews" target="_blank">Beautiful News</a> project. The series highlights positive macro trends beyond the headlines of our daily doomscrolling.
                    </p>
                  </div>
                  <div className="col-xs-10 col-md-4 start-md-8 note">
                  <p className="note__title">
                    Team
                  </p>
                    <ul className="credit-list">
                      <li>
                        Director: <a href="http://davidmccandless.com/" target="_blank">David McCandless</a>
                      </li>
                      <li>
                        Researcher: <a href="http://www.stephaniestarling.com/" target="_blank">Stephanie Starling</a>
                      </li>
                      <li>
                        Thank you <a href="http://www.fabiobergamaschi.com/" target="_blank">Fabio Bergamaschi</a>, <a href="https://www.behance.net/anca-m" target="_blank">Anca Mateescu</a>, <a href="https://twitter.com/rhodri?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Rhodri Marsden
</a>, and Kathryn Ariel for all your help.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container--bnews">
              <div className="row">
                <div className="col-md-4">
                  <img src={imgTransRights} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgPneumonia} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgHunger} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgGirlsPrimarySchool} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgFossilFuelBan} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgRhinos} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgEnglandFootball} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgMethane} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgTurtles} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgFertilizer} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgRussiaMortality} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgLoon} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgHospitals} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgAnimalRights} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgWarheads} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBlueEnergy} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgDiseases} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgBuildings} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBees} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgKidPreschool} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBiconcrete} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgDrinkingWater} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgInvestInKids} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgUkSmokers} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgFemaleYouthLiteracy} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBuses} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgEmissions} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgGermanyPlastic} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgNtds} alt="Data visulaization showing 'SUBJECT'"></img>
                  <img src={imgAppleADay} alt="Data visulaization showing 'SUBJECT'"></img>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }


export default BeautifulNews;