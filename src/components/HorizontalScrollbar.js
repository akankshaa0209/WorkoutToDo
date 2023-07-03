import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';
//now we'll wrap our entire application with scrollmenu
//adding scrollmenu under horizontalsrollbar below will make exercise cards list horizontal
//code for left and right arrows is also asdded below
//to use left nd right arrow, simply pass them to scroll menu

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    ); 
  };
  
//these arrows are like typography that has img inside it

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (        //for each item we want to return a box
         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
           {data.map((item) => (
             <Box 
               key ={item.id || item}
               itemId ={item.id || item}
               title ={item.id || item}
               m= "0 40px"
             >
              {isBodyParts ? <BodyPart item= {item} bodyPart={bodyPart} 
          setBodyPart= {setBodyPart} /> 
             : <ExerciseCard exercise= {item}/>
          }  
             </Box>
            )
          )}
      
      </ScrollMenu>
    )
  }

export default HorizontalScrollbar

//its implemented to get those cards..it accepts the data prop.. loop over data
//we r going to get item and for each individual item we return a box
//key of this box may be item.id or iten only cz we'll pass different things 
//inside of box we'll render body part so simply render the item..after importing bodypart we'll render bodypart item there
//to turn them into card we'll craeate bodypart.js
//bodypart is rendered inside horizntlscrllbar 
//BodyPart item= {item} bodyPart={bodyPart} setBodyPart= {setBodyPart}...bodypart is passed through prop {bodyPart}....these properties r pssd through props
