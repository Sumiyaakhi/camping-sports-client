import React, { useState } from 'react';
import SectionTItle from '../../../Components/SectionTitle/SectionTItle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useSports from '../../../Components/SectionTitle/hooks/useSports';
import { useParams } from 'react-router-dom';
import ClassesTab from './ClassesTab';


const PopularClasses = () => {
    const sportsCategories = ['Water Sports','Team Sports','Artistic Sports','Outdoor Sports','Combat Sports','Racket Sports'] ;
    const {category}  = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const initialIndex = sportsCategories.indexOf(category);
    const [sports] = useSports();
    const waterSports = sports.filter(sport => sport.category === 'Water Sports');
    console.log(waterSports);
    const teamSports = sports.filter(sport => sport.category === 'Team Sports');
    const artisticSports = sports.filter(sport => sport.category === 'Artistic Sports');
    const outdoorSports = sports.filter(sport => sport.category === 'Outdoor Sports');
    const combatSports = sports.filter(sport => sport.category === 'Combat Sports');
    const racketSports = sports.filter(sport => sport.category === 'Racket Sports');
    return (
        <div className='py-6'>
            <SectionTItle
            heading="POpular Classes  for students"
            subHeading="based on enrollment"
            ></SectionTItle>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab >Water Sports</Tab>
      <Tab>Team Sports</Tab>
      <Tab>Artistic Sports</Tab>
      <Tab>Outdoor Sports</Tab>
      <Tab>Combat Sports</Tab>
      <Tab>Racket Sports</Tab>
    </TabList>

    <TabPanel >
    <ClassesTab sports={waterSports}></ClassesTab>
    
    </TabPanel>
    <TabPanel >
    <ClassesTab sports={teamSports}></ClassesTab>
    
    </TabPanel>
    <TabPanel >
    <ClassesTab sports={artisticSports}></ClassesTab>
   
    </TabPanel>
    <TabPanel >
    <ClassesTab sports={outdoorSports}></ClassesTab>
   
    </TabPanel>
    <TabPanel >
    <ClassesTab sports={combatSports}></ClassesTab>
    
    </TabPanel>
    <TabPanel >
 
    <ClassesTab sports={racketSports}></ClassesTab>
    </TabPanel>
  </Tabs>


        </div>
    );
};

export default PopularClasses;