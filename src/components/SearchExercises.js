import React,{useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'; 
import { styled } from '@mui/system'
import {fetchData, exerciseOptions} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const MuiStack = styled(Stack)({
  marginTop:'37px',
  alignItems:'center',
  justifyContent:'center',
  padding:'20px'
})
const TypoText = styled(Typography)({
  fontWeight:'700',
  marginBottom:'50px',
  textAlign:'center'
})

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartData]);
      console.log(bodyParts);
    }
    fetchExercisesData();
  },[])
  const handleSearch = async () => {
      if(search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
        const searchExercises = exerciseData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.type.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.difficulty.toLowerCase().includes(search)
        )
        setSearch('');
        setExercises(searchExercises)
        console.log(searchExercises);
        // console.log(exerciseData);
      }
  }
  return (
    <MuiStack>
      <TypoText sx={{ fontSize:{lg:'44px', xs: '30px'}}}>
      Awesome Exercises You <br/> Should Know
      </TypoText>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input:{ fontWeight:'700',border:'none',borderRadius:'4px' },
            width:{ lg:'800px', xs:'350px'},
            backgroundColor:'white',
            borderRadius:'40px'
          }}
          height="76px"
          value={search}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          placeholder='Search Any Exercise'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor:'#FF2625',
            color:'white',
            textTransform:'none',
            width:{ lg:'175px', xs:'80px'},
            fontSize:{ lg:'20px', xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
        Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar isBodyParts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </MuiStack>
  )
}

export default SearchExercises
