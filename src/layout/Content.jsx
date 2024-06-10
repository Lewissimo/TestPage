import { Box, Grid } from '@mui/material'
import React, { useContext, useRef } from 'react'
import ContentOption from '../components/ContentOption'
import img from '../assets/test.png'
import { ContentContext } from '../context/ContentContext'
const Content = () => {

  const contentContext = useContext(ContentContext);
  const generateExactOffer = (e) => {
    const element = e.currentTarget;
      const rect = element.getBoundingClientRect(); 
  console.log(rect.left);
  console.log(rect.top);
    contentContext.setCoordinateX(rect.left);
    contentContext.setCoordinateY(rect.top);
    }
  return (
    <Box>
        <Grid container justifyContent={'center'}>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}><ContentOption text='test' image={img}  title={'pierwszy'}/></Grid>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer}  item xs={12} sm={6} lg={4}><ContentOption text='qweqweqwewqe' image={img}  title={'pierwszy'}/></Grid>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}><ContentOption text='test' image={img}  title={'pierwszy'}/></Grid>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer}  item xs={12} sm={6} lg={4}><ContentOption text='test' image={img}  title={'pierwszy'}/></Grid>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer}  item xs={12} sm={6} lg={4}><ContentOption text='test' image={img}  title={'pierwszy'}/></Grid>
            <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}><ContentOption text='test' image={img}  title={'pierwszy'}/></Grid>
        </Grid>
    </Box>
  )
}

export default Content