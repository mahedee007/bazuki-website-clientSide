import React from 'react';
import Box from '@mui/material/Box';
import banner from '../../../images/banner.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={2}>
          
          <Grid item sx={{display:'flex',alignItems: 'center' }} xs={12} md={6}>
              <Box>
              <Typography sx={{fontWeight:'700' }} variant= "h2"  component="div" gutterBottom>
            BE A PART OF THE MOVERS GENERATION!
            </Typography>
            <Typography variant= "body1" component="div" gutterBottom>
            Bazuki Bikes are now at attractive prices.
            </Typography>
            <Link style={{textDecoration:'none'}} to='/explorebikes'> <Button sx={{color:'black', border:'1px solid black'}} variant="outlined">Explore Now <ArrowForwardIcon/></Button></Link>
              </Box>

          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={banner} alt='banner-img'/>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;