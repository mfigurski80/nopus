import { TextField, Typography, Box, Button } from '@material-ui/core'
import styled from 'styled-components'; // https://styled-components.com/
import { useState, useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';
import axios from 'axios';

import { post } from 'utils'

function CourseSelector({ setSchedule }) {
    const [APIData, setAPIData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [courses, setCourses] = useState([])
    const [courseInput, setCourseInput] = useState("")
    const coursesRef = useRef(null) // points to courses, prevents multiple api calls
    const { user } = useAuth0();

    useEffect(() => coursesRef.current = courses, [courses]) // write ref
    useEffect(() => getSchedule, [coursesRef]) // getSchedule on unmount
    useEffect(() => {
      axios.get(`https://nopus-backend.herokuapp.com/home/`)
        .then((response) => {
          setAPIData(response.data);
        })
    }, [])

    const searchItems = (searchValue) => {
      setCourseInput(searchValue)
      if (courseInput != '') {

        const filteredData = APIData.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(courseInput.toLowerCase())
        })
        setFilteredResults(filteredData)
      } else {
        setFilteredResults(APIData)
      }
    }

    const getSchedule = async () => {
        console.log("Courses var: ", coursesRef.current)
        let sch = await post(`https://nopus-backend.herokuapp.com/home/schedule`, {
            uid: user.sub.split('|')[1],
            courses: coursesRef.current,
            semester: 'Spring 2022'
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
                        <TextField variant='filled' value={courseInput} onChange={(v) => searchItems(v.target.value)}/>
                        <Button onClick={e => {
                          if (filteredResults.length != 0) {
                            setCourses([...courses, courseInput]);
                            setCourseInput('');
                            setFilteredResults([])
                          } else {
                            alert("Course not found. Make sure you format your search with a space (e.g. 'CS 370').");
                          }
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
