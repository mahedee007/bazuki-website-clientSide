import React, {useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router';
import { useForm } from "react-hook-form";
import useProducts from '../../../hooks/useProducts';
import useAuth from '../../../hooks/useAuth';





const BookBikes = () => {
    const {bikeId} = useParams();
    const [products] = useProducts();
    const [description, setdescription]= useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/dashboardPage';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();


    useEffect(()=>{
        const matchPlant = products.find(singleBike=>singleBike._id===bikeId);
        setdescription(matchPlant);
    },[bikeId, products]);


    const onSubmit = (data) => {
        data.status= "Pending";
        fetch('https://shrouded-temple-49103.herokuapp.com/booking', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              alert("Booked Successfully!");
              reset();
              history.push(redirect_uri);
        });
    };

    return (
        <>
        
        <Container sx={{mt:5, mb:8}}>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{mt:5, mb:8}}  columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={6} >
            <Typography sx={{textAlign: 'center', m:1, mb:3, color:"black", fontWeight:'700'}} variant="h5" component="div">
               Bike description
            </Typography>
            <Card sx={{ minWidth: 260 , mx:'auto', maxWidth: 350, boxShadow: 2, border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={description?.img}
                alt={description?.name}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, color:"black", fontWeight:'700'}} variant="h5" component="div">
                        {description?.name}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"black", fontWeight:"500"}} variant="body1" component="div" >
                        {description?.description}
                    </Typography>
                    
                    <Typography sx={{textAlign: 'center',  color:"black", fontWeight:'700'}}  variant="body2" component="div" >
                        Price : {description?.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4} sm={8} md={6} >
        <Typography sx={{textAlign: 'center', m:1, mb:3, color:"black", fontWeight:'700'}} variant="h5" component="div">
               Booking Form
            </Typography>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {
                description?.name &&  <input
                className="input"
                {...register("name")}
                defaultValue={description?.name}
                placeholder="Name"
                />
                }
                <br />
                <input
                className="input"
                {...register("username")}
                defaultValue={user.displayName}
                placeholder="Name"
                />
                <br />
                <input
                className="input"
                {...register("email")}
                defaultValue={user.email}
                placeholder="Email"
                />
                <br />
                {
                description?.price &&  <input
                className="input"
                {...register("price")}
                defaultValue={description?.price}
                placeholder="Price"
                />
                }
                <br/>
                <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Address"
                className="input"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input style={{backgroundColor:'black', color:'white'}} type="submit" className="input" value="Confirm Booking"/>
            </form>
        </Grid>
    </Grid>
    </Container>
    
    </>
    )

};

export default BookBikes;