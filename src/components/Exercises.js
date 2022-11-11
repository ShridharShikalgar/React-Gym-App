import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'
//import utils file functions
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises,setExercises,bodyPart}) => {

  //current page is set=1 default
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;
  //Adding fixed no.of exercises for each pages
  const indexOfLastExercise = currentPage * exercisesPerPage;//example : indexOfLastExercise=2 * 9 = 18 (indexOfLastExercise=18) so 2nd page is a last page here
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // example: indexOfFirstExercise = 18 - 9 = 9 (indexOfFirstExercise = 9) so that means this is the firstPage 
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
  const paginate = (e,value) =>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }
  //adding useEffect when we click BodyPart it should show us those exercises
  //this useEffect called when anything make changes to bodyPart to function which is inside the useEffect will be triggerd
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exercisesData = []; 
      if(bodyPart === "all"){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }else{
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}',exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart])

  return (
    <Box 
      id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
    <Typography  
      variant='h3' 
      mb='46px' 
      textAlign='center' 
      fontWeight='500'>
      Showing Results
    </Typography>
    <Stack
      direction='row'
      sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap='wrap'
      justifyContent='center'
    >
    {
      currentExercises.map((exercise, index)=>(
        <ExerciseCard key='index' exercise={exercise} />
      ))}
    </Stack>
    <Stack mt='100px' alignItems='center'>
      {exercises.length>9 && (
        <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length/9)} //total number of pagination page will showned up 
          //State of current page
          page={currentPage}
          //paginate will be a function, here MUI Pagination bydefault passes onChange={(e)=>paginate(e,value)}
          //value = of a current page this is default so need of writing alot we can simply write onChange={paginate} 
          onChange={paginate} 
          size='large'
        />
      )}
    </Stack>
    </Box>
  )
}

export default Exercises
