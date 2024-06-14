import { Box, Grid } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import NavItems from '../components/NavItems'
import ccImage from '../assets/cc.png'
const Nav = () => {
  return (
    <Box width={'100%'}>
        <Grid container>
            {/* <Grid item xs={4}> */}
                
            {/* </Grid> */}
            <Grid item xs={8}>
              <Box sx={{
                backgroundColor: "yellow"
              }}>
                <img src={ccImage} alt="logo" style={{width: '80px'}} />
              </Box>
            </Grid>
            <Grid item xs={4}>
                <NavItems />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Nav