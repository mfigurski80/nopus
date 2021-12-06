import { TextField, Typography, Box, Button } from '@material-ui/core'
import styled from 'styled-components'; // https://styled-components.com/
import { useState, useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';

import { post } from 'utils'

function CourseSelector({ setSchedule }) {
    const [courses, setCourses] = useState([])
    const [courseInput, setCourseInput] = useState("")
    const coursesRef = useRef(null) // points to courses, prevents multiple api calls
    const { user } = useAuth0();

    useEffect(() => coursesRef.current = courses, [courses]) // write ref
    useEffect(() => getSchedule, [coursesRef]) // getSchedule on unmount


    const getSchedule = async () => {
        console.log("Courses var: ", coursesRef.current)
        let sch = await post(`https://nopus-backend.herokuapp.com/home/schedule`, {
            uid: user.sub.split('|')[1],
            courses: coursesRef.current
        }).catch(console.error)
        console.log("Schedule: ", sch)
    }

    return (
        <Box p={2}>
            <div style={{display:'flex', flexDirection:'row'}}> 
                <Stack>
                    <div style={{padding:'10px'}}> 
                        <Typography variant='h4'>Add Classes</Typography>
                        <Typography>Choose any classes that you want to include in your schedule</Typography>
                    </div>
                    <InputForm onSubmit={(e) => e.preventDefault()}>
                        <TextField variant='filled' value={courseInput} onChange={v => setCourseInput(v.target.value)}/>
                        <Button onClick={e => {
                            setCourses([...courses, courseInput]);
                            setCourseInput('');
                        }}>Add</Button>
                    </InputForm>
                    <CourseDisplay>
                        {(courses).map((c, i) => 
                            <CourseItem key={i}>
                                {c}
                                <DeleteCourse onClick={() => setCourses(
                                    courses.splice(i, 1) && courses
                                )}>X</DeleteCourse>
                            </CourseItem>
                        )}
                    </CourseDisplay>
                </Stack>
            </div>
        </Box>
    )
}


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

export default CourseSelector
