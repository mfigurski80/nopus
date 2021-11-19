import { useEffect } from 'react';
import { Container } from '@material-ui/core';

import Schedule from 'components/Schedule';

export default function SchedulePage() {
    
    useEffect(async () => {
        let resp = await fetch('https://nopus-backend.herokuapp.com/home/schedule', {
            method: 'POST',
            mode: 'no-cors'
        });
        console.log(resp);
    }, []);
    const schedule = [
        { start: 60*9, end: 60*10 + 30, name: 'CS 170', days: [0,2] },
        { start: 60*10, end: 60*11, name: 'CS 171', days: [1,3] },
        { start: 60*14, end: 60*15, name: 'CS 220', days: [0,2,4] },
    ];

    return (
        <Container>
            <h1>Schedule</h1>
            <Schedule schedule={schedule} timeRange={[8*60, 18*60]}/>
        </Container>
    );
}

