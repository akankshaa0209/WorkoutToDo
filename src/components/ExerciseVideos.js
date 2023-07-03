import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '80px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '90px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">

        {exerciseVideos?.slice(0, 6)?.map((item, index) => ( // we have to loop over exercise videos // we use ? to check if it actually exists
          <a
            key={index}   //anchor tag is used bcx each video is gonna be a link to youtube
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"  //to open it under a new tab
            rel="noreferrer"  //recommended when using _blank
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box> 
  );
};

export default ExerciseVideos;