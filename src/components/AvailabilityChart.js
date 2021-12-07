import { Stack } from '@mui/material'
import { useState } from 'react'
import RangeSlider from './RangeSlider'

function AvailabilityChart({ranges, setRanges}) {
    // uid of person,
    // courses list
    // maxCredit, minCredit
    // POST /profile/preferences/:uid
    // availabilities: {2: {start: 8, end: 20}}

    const setRange = i => range => {
        setRanges(ranges.map((r, j) => j === i ? range : r))
    }

    return (
        <div>
            <Stack spacing={0} direction="column" sx={{ mb: 1 }} alignItems="center">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                    <RangeSlider day={day} key={i} val={ranges[i]} setVal={setRange(i)} />
                ))}
            </Stack>
        </div>
    )
}

export default AvailabilityChart
