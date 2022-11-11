//importing essesntial libraries
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Box} from '@mui/material'

//imported css file
import './App.css'

//importing Components and pages-components
import ExerciseDetails from './pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

//functional code begins from here
function App() {
  return (
    <Box width='400px' sx={{ width:{ xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/exercise/:id' element = {<ExerciseDetails />} /> 
      </Routes>
      <Footer />
    </Box>
  )
}

export default App

// important topics to be noted
// 1) <Navbar/><Home/><ExerciseDetail /> these are self closing components
// 2) As per the above we are using Router in our App component so we need to wrap our App to with BrowserRouter 
// 3) line-12 : {path='/exercise/:id'} here id is dynamic that means id might be 1,2,3,4...n
// 4) line-18 : <Box width='400px' sx={{ width:{ xl: '1488px' }}} m="auto"> Xl means 'Extra-large' we are making page responsive on extra large page that is on 1488px screen size && m for 'margin'='auto' xl acts as grid in mui