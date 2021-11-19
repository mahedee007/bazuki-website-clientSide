import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Media = () => {
    return (
    
        <Container sx={{ flexGrow: 1, mt: 4, mb: 8 }}>
            <Typography sx={{fontWeight: 700, textAlign: 'center', mb:5, mt:2}} variant="h4" component="div">
                 Latest Update
                </Typography>
            <Grid container spacing={2}>
            <Grid item sx={{display:'flex',alignItems: 'center' }} xs={12} md={6}>

        
            <iframe width="100%" height="400px"  src="https://www.youtube.com/embed/XlDBdhW4hG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </Grid>
        <Grid item sx={{display:'flex',alignItems: 'center' }} xs={12} md={6}>
              <Box style={{width: '100%'}}>
              <Typography sx={{fontWeight:'700' }} variant= "h3"  component="div" gutterBottom>
            SUZUKI GSX-750
            </Typography>
            <Typography variant= "body1" component="div" gutterBottom>
            Bazuki Bikes are now at attractive prices.
            </Typography>
            <Link style={{textDecoration:'none'}} to='/explorebikes'> <Button sx={{color:'black', border:'1px solid black'}} variant="outlined">Explore Now <ArrowForwardIcon/></Button></Link>
              </Box>

          </Grid>
        </Grid>
        </Container>
        
    );
};

export default Media;