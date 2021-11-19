import * as React from 'react';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


const lightTheme = createTheme({ palette: { mode: 'light' } });

const ManageOrder = () => {
    const [booking,setBooking] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('https://shrouded-temple-49103.herokuapp.com/allBookingProduct')
       .then(res => res.json())
       .then(result => {
           console.log(result)
           setBooking(result)});
     }, [booking]);

     const handleUpdate = id =>{
        fetch(`https://shrouded-temple-49103.herokuapp.com/booking/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Status Updated!');
            }
        })
    }


    return (
        <Container sx={{mt:5, mb:5}}>
          <h2  style={{color:"black", textAlign:'center'}}>Manage all Orders</h2>
          <Grid container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
                {booking.map(book=><Grid item xs={4} sm={8} md={6} key={book?._id}>
                <ThemeProvider theme={lightTheme}>
                  <Card sx={{ boxShadow: 2, border: 0}}>
                    <CardContent>
                    <Typography sx={{textAlign: 'center',  color:"black"}} variant="h6" component="div">
                         {book?.name}
                    </Typography>
                    <Typography sx={{textAlign: 'start',  color:"black"}} variant="body1" component="div">
                        Recipient Name: {book?.username}
                    </Typography>
                    <Typography sx={{textAlign: 'start',  color:"black"}} variant="body2" component="div">
                    Recipient Email: {book?.email}
                    </Typography>
                    <Typography sx={{textAlign: 'start',  color:"black"}} variant="body2" component="div">
                    Address: {book?.address}
                    </Typography>
                    <Typography sx={{textAlign: 'start',   color:"red"}}  variant="body1" component="div" >
                       Total : {book?.price}
                    </Typography>
                </CardContent>
                <CardActions>
                  { book?.status==='Pending'?
                    <Button onClick={()=>handleUpdate(book._id)}  variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"black"}}>Pending</Button>
                  :
                    <Button  variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"black"}}>Shipped <LocalShippingOutlinedIcon/> </Button>
                  }
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>)}
        </Grid>
        </Container>
    )
};

export default ManageOrder;