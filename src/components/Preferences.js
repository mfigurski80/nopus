import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AvailabilityChart from "./AvailabilityChart";
import Select from 'react-select'

function Preferences() {
    const options = []
    for (let i = 0; i < 24; i++)
    {
        options.push({value: i, label: i.toString()})
    }
    return (
        <div>
            <Paper elevation={6}>
                <Box p={2}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column',}}>
                            <Typography variant="h4">Set your preferences</Typography>
                            <div style={{paddingTop:'2em'}}>
                                <Typography variant="h5">CREDIT LIMIT</Typography>
                            </div>
                            <div style={{width: '10em', padding:'1em'}}>
                                <Typography>Minimum</Typography>
                                <Select options={options} />
                            </div>
                            <div style={{width: '10em', padding:'1em'}}>
                                <Typography>Maximum</Typography>
                                <Select options={options} />
                            </div>
                        </div>
                        <div style={{paddingLeft: '2em'}}>
                            <AvailabilityChart />
                        </div>
                    </div>
                </ Box>
            </Paper>
        </div>
    )
}

export default Preferences
