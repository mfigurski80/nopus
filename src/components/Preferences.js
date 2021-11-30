import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AvailabilityChart from "./AvailabilityChart";
import Select from 'react-select'
import { SliderValueLabel } from "@mui/material";



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
                    <Typography variant="h3">Set your preferences</Typography>
                    <AvailabilityChart />
                    <Typography variant="h5">CREDIT LIMIT</Typography>
                    <Typography>Minimum</Typography>
                    <div style={{width: '10em'}}>
                        <Select options={options} />
                    </div>
                    <Typography>Maximum</Typography>
                    <div style={{width: '10em'}}>
                    <   Select options={options} />
                    </div>
                </ Box>
            </Paper>
        </div>
    )
}

export default Preferences
