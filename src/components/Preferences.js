import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, useRef } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AvailabilityChart from "./AvailabilityChart";

import { post } from 'utils';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function Preferences() {
    const [timeRanges, setTimeRanges] = useState(Array(5).fill([8, 20]))
    const minCredits = useRef(null)
    const maxCredits = useRef(null)

    const timeRangeRef = useRef(null)

    const { user } = useAuth0();


    const options = []
    for (let i = 0; i < 24; i++) {
        options.push({ value: i, label: i.toString() })
    }
    useEffect(() => {
        for (let i = 0; i < 24; i++) {
            options.push({ value: i, label: i.toString() })
        }
    })
    useEffect(() => timeRangeRef.current = timeRanges, [timeRanges]) // keep timeRange synchronized for exit
    useEffect(() => onSubmit, [minCredits, maxCredits, timeRangeRef]) // on exit... send request

    const onSubmit = async () => {
        console.log('Running request: ', minCredits.current)
        let rangeObj = {}
        timeRangeRef.current.forEach((r, i) => rangeObj[i+2] = {start: r[0], end: r[1]})
        // FIXME: maxCredits and minCredits are not being read rn
        await post(`https://nopus-backend.herokuapp.com/profile/preferences/${user.sub.split('|')[1]}`, {
            timeRanges: rangeObj,
            minCredit: minCredits.current?.value || 0,
            maxCredit: maxCredits.current?.value || 23,
        }).catch(console.error)
    }

    return (
        <Box>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column',}}>
                    <Typography variant="h4">Set your preferences</Typography>
                    <div style={{paddingTop:'2em'}}>
                        <Typography variant="h5">CREDIT LIMIT</Typography>
                    </div>
                    <div style={{width: '10em', padding:'1em'}}>
                        <FormControl fullWidth>
                            <InputLabel id='minCredits'>Minimum</InputLabel>
                                <Select>
                                    {options?.map(option => {
                                        return (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label ?? option.value}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                        </FormControl>
                    </div>
                    <div style={{width: '10em', padding:'1em'}}>
                        <FormControl fullWidth>
                            <InputLabel id='maxCredits'>Maximum</InputLabel>
                                <Select>
                                    {options?.map(option => {
                                        return (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label ?? option.value}
                                        </MenuItem>
                                     );
                                 })}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div style={{paddingLeft: '2em'}}>
                    <AvailabilityChart ranges={timeRanges} setRanges={setTimeRanges} />
                </div>
            </div>
        </ Box>
    )
}

export default Preferences
