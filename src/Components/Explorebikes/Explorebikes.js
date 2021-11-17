import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Explorebike from '../Explorebike/Explorebike';
import useProducts from '../../hooks/useProducts';

const Explorebikes = () => {
    const [products] = useProducts([]);
    return (
        <Container sx={{ mt: 5, mb: 8 }} >
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:2, mt:2}} variant="h4" component="div">
                   Explore Our Bikes
                </Typography>
                <Grid container spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      products.map(bike=><Explorebike key={bike._id} bike={bike}></Explorebike>)
                    }
                </Grid>
            </Container>
    );
};

export default Explorebikes;