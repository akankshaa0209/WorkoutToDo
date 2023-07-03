import React from 'react';
import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  //reason for above 2 to be in home bcz changes madde in them are gonna be reflected all across application
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart}               //searchexercises and exercises share the same state. this cn also 
        setBodyPart={setBodyPart}          //be done via react context api..but its just two cmpnents so we cn simply
      />                                     
      <Exercises 
        setExercises={setExercises}        //simply pass the states through props
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  )
}

export default Home

//inside of home well be using many other compnts, so wrap inside a box
//first is herobanner ..part with text near img
//second searchexercises...third exercises