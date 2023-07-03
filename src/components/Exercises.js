//this is the page below the horizontal card(bodypart card) where results of exercises will be displayed

import React , {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material/';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises , setExercises, bodyPart }) => {  //through props in home.js under exercises component
const [currentPage, setCurrentPage] =useState(1);
const exercisesPerPage =9;
const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
console.log(exercises);
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    
const paginate =(e,value) => {   //e is event..paginate cmpt accepts e as well as value
setCurrentPage(value);
window.scrollTo({top: 1800, behavior: 'smooth'})  //to scroll to top of the page..will scroll to top of exercises
}

//to show the searched results after selecting horizontalscrollbar
useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if(bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } 
    else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);
//above code is for when we select bodypart part from hrzntlscrlbar, then changes should get reflected 

  return (                                      //now we'll implement jsx part for exercises starting from rendering box
  <Box id="exercises" sx={{ mt: { lg: '110 px' } }} mt="50px" p="20px">

     <Typography variant='h3' mb='46px'>
      Showing Results
     </Typography>

     <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, index) => (   //inside of stack here, we can map over all our exercises. 
        <ExerciseCard key={index} exercise={exercise} /> 
      ))}                              
     </Stack>
     
     <Stack mt="100px" alignItems="center"> 
        {exercises.length > 9 && ( //if more than 9 items in a page then paginate and use pagination cmpnt
          <Pagination color="standard" shape="rounded" defaultPage="1" count= {Math.ceil(exercises.length / exercisesPerPage)}   //count is the no of pages of pagination
          page= {currentPage} 
          onChange= {paginate} //this paginate component immediately passes the event aswellas value as we click on..onChange = { (e)=> paginate(e,value)} on the backend . thisis done by material ui
          size="large"/>
        )}

      </Stack>

  </Box>
  )
}

export default Exercises


// {exercises.map((exercise, index) => (   //inside of stack here, we can map over all our exercises. 
//         <p>{exercise.name}</p>          //....and its dynamic block of code
//       ))} 

//{Math.ceil(exercises.length / exercisesPerPage)}...to set count of pages..9 exercise per page