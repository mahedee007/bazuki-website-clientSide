import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const ClientFeedback = () => {

    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-temple-49103.herokuapp.com/reviews')
       .then(res => res.json())
       .then(result => {
           console.log(result)
           setReviews(result)});
    }, []);

    return (
        <Container sx={{mt:5, mb:8}}>
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:4, mt:5, color:"black"}} variant="h4" component="div">
                 Customer Reviews
                </Typography>
                <Grid container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
                {reviews.map(review=><Grid item xs={12} sm={12} md={4} key={review?._id}>
                <ThemeProvider theme={lightTheme}>
                  <Card sx={{ boxShadow: 2, border: 0}}>
                    <CardContent>
                    <Typography sx={{textAlign: 'center', fontWeight:'700', color:"black"}} variant="h5" component="div">
                         {review?.name}
                    </Typography>
                    <Typography sx={{textAlign: 'center', color:"black"}} variant="body2" component="div">
                        {review?.review}
                    </Typography>
                    <Typography sx={{textAlign: 'center', color:"black"}} variant="h6" component="div">
                        <Rating name="read-only" value={review?.rating} readOnly />
                    </Typography>
                </CardContent>
              </Card>
            </ThemeProvider>
          </Grid>)}
        </Grid>
        </Container>
    );
};

export default ClientFeedback;