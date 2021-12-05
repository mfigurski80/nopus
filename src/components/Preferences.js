import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, useRef } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AvailabilityChart from "./AvailabilityChart";
import Select from 'react-select'

import { post } from 'utils';

function Preferences() {
    const [timeRanges, setTimeRanges] = useState(Array(5).fill([8, 20]))
    const minCredits = useRef(null)
    const maxCredits = useRef(null)

    const { user } = useAuth0();


    const options = []
    useEffect(() => {
        for (let i = 0; i < 24; i++) {
            options.push({value: i, label: i.toString()})
        }
        return onSubmit
    }, [])

    const onSubmit = async () => {
        await post(`https://nopus-backend.herokuapp.com/profile/preferences/${user.sub}`, {
            timeRanges,
            minCredits: minCredits.current?.value || 0,
            maxCredits: maxCredits.current?.value || 0,
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
                        <Typography>Minimum</Typography>
                        <Select options={options} ref={minCredits}/>
                    </div>
                    <div style={{width: '10em', padding:'1em'}}>
                        <Typography>Maximum</Typography>
                        <Select options={options} ref={maxCredits}/>
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
