import styled from 'styled-components';

import { listHours } from 'utils';

export default function Schedule({schedule, timeRange: [ start, end ]}) {
    let nRows = (end-start) / 15;
    return (
        <>
            <WeekRow>
                <TimeColumn nRows={nRows/4}>
                    <p></p>
                    { listHours(start, end).map(h => (
                        <h4 id={h}>{h}</h4>
                    )) }
                </TimeColumn>
                <DayColumn nRows={nRows}>
                    <DayHeader>Monday</DayHeader>
                </DayColumn>
                <DayColumn nRows={nRows}>
                    <DayHeader>Tuesday</DayHeader>
                </DayColumn>
                <DayColumn nRows={nRows}>
                    <DayHeader>Wednesday</DayHeader>
                </DayColumn>
                <DayColumn nRows={nRows}>
                    <DayHeader>Thursday</DayHeader>
                </DayColumn>
                <DayColumn nRows={nRows}>
                    <DayHeader>Friday</DayHeader>
                </DayColumn>
            </WeekRow>
        </>
    );
}

const WeekRow = styled.div`
    display: grid;
    grid-template-columns: 80px repeat(5, 1fr);
    grid-gap: 4px;
    width: 100%;
    background: pink;
    & > * {
        width: 100%;
    }
`;



const DayHeader = styled.h3`
    background: red;
    text-align: center;
`;

const TimeColumn = styled.div`
    display: grid;
    grid-template-rows: 40px repeat(${({nRows}) => nRows}, 60px);
    align-items: center;
`;

const DayColumn = styled.div`
    display: grid;
    grid-template-rows: 40px repeat(${({nRows}) => nRows}, 15px);
`;