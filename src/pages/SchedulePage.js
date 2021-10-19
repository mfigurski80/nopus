import { Container } from '@material-ui/core';

import Schedule from 'components/Schedule';

export default function SchedulePage() {
    return (
        <Container>
            <h1>Schedule</h1>
            <Schedule timeRange={[8*60, 18*60]}/>
        </Container>
    );
}

