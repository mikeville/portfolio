import React from 'react';
import {Helmet} from "react-helmet";

import ProjectHeader from '../../ProjectHeader';
import ProjectFooter from '../../ProjectFooter';
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
                      I designed 30+ graphics for the <a href="https://informationisbeautiful.net/beautifulnews/" target="_blank">Beautiful News</a> project. The series highlights positive macro trends beyond the headlines of our daily doomscrolling.
                    </p>
                  </div>
                  <div className="col-xs-10 col-md-4 start-md-8 note">
                    <ul className="credit-list">
                      <li>
                        Director: <a href="http://davidmccandless.com/" target="_blank">David McCandless</a>
                      </li>
                      <li>
                        Researcher: <a href="http://www.stephaniestarling.com/" target="_blank">Stephanie Starling</a>
                      </li>
                      <li>
                        Thanks also to <a href="http://www.fabiobergamaschi.com/" target="_blank">Fabio Bergamaschi</a>, <a href="https://twitter.com/rhodri?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Rhodri Marsden
</a>, Kathryn Ariel, and <a href="https://www.behance.net/anca-m" target="_blank">Anca Mateescu</a>.
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
                  <img src={imgTransRights} alt="Data visualization showing that transgender rights are expanding"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgPneumonia} alt="Data visualization showing that fewer children are dying from pneumonia"></img>
                  <img src={imgHunger} alt="Data visualization showing that world huner has reached its lowest point in 25 years"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgGirlsPrimarySchool} alt="Data visualization showing that the number of girls out of primary school worldwide has fallen to an all time low"></img>
                  <img src={imgFossilFuelBan} alt="Data visualization showing that countires are starting to ban fossil fuel vehicles"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgRhinos} alt="Data visualization showing that rhino populationare growing"></img>
                  <img src={imgEnglandFootball} alt="Data visualization showing that female football teams in England have doubled in three years"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgMethane} alt="Infographic showing that home methane digeters can replace inefficient cookstoves"></img>
                  <img src={imgTurtles} alt="Data visualization showing that more population of large sea turtles are improving"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgFertilizer} alt="Data visualization showing that 50 countries have reduced their overuse of fertilizers"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgRussiaMortality} alt="Data visualization showing Russia's child mortality is down, while life expectancy is up"></img>
                  <img src={imgLoon} alt="Infographic showing that giant floating balloons will provide internet in Kenya"></img>
                  <img src={imgHospitals} alt="Data visualization showing that over 300 U hospital shave formed their own non-profit drug company"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgAnimalRights} alt="Data visualization showing that more countries are protecting animals"></img>
                  <img src={imgWarheads} alt="Data visualization showing that we've decommissioned 85% of the worlds nukes"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBlueEnergy} alt="Infographic showing that rivers could generate thouands of nuclear power plants' worth of energy"></img>
                  <img src={imgDiseases} alt="Data visualization showing the ten diseases we've nearly controlled or eradicated"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgBuildings} alt="Infographic showing that zero energy buildings are taking off in N. America"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBees} alt="Infographic showing that biologists in Finland developed a vaccine to protect bees"></img>
                  <img src={imgKidPreschool} alt="Infographic showing that kids in pre-school programs stay in education longer, earning higher incomes"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBiconcrete} alt="Data visualization showing that coral-like bioconcrete generates no emissions"></img>
                  <img src={imgDrinkingWater} alt="Data visualization showing that 476 million more East and South Asians have access to basic drinking water"></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src={imgGermanyPlastic} alt="Data visualization showing that Germany bans single-use plastic and styrofoam"></img>
                  <img src={imgUkSmokers} alt="Data visualization showing that way more UK smokers are quitting due to COVID19"></img>
                  <img src={imgAppleADay} alt="Data visualization showing that even a small portino of fruit or veggies every day can prevent diabetes"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgBuses} alt="Infographic showing that supercapacitor buses are a thing now"></img>
                  <img src={imgEmissions} alt="Data visualization showing that net-zero emissions pledges are stacking up across the world"></img>
                  <img src={imgInvestInKids} alt="Data visualization showing that money spent on disadvantaged kids is a great long-term investment"></img>
                </div>
                <div className="col-md-4">
                  <img src={imgNtds} alt="Data visualization showing that fewer people are dying from neglected tropical diseases"></img>
                  <img src={imgFemaleYouthLiteracy} alt="Data visualization showing that female youth literacy is up"></img>
                </div>
              </div>
          </div>
        </div>
        <ProjectFooter />
      </div>
    )
  }


export default BeautifulNews;