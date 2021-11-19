import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import useProducts from '../../../hooks/useProducts';


const ManageProducts = () => {
    const [products] = useProducts([]);

    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete product?');
        if(confirm){
            fetch(`https://shrouded-temple-49103.herokuapp.com/products/${id}`, {
               method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                   alert('Product deleted!')
                }
            })
        }
    }

    return (
        <Container sx={{ mt: 5, mb: 8 }} >
        <Typography sx={{fontWeight: 700, textAlign: 'center', mb:2, mt:2, color:"black"}} variant="h4" component="div">
           Manage all Products
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            products.map(bike=><Grid item xs={4} sm={4} md={4} key={bike?._id}>
                <Card sx={{ minWidth: 260 , maxWidth: 350, border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={bike?.img}
                alt={bike?.name}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, color:"black", fontWeight:'700'}} variant="h5" component="div">
                            {bike?.name}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"black", fontWeight:"500"}} variant="body2" component="div" >
                            {bike?.description}
                    </Typography>
                    
                    <Typography sx={{textAlign: 'center',  color:"red", fontWeight:'700'}}  variant="body1" component="div" >
                            Price : {bike?.price}
                        </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>handleDelete(bike?._id)} variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"black"}} startIcon={<DeleteIcon />}>Delete</Button>
                </CardActions>
              </Card>
              </Grid>
            )
        }
        </Grid>
        </Container>
    )
};

export default ManageProducts;