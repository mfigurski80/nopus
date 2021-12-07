import { useState } from 'react';
import styled from 'styled-components'; // https://styled-components.com/
import { 
    Container,
    Button,
    FormControl, Select, MenuItem, TextField,
} from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

import SidebarLayout from 'components/SidebarLayout';
import StepItem from 'components/StepItem';
import { post } from 'utils';

const STAGES = ['MAJOR & GRADUATION', 'COURSES TAKEN'];

export default function RegistrationPage() {
    const [userInfo, setUserInfo] = useState({
        courses: [],
        majors: [''],
        minor: '',
        courseInput: '',
        majorInput: '',
        minorInput: '',
        graduation: '',
    });
    const [stage, setStage] = useState(0);
    const { user } = useAuth0();

    const setParams = (obj) => {
        setUserInfo({...userInfo, ...obj});
    }

    let navigate = useNavigate();
    const onComplete = async () => {
        const userId = user.sub.split('|')[1];
        console.log(`https://nopus-backend.herokuapp.com/profile/majorMinor/${userId}`);
        const [res1, res2] = await Promise.all([
            post(`https://nopus-backend.herokuapp.com/profile/majorMinor/${userId}`, {
                major: userInfo.majors,
                minor: userInfo.minor,
                gradSem: 'Fall',
                gradYr: userInfo.graduation,
            }).catch(console.error),
            post(`https://nopus-backend.herokuapp.com/profile/courseList/${userId}`, {
                courseList: userInfo.courses,
            }).catch(console.error),
        ]);
        console.log(res1, res2);
        alert('User Info Submitted');
        navigate('/user/schedule');
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
                { [ MajorSection, CoursesSection ][stage](userInfo, setParams) }
            </SeparatedContainer>
            <Footer>
                {stage === STAGES.length - 1 ? (
                    <Button variant="contained" onClick={onComplete}>Complete</Button>
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
            <h4>GRADUATION TERM</h4>
            <Select value={info.graduation} onChange={e => setParams({graduation: e.target.value})} label='Graduation'>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
            </Select>
        </FormControl>
        <h4>MAJOR(S)</h4>
        {info.majors.map((m, i) => (
            <FormControl key={i} variant="filled" fullWidth>
                <Select value={m} onChange={e => {
                    let majors = info.majors;
                    majors[i] = e.target.value;
                    setParams({majors});
                }} label='Major'>
                    <MenuItem value={'ACT'}>Accounting</MenuItem>
                    <MenuItem value={'AAS'}>African American Studies</MenuItem>
                    <MenuItem value={'AFS'}>African Studies</MenuItem>
                    <MenuItem value={'AMST'}>American Studies</MenuItem>
                    <MenuItem value={'ANES'}>Anesthesiology</MenuItem>
                    <MenuItem value={'ANT'}>Anthropology</MenuItem>
                    <MenuItem value={'ARAB'}>Arabic</MenuItem>
                    <MenuItem value={'BIOETH'}>Bioethics</MenuItem>
                    <MenuItem value={'CHEM'}>Chemistry</MenuItem>
                    <MenuItem value={'CHN'}>Chinese</MenuItem>
                    <MenuItem value={'CL'}>Classics</MenuItem>
                    <MenuItem value={'CS'}>Computer Science</MenuItem>
                    <MenuItem value={'DANC'}>Dance</MenuItem>
                    <MenuItem value={'EAS'}>East Asian Studies</MenuItem>
                    <MenuItem value={'ECON'}>Economics</MenuItem>
                    <MenuItem value={'ENG'}>English</MenuItem>
                    <MenuItem value={'ENVS'}>Environmental Studies</MenuItem>
                    <MenuItem value={'FILM'}>Film Studies</MenuItem>
                    <MenuItem value={'FREN'}>French</MenuItem>
                    <MenuItem value={'GRK'}>Greek</MenuItem>
                    <MenuItem value={'HEBR'}>Hebrew</MenuItem>
                    <MenuItem value={'HIST'}>History</MenuItem>
                    <MenuItem value={'HLTH'}>Health</MenuItem>
                    <MenuItem value={'ICIVS'}>Islamic Civilization Studies</MenuItem>
                    <MenuItem value={'ITAL'}>Italian</MenuItem>
                    <MenuItem value={'JPN'}>Japanese</MenuItem>
                    <MenuItem value={'KRN'}>Korean</MenuItem>
                    <MenuItem value={'LAT'}>Latin</MenuItem>
                    <MenuItem value={'LING'}>Linguistics</MenuItem>
                    <MenuItem value={'MATH'}>Mathematics</MenuItem>
                    <MenuItem value={'MUS'}>Music</MenuItem>
                    <MenuItem value={'NS'}>Neuroscience</MenuItem>
                    <MenuItem value={'NBB'}>Neuroscience, Behavioral Biology</MenuItem>
                    <MenuItem value={'PERS'}>Persian</MenuItem>
                    <MenuItem value={'PHIL'}>Philosophy</MenuItem>
                    <MenuItem value={'PHYS'}>Physics</MenuItem>
                    <MenuItem value={'POLS'}>Political Science</MenuItem>
                    <MenuItem value={'PSYC'}>Psychology</MenuItem>
                    <MenuItem value={'QTM'}>QTM</MenuItem>
                    <MenuItem value={'REL'}>Religion</MenuItem>
                    <MenuItem value={'SOC'}>Sociology</MenuItem>
                    <MenuItem value={'THEA'}>Theatre</MenuItem>
                    <MenuItem value={'WGS'}>Women and Gender Studies</MenuItem>
                </Select>
            </FormControl>
        ))}
        { info.majors.length < 2 && (
            <AddItem onClick={() => setParams({majors: [...info.majors, '']})}>+ Add Major</AddItem>   
        )}
        <h4>MINOR</h4>
        { info.minor !== null ? (
            <FormControl variant="filled" fullWidth>
                <Select value={info.minor} onChange={e => setParams({minor: e.target.value})} label='Minor'>));
                <MenuItem value={'ACT'}>Accounting</MenuItem>
                <MenuItem value={'AAS'}>African American Studies</MenuItem>
                <MenuItem value={'AFS'}>African Studies</MenuItem>
                <MenuItem value={'AMST'}>American Studies</MenuItem>
                <MenuItem value={'ANES'}>Anesthesiology</MenuItem>
                <MenuItem value={'ANT'}>Anthropology</MenuItem>
                <MenuItem value={'ARAB'}>Arabic</MenuItem>
                <MenuItem value={'BIOETH'}>Bioethics</MenuItem>
                <MenuItem value={'CHEM'}>Chemistry</MenuItem>
                <MenuItem value={'CHN'}>Chinese</MenuItem>
                <MenuItem value={'CL'}>Classics</MenuItem>
                <MenuItem value={'CS'}>Computer Science</MenuItem>
                <MenuItem value={'DANC'}>Dance</MenuItem>
                <MenuItem value={'EAS'}>East Asian Studies</MenuItem>
                <MenuItem value={'ECON'}>Economics</MenuItem>
                <MenuItem value={'ENG'}>English</MenuItem>
                <MenuItem value={'ENVS'}>Environmental Studies</MenuItem>
                <MenuItem value={'FILM'}>Film Studies</MenuItem>
                <MenuItem value={'FREN'}>French</MenuItem>
                <MenuItem value={'GRK'}>Greek</MenuItem>
                <MenuItem value={'HEBR'}>Hebrew</MenuItem>
                <MenuItem value={'HIST'}>History</MenuItem>
                <MenuItem value={'HLTH'}>Health</MenuItem>
                <MenuItem value={'ICIVS'}>Islamic Civilization Studies</MenuItem>
                <MenuItem value={'ITAL'}>Italian</MenuItem>
                <MenuItem value={'JPN'}>Japanese</MenuItem>
                <MenuItem value={'KRN'}>Korean</MenuItem>
                <MenuItem value={'LAT'}>Latin</MenuItem>
                <MenuItem value={'LING'}>Linguistics</MenuItem>
                <MenuItem value={'MATH'}>Mathematics</MenuItem>
                <MenuItem value={'MUS'}>Music</MenuItem>
                <MenuItem value={'NS'}>Neuroscience</MenuItem>
                <MenuItem value={'NBB'}>Neuroscience, Behavioral Biology</MenuItem>
                <MenuItem value={'PERS'}>Persian</MenuItem>
                <MenuItem value={'PHIL'}>Philosophy</MenuItem>
                <MenuItem value={'PHYS'}>Physics</MenuItem>
                <MenuItem value={'POLS'}>Political Science</MenuItem>
                <MenuItem value={'PSYC'}>Psychology</MenuItem>
                <MenuItem value={'QTM'}>QTM</MenuItem>
                <MenuItem value={'REL'}>Religion</MenuItem>
                <MenuItem value={'SOC'}>Sociology</MenuItem>
                <MenuItem value={'THEA'}>Theatre</MenuItem>
                <MenuItem value={'WGS'}>Women and Gender Studies</MenuItem>
                </Select>
            </FormControl>
        ) : (
            <AddItem onClick={() => setParams({minor: ''})}>+ Add Minor</AddItem>
        )}
    

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

const AddItem = styled.p`
    padding: 10px;
    cursor: pointer;
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