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

    const [userInfo, setUserInfo] = useState({
        courses: [],
        major: '',
        graudation: '',
    });
    const [stage, setStage] = useState(0);

    const setParams = (obj) => {
        setUserInfo({...userInfo, ...obj});
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
                { [ MajorSection, CoursesSection, ProfileSection ][stage](userInfo, setParams) }
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

const MajorSection = (info, setParams) => (
    <>
        <h1>Major & Intended Graduation</h1>
        <p>Select the degree(s) you are working towards and the term limit you intend to graduate</p>
        <FormControl variant="filled" fullWidth>
            <h4>MAJOR</h4>
            <Select value={info.major} onChange={e => setParams({major: e.target.value})} label='Major'>
                <MenuItem value={'CS'}>Computer Science</MenuItem>
                <MenuItem value={'ECON'}>Economics</MenuItem>
                <MenuItem value={'MATH'}>Mathematics</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth>
            <h4>GRADUATION TERM</h4>
            <Select value={info.graduation} onChange={e => setParams({graduation: e.target.value})} label='Graduation'>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
            </Select>
        </FormControl>

    </>
)

const CoursesSection = (info, setParams) => (
    <>
        <h1>Completed Courses</h1>
        <p>Add all of the courses that you have completed or are in the process of completing to help us track your degree progress, general education requirements, and general course history.</p>
        <h4>ADD A COURSE</h4>
        <InputForm onSubmit={(e) => e.preventDefault()}>
            <TextField variant='filled' value={info.courseInput} onChange={v => setParams({courseInput: v.target.value})}/>
            <Button onClick={e => setParams({courses: [...info.courses, info.courseInput], courseInput: ''})}>Add</Button>
        </InputForm>
        <CourseDisplay>
            {(info.courses).map((c, i) => 
                <CourseItem key={i}>
                    {c}
                    <DeleteCourse onClick={() => setParams({
                        courses: info.courses.splice(i, 1) && info.courses
                    })}>X</DeleteCourse>
                </CourseItem>
            )}
        </CourseDisplay>
    </>
)

const ProfileSection = () => (
    <h1>Upload a Profile Picture</h1>
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

const InputForm = styled.form`
    display: flex;
    gap: 10px;
`;

const CourseDisplay = styled.section`
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const CourseItem = styled.p`
    padding: 10px 15px;
    background: var(--color-secondary);
    border-radius: 6px;
`;

const DeleteCourse = styled.button`
    padding: 8px;
    cursor: pointer;
    background: transparent;
    font-family: inherit;
    color: inherit;
    &:hover {
        color: var(--color-text);
    }
`;