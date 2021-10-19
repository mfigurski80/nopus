import styled from 'styled-components';

import { listHours, scheduleByDay } from 'utils';

const WEEK_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Schedule({timeRange: [ start, end ]}) {

    const schedule = [
        { start: 60*9, end: 60*10 + 30, title: 'Привет', days: [0,2] },
        { start: 60*10, end: 60*11, title: 'Привет 2', days: [1,3] },
        { start: 60*14, end: 60*15, title: 'Привет 3', days: [0,2,4] },
    ];
    const dailySchedule = scheduleByDay(schedule);

    let nRows = (end-start) / 15;
    return (
        <WeekRow>
            <TimeColumn nRows={nRows/4}>
                <p></p>
                { listHours(start, end).map(h => (
                    <h4 id={h}>{h}</h4>
                )) }
            </TimeColumn>
            { dailySchedule.map((sch, i) => (
                <DayColumn key={i} nRows={nRows}>
                    <DayHeader>{WEEK_NAMES[i]}</DayHeader>
                    { sch.map(i => (
                        <Event key={i}
                            start={(schedule[i].start - start) / 15}
                            end={(schedule[i].end - start) / 15}
                        >
                            {schedule[i].title}
                        </Event>
                    )) }
                </DayColumn>
            )) }
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

const Event = styled.div`
    background: #eee;
    grid-row: ${({start}) => start + 2} / ${({end}) => end + 2};
`;