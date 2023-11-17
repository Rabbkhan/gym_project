import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercise from '../components/Exercise';
import Bodyparts from '../components/Bodyparts';

const Home = () => {
  // Ensure the initial state values are properly set
  const [bodypart, setBodyPart] = useState('all'); // Changed to a single string instead of an array

  const [exercises, setExercises] = useState([]); // Default empty array
console.log(bodypart)
  return (
    <Box>
      {/* Render components */}
      <HeroBanner />
      {/* Pass necessary props */}
      <SearchExercise
        setExercises={setExercises}
        bodypart={bodypart}
        setBodyPart={setBodyPart}
      />
      {/* Pass necessary props */}
      <Exercise
        exercises={exercises}
        bodypart={bodypart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
