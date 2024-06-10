import { Grid } from '@mui/material'
import React from 'react'
import Contact from './Contact'

const NavItems = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Contact />
        </Grid>      
      <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>cośtam cośtam</Grid>
            <Grid item xs={12}>cośtam cośtam</Grid>
          </Grid>
        </Grid>      
    </Grid>
  )
}

export default NavItems