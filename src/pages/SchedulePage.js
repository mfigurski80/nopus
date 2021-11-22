import { Container } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import styled from 'styled-components'; // https://styled-components.com/
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Schedule from 'components/Schedule';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, displayItems: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
          <Typography>{children}</Typography>
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
        { start: 60*9, end: 60*10 + 30, name: 'CS 170', days: [0,2] },
        { start: 60*10, end: 60*11, name: 'CS 171', days: [1,3] },
        { start: 60*14, end: 60*15, name: 'CS 220', days: [0,2,4] },
    ];

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '90%' }}>
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
            <Tab label="Fall 2021" {...allyProps(0)}/>
            <Tab label="Spring 2022" {...allyProps(1)}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Schedule schedule={schedule} timeRange={[8*60, 18*60]}/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            You don't have a Spring 2022 schedule yet.
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

const container = {
  padding: 10,
  marginRight: 20,
  display: 'flex',
};

const scheduleContainer = {
  width: 300
};
