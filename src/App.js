import React from 'react';
import { Route, Routes } from 'react-router-dom';  //to route bw hmpg nd excr detail page
import { Box } from '@mui/material';  //a build div with some shadings nd clrs

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => { 
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">  
    <Navbar /> 
    <Routes>  
       <Route path="/" element={<Home />} />
       <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
    </Box>
  )
}

export default App

//sx={{ width: { xl: '1488px' } }} m="auto" for responsiveness in lrge devices
//xl lrge scree xs sml scren m margin auto ..material ui allows to do this on bx cpmnt
//app is wrapped with a box
//we wnt to show some routes below our navbar . there ll b 2 routes 
//first is having pth of / and its having element which is going to be rendered once som1 visits the/ slas thts going to be home componenet
//second route has path /exercise/:id this id is gonna b dynamiv, can be/1../2..etc dynamically rendered inside exercise deatil component so elemnt is gonna be exercisedetail
//since we r using route and routes so we hvae to imprt browser router from react router dom..