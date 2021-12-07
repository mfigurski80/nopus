import { TextField, Typography, Box, Button } from '@material-ui/core'
import styled from 'styled-components'; // https://styled-components.com/
import { useState, useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';
import axios from 'axios';

import { post } from 'utils'

function containsObject(string, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      const listCopy = list[i].toLowerCase();
      const stringCopy = string.toLowerCase();
      if (listCopy == stringCopy) {
        return true;
      }
    }
    return false;
}

function CourseSelector({ setSchedule }) {
    const [filteredResults, setFilteredResults] = useState([]);
    const [courses, setCourses] = useState([])
    const [courseInput, setCourseInput] = useState("")
    const coursesRef = useRef(null) // points to courses, prevents multiple api calls
    const { user } = useAuth0();

    useEffect(() => coursesRef.current = courses, [courses]) // write ref
    useEffect(() => getSchedule, [coursesRef]) // getSchedule on unmount

    const handleChange = event => {
      setCourseInput(event.target.value);
    };

    // useEffect(() => {
    //   searchItems(courseInput);
    // }, [courseInput]);

    const searchItems = async (searchValue) => {
      if (courseInput != '') {
        try {
          const response = await axios.get(`https://nopus-backend.herokuapp.com/home/${courseInput}`);
          // setFilteredResults(response.data);
          return response.data
        } catch (error) {
          console.log(error);
          // setFilteredResults([]);
          return []
        }
      } else {
        // setFilteredResults([])
        return []
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

    const onClickAddCourse = async (e) => {
      let searched = await searchItems(courseInput)
      if (searched.length != 0 && !containsObject(courseInput, courses)) {
        setCourses([...courses, courseInput]);
        setCourseInput('');
        setFilteredResults([]);
      } else if (containsObject(courseInput, courses)) {
        alert("This course has already been added.")
      } else {
        alert("Course not found. Make sure you format your search with a space (e.g. 'CS 370').");
      }
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
                        <TextField variant='filled' value={courseInput} onChange={handleChange}/>
                        <Button onClick={onClickAddCourse}>Add</Button>
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
            <Button>Generate New Course</Button>
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
