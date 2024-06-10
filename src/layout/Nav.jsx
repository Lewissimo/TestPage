import { Box, Grid } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import NavItems from '../components/NavItems'
const Nav = () => {
  return (
    <Box width={'100%'}>
        <Grid container>
            <Grid item xs={4}>
                
            </Grid>
            <Grid item xs={4}>
                <h1>LOGO</h1>
            </Grid>
            <Grid item xs={4}>
                <NavItems />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Nav