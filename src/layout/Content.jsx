import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import ContentOption from '../components/ContentOption';
import img from '../assets/test.png';
import { ContentContext } from '../context/ContentContext';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import HomeIcon from '@mui/icons-material/Home'; // Użyjemy Home jako zamiennika dla SmartHome
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import PoolIcon from '@mui/icons-material/Pool';
import FoundationIcon from '@mui/icons-material/Foundation';

const Content = () => {
  const contentContext = useContext(ContentContext);

  const generateExactOffer = (e) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    console.log(rect.left);
    console.log(rect.top);
    contentContext.setCoordinateX(rect.left);
    contentContext.setCoordinateY(rect.top);
  };

  return (
    <Box sx={{
      backgroundColor: "#031B31"
    }}>
      <Grid container justifyContent={'center'}>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<ElectricalServicesIcon sx={{ fontSize: 100 }} />} title={'INSTALACJE ELEKTRYCZNE'} />
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<HomeIcon sx={{ fontSize: 100 }} />} title={'INSTALACJE SMART-HOME'} />
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<SpeedIcon sx={{ fontSize: 100 }} />} title={'POMIARY ELEKTRYCZNE (UBEZPIECZENIA)'} />
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<VerifiedIcon sx={{ fontSize: 100 }} />} title={'WYSTAWIANIE CERTYFIKATÓW ENERGETYCZNYCH'} />
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<PoolIcon sx={{ fontSize: 100 }} />} title={'INSTALACJE BASENOWE'} />
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} onClick={generateExactOffer} item xs={12} sm={6} lg={4}>
          <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={<FoundationIcon sx={{ fontSize: 100 }} />} title={'REGENERACJA FUNDAMENTÓW'} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
