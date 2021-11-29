import { Stack } from '@mui/material'
import React from 'react'
import RangeSlider from './RangeSlider'

function AvailabilityChart() {
    return (
        <div>
            <Stack spacing={1} direction="column" sx={{ mb: 1 }} alignItems="center">
                <RangeSlider day='Monday' />
                <RangeSlider day='Tuesday' />
                <RangeSlider day='Wednesday' />
                <RangeSlider day='Thursday' />
                <RangeSlider day='Friday' />
            </Stack>
        </div>
    )
}

export default AvailabilityChart
