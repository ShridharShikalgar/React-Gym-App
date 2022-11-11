import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { styled } from '@mui/system'

//logo imported
import Logo from '../assets/images/Logo.png'
const Image = styled('img')({
    width: "48px",
    height: "48px",
    margin: "0 20px"
})
const AnchorTag = styled('a')({
  textDecoration: 'none',
  color:'#3A1212'
})
const LinkTag = styled(Link)({
  textDecoration: 'none',
  color:'#3A1212',
  borderBottom: '3px solid #FF2625'
})
const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent='space-around'
      sx={{gap:{sm:'122px', xs:'40px'},mt: {sm: '32px', xs:'20px'}, justifyContent:'none'}}
      px='20px'
    >
      <Link to="/">
        <Image src={Logo} alt='image not Found' />
      </Link>
      <Stack 
        direction="row"
        gap='40px'
        fontSize="24px"
        alignItems='flex-end'
      >
        <LinkTag to='/'>Home</LinkTag>
        <AnchorTag href='#exercises'>Exercises</AnchorTag>
      </Stack>
    </Stack>
  )
}

export default Navbar

//important points to be noted
// 1) Stack (MUI)
// The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.
// we directly have specified styles for the mui Stack element 
// line-27 : sx basically used for responsiveness
// xs - extra small device
// sm - small device
// px - padding x-axis