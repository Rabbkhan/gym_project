
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {ExerciseOptions, fetchData}from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
// var multer = require('multer');
const SearchExercise = ({setExercises, bodypart, setBodyPart}) =>  {
  const [search, setSearch] = useState('')

  const [bodyparts, setBodyParts] = useState([])


useEffect(()=>{

const fetchExerciseData = async () =>{

  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExerciseOptions);
  setBodyParts(['all', ...bodyPartsData]);
  console.log(bodyPartsData);
}
fetchExerciseData();

},[])





  
  const handleSearch = async() => {
      if(search){
        const exerciseData = await fetchData
        ('https://exercisedb.p.rapidapi.com/exercises',   ExerciseOptions);
        console.log(exerciseData);
        const SearchExercise = exerciseData.filter(

            (exercise) => exercise.name.toLowerCase().include(search)
            || exercise.target.toLowerCase().include(search)
            || exercise.equitment.toLowerCase().include(search)
            || exercise.bodypart.toLowerCase().include(search)



        );
        setSearch('');
        setExercises(SearchExercise);
      }
    }

  
  return (
    <Stack alignItems="Center" mt=" 37px" justifyContent="Center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome exercise you <br /> should know
      </Typography>


      <Box position="relative" mb="72px">

        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: "#fff",
            borderRadius: '40px'

          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text" />

   <Button className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: "absolute",
            right:'0'
          }} 
          onClick={handleSearch}
          >
            search
          </Button>
        
 </Box>

 <Box sx={{position:'realtive', width:'100%', p: '20px'}}>

<HorizontalScrollbar data={bodyparts}
bodypart={bodypart} setBodyPart={setBodyPart}
/>

 </Box>


    </Stack>
  )
        }


      
  export default SearchExercise