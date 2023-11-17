import React from "react";
import { Box } from "@mui/material";
import Bodyparts from "./Bodyparts";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'


function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div className={isFirstItemVisible ? 'arrow-disabled' : 'arrow'} onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="left-arrow"/>
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div className={isLastItemVisible ? 'arrow-disabled' : 'arrow'} onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow"/>
    </div>
  );
}

const HorizontalScrollbar = ({ data, bodypart, setBodyPart }) => {
  return (
    <div className="scroll-menu-container"> 
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            style={{ maxWidth: "100%" }} 
          >
            <Bodyparts
              item={item}
              bodypart={bodypart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;
