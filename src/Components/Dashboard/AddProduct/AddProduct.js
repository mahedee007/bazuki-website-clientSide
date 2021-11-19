import React from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';




const AddProduct = () => {
    const history = useHistory();
    const redirect_uri = '/explorebikes';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();


    const onSubmit = (data) => {

        fetch('https://shrouded-temple-49103.herokuapp.com/products', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{alert("Product Added Successfully!");
          reset();
          history.push(redirect_uri);});
    };


    return (
        
        <Container sx={{mt:5, mb:8}}>
           <Typography sx={{ mb:3, fontWeight:'700'}} variant="h5" component="div">
                Add a new product
            </Typography>
            
               <form onSubmit={handleSubmit(onSubmit)}  >
                    <input
                    {...register("name")}
                    placeholder="Name"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("img")}
                    type="url"
                    placeholder="Image URL"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("description")}
                    type="text"
                    placeholder="Description"
                    className="input"
                    />
                    <br />
                   
                    <input
                    {...register("price")}
                    placeholder="Price in BDT"
                    className="input"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{backgroundColor:'black', color:'white'}} type="submit" value="Confirm Submit" className="input" />
                </form>
            
        </Container>
        
    );
};

export default AddProduct;