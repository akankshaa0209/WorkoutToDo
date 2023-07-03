//the cards below "showing results"....gifs of exercises fetched from api

import React from 'react';
import { Link } from 'react-router-dom';  //each one of cards is actually gonna be a link to details pg of that exercise
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return(
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>

            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
              <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
              </Button>
              <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
              </Button>
            </Stack>

            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
            {exercise.name}
            </Typography>

        </Link>
);
}
export default ExerciseCard;

//since each card is gonna be a link so a link will wrap everything here
//exr id here isnt defined cz we have to get indiv exer right here from props
//lazy loading means its gonna load immediately nd slow down website load
//in btn 1 we render exerc.bodypart
//in btn 2 we render exer.target
//since theres a huge list of exercises displyed , so we'll do pagination..in exercise.js