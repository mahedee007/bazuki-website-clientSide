import { Container } from '@mui/material';
import React from 'react';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <Container sx={{ mt: 3, mb: 8 }}>
            <img style={{width: '100%'}} src={img} alt='not found'/>

        </Container>
    

        
    );
};

export default NotFound;