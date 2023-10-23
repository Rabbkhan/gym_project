
import React, {useState} from 'react';
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercise from '../components/Exercise'
 

const Home = () => {
  const [bodypart, setBodyPart] = useState(['all']);

  const [exercises, setExercises] = useState([]);

    return (
        
        <Box>
<HeroBanner/>
<SearchExercise setExercises={setExercises}
bodypart ={bodypart}
setBodyPart={setBodyPart}/>

<Exercise
setExercises={setExercises}
bodypart ={bodypart}
setBodyPart={setBodyPart}

/>
</Box>

    )
}
export default Home;