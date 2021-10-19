import styled from 'styled-components';

import { listHours } from 'utils';

export default function Schedule({timeRange: [ start, end ]}) {

    let schedule = {
        monday: [
            {start: 60*9, end: 60*10 + 30, title: 'Приветствие'},
        ],
    };
    
    let nRows = (end-start) / 15;
    return (
        <WeekRow>
            <TimeColumn nRows={nRows/4}>
                <p></p>
                { listHours(start, end).map(h => (
                    <h4 id={h}>{h}</h4>
                )) }
            </TimeColumn>
            <DayColumn nRows={nRows}>
                <DayHeader>Monday</DayHeader>
                { schedule.monday?.map(({start:s, end:e, title}) => (
                    <EventItem start={(s-start) / 15} end={(e-end) / 15}>{title}</EventItem>
                ))}
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
    );
}

const WeekRow = styled.div`
    display: grid;
    grid-template-columns: 80px repeat(5, 1fr);
    grid-gap: 4px;
    width: 100%;
    & > * {
        width: 100%;
    }
`;



const DayHeader = styled.h3`
    background: red;
    text-align: center;
`;

const HEADER_HEIGHT = 40;
const QUARTER_HOUR_HEIGHT = 20;

const TimeColumn = styled.div`
    display: grid;
    grid-template-rows: ${HEADER_HEIGHT}px repeat(${({nRows}) => nRows}, ${QUARTER_HOUR_HEIGHT * 4}px);
    // align-items: center;
`;

const DayColumn = styled.div`
    display: grid;
    grid-template-rows: ${HEADER_HEIGHT}px repeat(${({nRows}) => nRows}, ${QUARTER_HOUR_HEIGHT}px);
`;

const EventItem = styled.div`
    background: #eee;
    grid-row: ${({start}) => start + 2} / ${({end}) => end - 1};
`;