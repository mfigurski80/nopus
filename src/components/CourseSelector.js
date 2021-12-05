import { Paper, TextField, Typography } from '@material-ui/core'
import Box from "@material-ui/core/Box";
import React from 'react'
import Course from './Course';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Stack, Input } from '@mui/material';

function CourseSelector() {
    return (
        <div>
            <Paper elevation={6}>
                <Box p={2}>
                    <div style={{display:'flex', flexDirection:'row'}}> 
                        <Stack>
                            <div style={{padding:'10px'}}> 
                                <Typography variant='h4'>Add Classes</Typography>
                                <Typography>Choose any classes that you want to add to your schedule</Typography>
                            </div>
                            <div style={{padding:'10px'}}>
                                <Typography variant='h5'>ADD A COURSE</Typography>
                                <TextField id='course-search' label='Search Courses' variant='outlined' />
                            </div>
                            <AddRoundedIcon />
                            <div style={{display:'flex', flexDirection:'row', paddingBottom: '2.5%'}}>
                                <Typography variant='h5'>Recommended</Typography>
                                <Typography style={{paddingLeft:'10px', alignSelf:'center'}}>See more</Typography>
                            </div>
                            <Course title='CS 337: Database Systems'/>
                        </Stack>
                        <Stack>
                            <Typography variant='h5'>Course List</Typography>
                        </Stack>
                    </div>
                </Box>
            </Paper>
        </div>
    )
}

export default CourseSelector
