import { Paper, TextField, Typography } from '@material-ui/core'
import Box from "@material-ui/core/Box";
import React from 'react'

function CourseSelector() {
    return (
        <div>
            <Paper elevation={6}>
                <Box p={2}>
                    <div> 
                        <Typography variant='h4'>Add Classes</Typography>
                        <Typography>Choose any classes that you want to add to your schedule</Typography>
                        <Typography variant='h5'>ADD A COURSE</Typography>
                        <TextField id='course-search' label='Search Courses' variant='outlined' />
                        <Typography variant='h5'>Recommended</Typography>
                        <Typography>See more</Typography>
                        // Courses
                        <Typography variant='h5'>Course List</Typography>
                        // Courses added
                    </div>
                </Box>
            </Paper>
        </div>
    )
}

export default CourseSelector
