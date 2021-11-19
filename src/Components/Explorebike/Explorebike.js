import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';


const Explorebike = (props) => {
    const {name,description,img,price, _id} = props.bike;
    return(
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 260 , maxWidth: 350, boxShadow: 'none', border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={img}
                alt={name}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, fontWeight:'700'}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb:'4', fontWeight:"400"}} variant="body1" component="div" gutterBottom >
                        {description}
                    </Typography>
                    
                    <Typography sx={{textAlign: 'center', fontWeight:'700', color:'red'}}  variant="body2" component="div" >
                        Price : {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={`/bookBikes/${_id}`}  style={{ textDecoration: 'none', margin:'auto' }}>
                        <Button  variant="contained" size="medium" sx={{mx:'auto', color:"white", backgroundColor:"black" }}><AddShoppingCartSharpIcon/> Book Now</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Explorebike;