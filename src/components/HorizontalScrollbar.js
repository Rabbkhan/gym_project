import React from 'react'
import { Box } from '@mui/material';
import Bodyparts from './Bodyparts';

const HorizontalScrollbar = ({data, bodypart, setBodyPart}) => {
  return (
    <div>
        {data.map((item)=>

            <Box

      key={item.id || item}
       itemId={item.id || item}
       title={item.id || item}
       m="0 40px"
       >
        <Bodyparts item={item} bodypart={bodypart} setBodyPart={setBodyPart}/>
            </Box>
        

        )}
    </div>
  )
}

export default HorizontalScrollbar