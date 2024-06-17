import { Box, Grid } from '@mui/material';
import React from 'react';
import NavItems from '../components/NavItems';
import ccImage from '../assets/comfort.png';  // Upewnij się, że plik ma wymiary 3840px x 1280px

const Nav = () => {
  return (
    <Box width={'100%'} sx={{ bgcolor: '#031B31', padding: '0px', position: 'relative', maxWidth: '100%', margin: '0 auto',  paddingBottom: '5px'}}>
      <Grid container alignItems="center" justifyContent="center" position="relative">
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', position: 'relative', display: {
          xs: 'none',
          lg: 'inherit'
        } }}>
        </Grid>
        <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              '& img': { 
                width: { xs: '270px', lg: '540px' },
                height: 'auto' 
              }
          }}
>
        <img src={ccImage} alt="logo" style={{ height: 'auto' }} />
</Grid>

        <Grid item xs={12} lg={4} sx={{display: 'flex', justifyContent: 'center'}} >
          <NavItems />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
