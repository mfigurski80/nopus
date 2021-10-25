import styled from 'styled-components';

import { listHours, scheduleByDay, stringToColor } from 'utils';

const WEEK_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Schedule({schedule, timeRange: [ start, end ]}) {

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
                            color={stringToColor(schedule[i].name)}
                        >
                            {schedule[i].name}
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
    text-align: center;
    color: var(--color-text-light);
`;

const HEADER_HEIGHT = 40;
const QUARTER_HOUR_HEIGHT = 20;

const TimeColumn = styled.div`
    display: grid;
    grid-template-rows: ${HEADER_HEIGHT}px repeat(${({nRows}) => nRows}, ${QUARTER_HOUR_HEIGHT * 4}px);
    color: var(--color-text-light);
    // align-items: center;
`;

const DayColumn = styled.div`
    display: grid;
    grid-template-rows: ${HEADER_HEIGHT}px repeat(${({nRows}) => nRows}, ${QUARTER_HOUR_HEIGHT}px);
`;

const Event = styled.div`
    background: #eee;
    grid-row: ${({start}) => start + 2} / ${({end}) => end + 2};
    border-radius: 10px;
    border: 2px solid #2222;
    padding: 10px;
    background: ${({color}) => color};
`;