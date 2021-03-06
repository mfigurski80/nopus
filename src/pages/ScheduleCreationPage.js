import { Container } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import styled from 'styled-components'; // https://styled-components.com/
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Schedule from 'components/Schedule';
import Preferences from 'components/Preferences';
import CourseSelector from 'components/CourseSelector';

function TabPanel({ children, value, index, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, displayItems: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function SchedulePage() {

    const schedule = [
      { start: 60*9, end: 60*10 + 30, name: 'CS 171', days: [0,2] },
      { start: 60*10, end: 60*11, name: 'MATH 111', days: [1,3] },
      { start: 60*14, end: 60*15, name: 'PHIL 110', days: [0,2,4] },
    ];

    const theme = useTheme();
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '95%' }}>
        <AppBar position="static" >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="schedule tabs"
            TabIndicatorProps={{
             style: { background: "#64B5FF", height: "5px"}
           }}
          >
            <Tab label="Choose Availability" {...allyProps(0)}/>
            <Tab label="Add Courses" {...allyProps(1)}/>
            <Tab label="Choose Schedule" {...allyProps(2)}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Preferences />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction} >
              <CourseSelector />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Schedule schedule={schedule} timeRange={[8*60, 18*60]}/>
          </TabPanel>
        </SwipeableViews>
        </Box>
    );
}

const NavLink = styled(Link)`
    padding: 10px 5px;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`
