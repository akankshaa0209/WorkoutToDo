import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  //to determine the id of the exercise we're currently on 
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';



const ExerciseDetail = () => {  //start creating our jsx. wrap evythng with a box
  const [exerciseDetail, setExerciseDetail] = useState({}); //set to empty obj at start
  const [exerciseVideos, setExerciseVideos] = useState([]); //at start set to an empty array
  const { id } = useParams(); //gets access of the id number that we're on
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]); 



  useEffect(() => {  //to populate the above state
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      //api calls. thisfetchdata func accepts 2 diff things 1.)it accepts url(like here exrdburl) but we'll have to append something to it
      //..wlike we need to go inside of exc and then /paas the id we wnna fetch
      //2.)is exrsoptions which contains keyto alow us to make that request
      //after fetching data we wanna set it to state and populate it with that data(here exrdetail) 
      

      //second api call
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);  

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);


    };

    fetchExercisesData();
  }, [id]); //useeffect has a cllbck fnc and a dependency array thats having id inside 
//...which means we're gonna recall this function whenver id changes



  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail} />
       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
       <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail


//useParams..so we can fetch additional data about that exercise 
//key thing is to send exrc detail to detail component..by fetching
// fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)