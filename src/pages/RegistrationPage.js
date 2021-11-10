import { useState } from 'react';
import styled from 'styled-components'; // https://styled-components.com/
import { 
    Container, 
    Button,
    FormControl, Select, MenuItem, TextField,
} from '@material-ui/core';

import SidebarLayout from 'components/SidebarLayout';
import StepItem from 'components/StepItem';

const STAGES = ['MAJOR & GRADUATION', 'COURSES TAKEN', 'PROFILE PICTURE'];

export default function RegistrationPage() {

    const [userInfo, setUserInfo] = useState({});
    const [stage, setStage] = useState(0);

    const setParam = (name, val) => {
        setUserInfo({...userInfo, [name]: val});
    }

    return (
        <SidebarLayout contents={
            <>
                {STAGES.map((s, i) => 
                    <StepItem key={i} number={i+1} active={i === stage} onClick={e => setStage(i)}>{s}</StepItem>
                )}
            </>
        }>
            <SeparatedContainer maxWidth="md">
                { [ MajorSection, CoursesSection, ProfileSection ][stage](userInfo, setParam) }
            </SeparatedContainer>
            <Footer>
                {stage === STAGES.length - 1 ? (
                    <Button variant="contained" onClick={e => alert('Registration complete!')}>Complete</Button>
                ) : (
                    <>
                    <Button onClick={() => setStage(stage + 1)}>Skip</Button>
                    <Button variant="contained" onClick={() => setStage(stage + 1)}>
                        Continue
                    </Button>
                    </>
                )}
            </Footer>
        </SidebarLayout>
    )
}

const MajorSection = (info, setParam) => (
    <>
        <h1>Major & Intended Graduation</h1>
        <p>Select the degree(s) you are working towards and the term limit you intend to graduate</p>
        <FormControl variant="filled" fullWidth sx={{m: 1, minWidth: 80}}>
            <h4>MAJOR</h4>
            <Select value={info.major} onChange={v => setParam('major', v)} label='Major'>
                <MenuItem value={'CS'}>Computer Science</MenuItem>
                <MenuItem value={'ECON'}>Economics</MenuItem>
                <MenuItem value={'MATH'}>Mathematics</MenuItem>
            </Select>
            <h4>GRADUATION TERM</h4>
            <Select value={info.graduationMonth} onChange={v => setParam('graduationMonth', v)} label='Graduation'>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
            </Select>
        </FormControl>
    </>
)

const CoursesSection = (info, setParam) => (
    <>
        <h1>Completed Courses</h1>
        <p>Add all of the courses that you have completed or are in the process of completing to help us track your degree progress, general education requirements, and general course history.</p>
        <h4>ADD A COURSE</h4>
        <TextField />
    </>
)

const ProfileSection = () => (
    <h1>Profile Picture</h1>
)

const SeparatedContainer = styled(Container)`
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 20px 40px;
    display: flex;
    justify-content: right;
    gap: 20px;
`;