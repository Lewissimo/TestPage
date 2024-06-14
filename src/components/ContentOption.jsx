import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
const ContentOption = ({text, image, title}) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingBottom={'15px'} width={'400px'}>
      <Card  sx={{
        width:'300px',
        border: '2px solid black',
        height: '400px'
      }} >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {image}
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  )
}

export default ContentOption