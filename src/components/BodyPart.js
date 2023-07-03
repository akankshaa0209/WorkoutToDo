import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

//t create this component we'll firstly render stack and inside that we'll have img

const BodyPart = ({ item, setBodyPart, bodyPart }) => { //these are the props pased into this cmpnnt..cz in horizontal scrollbar.js these have been passed in bodypart
  return (
    <Stack type="button" alignItems="center" justifyContent="center" 
      className='bodyPart-card'
      sx={{
         borderTop: bodyPart === item ? '4px solid #ff2625': '',   //checks if bodypart is equal to item,
         backgroundColor: '#fff',                                  // we show bordertop value else we show empty string in bordertop
         borderBottomLeftRadius: '20px', 
         width: '270px', 
        height:'280px', 
        cursor:'pointer', 
        gap: '47px'    //after this they'll still appear in a line instead of row, so go to horizontalscrollbar and import scrollmenu and visibiltycontext
         }}
         onClick={ () => {   //for making functional on click..on click we'll have a callback function nd will select bodypart to the currently selected item
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: "smooth"}); //once we click on the card categories, we're going to scroll down to exercises
         }}                                                        
    >                                                                                                              
        <img src={Icon}alt='dumbbell' style={{width: '40px', height: '40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color= "#3a1212" textTransform="capitalize"> {item} </Typography>
    </Stack>
  )
}

export default BodyPart

//last typography is to show the name of bodyparts in v=cards like we bodypart we are clicking on
//last typography renders item to show the name of bodyparts
//window.scrollTo({top: 1800, left: 100, behavior: "smooth"}) ..will send  the state of selected card category back to the component thats inside home i/e, exercises