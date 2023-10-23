import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'
const Bodyparts = () => {
  return (


<Stack

   type="button"
    alignItems="center"
     justifyContent="center"
      className="bodyparts-card"
      sx={
        Bodyparts === item ?{
          borderTop:'4px solid #ff2625',
          backgroundColor:'#fff',
          borderBottomLeftRadius:'20px',
          width:'270px',
          height:'280px',
          cursor:'pointer',
          gap:'47px',
        }: ''
      }
      
      
      >

        <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}} />
    </Stack>
  )
}

export default Bodyparts