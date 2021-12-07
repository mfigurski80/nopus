import { Card, Paper, Typography } from '@material-ui/core'
import { Box, typography } from '@mui/system'
import React from 'react'

function Course({title}) {
    return (
        <div style={{width:'fit-content'}}>
            <Card style={{backgroundColor: 'orange'}}>
                <Box p={1} >
                    <Typography>{title}</Typography>
                </Box>
            </Card>
        </div>
    )
}

export default Course
