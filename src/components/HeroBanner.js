import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box sx= {{ mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club  
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
        </Typography>

        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: 'ff2625', padding: '10px'}}>
        Explore Exercises
        </Button>

        <Typography fontWeight={600} color="#ff2625" 
        sx ={{ opacity:0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px">
        Exercise
        </Typography>

        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'></img>

    </Box>
  )
}

export default HeroBanner

//typography can b cosidered as a p tag..think of it as a heading or para just a text elemnt with some additional styles
//wrap the entire div with a box, rather make this component a box
//inside box we'll b having a typogrphy componenet saying something like fitness club
//styling of "fitness club" written below the logo has been done in its typogrphy
//br break tag..next line
//for button enhancemnt, go to materialUi and explore button section. we have added varaint=conatained for our purpose
//to change button color, do browse the same section for implementing button color
//to divide typogrphy 3 from button, use mb margin bottom
//href in button means it will scroll down to exercises page
//sx is a prop to give additional styles
//in typogphy of exercises, xs:'none' is done to hide it on mobile devices..we dont need to dive into css with medi queries 
//...instead we can do right here