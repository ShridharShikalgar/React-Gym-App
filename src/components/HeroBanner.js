import React from 'react'

import {Box, Typography, Button} from '@mui/material'
import styled from '@emotion/styled'

import HeroBannerImage from '../assets/images/banner.png'

const TypographyText1 = styled(Typography)({
    color: '#FF2625',
    fontWeight: 600,
    fontSize:'26px'
})
const TypographyText2 = styled(Typography)({
    fontWeight: 700,
})
const TypographyText3 = styled(Typography)({
    fontSize:'22px',
    lineHeight:'35px',
    marginBottom:"30px",
})
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'}, //lg: large Screen
        ml:{sm: '50px'} //ml : marginLeft
    }} position='relative' p='20px'>
      <TypographyText1>
        Fitness Club
      </TypographyText1>
      <TypographyText2 
        sx={{ fontSize: {lg: '44px', xs: '40px'}}}
        mb='23px' mt='30px'
      >
        Sweat, Smile <br/> and Repeat
      </TypographyText2>
      <TypographyText3>
        Check out the most effective exercises
      </TypographyText3>
      <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor:'#ff2625',padding:'10px'}}>
       Explore Exercises
      </Button>
      <Typography fontWeight={600} color='#ff2625' fontSize='200px'
        sx={{ opacity:0.1, display: { lg:'block', xs: 'none'}}}>
       Exercise
       </Typography>
       <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
