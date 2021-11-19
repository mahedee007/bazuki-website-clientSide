import React from 'react';
import {useEffect,useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Explorebike from '../../Explorebike/Explorebike';



const HomeProducts = () => {
    const [fixedProducts, setFixedProducts] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-temple-49103.herokuapp.com/fixedProducts')
       .then(res => res.json())
       .then(result => {
        setFixedProducts(result.products)
       });
     }, []);

    return (
        <div>
            <Container sx={{ mt: 3, mb: 8 }} >
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:5, mt:2}} variant="h4" component="div">
                 Our Bikes
                </Typography>
                <Grid container  spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      fixedProducts.map(bike=><Explorebike key={bike._id} bike={bike}></Explorebike>)
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default HomeProducts;