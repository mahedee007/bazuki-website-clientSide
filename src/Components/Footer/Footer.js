
import React from 'react';



import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Twitter } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaymentIcon from '@mui/icons-material/Payment';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
 

const Footer = () => {
    return (
        <Container sx={{ flexGrow: 1, backgroundColor: 'black' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
          <Typography sx={{color:'white', fontWeight:'700'}} variant="h6" gutterBottom component="div">
        Bazuki
      </Typography>
          <Typography sx={{color:'white', }} variant="body2" gutterBottom component="div">
          <HomeIcon sx={{fontSize:'small'}}/> Cha-175/1 mohakhali, Dhaka-1213 <br/>
          <PhoneOutlinedIcon sx={{fontSize:'small'}}/> 01779897009
      </Typography>
        
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <Typography sx={{color:'white', fontWeight:'700'}} variant="h6" gutterBottom component="div">
        Get Social With Bazuki
      </Typography>
      <FacebookIcon sx={{fontSize:'large', color:'white'}}/>
        <Twitter sx={{fontSize:'large', color:'White'}}/>
        <InstagramIcon sx={{fontSize:'large', color:'White'}}/>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <Typography sx={{color:'white', fontWeight:'700'}} variant="h6" gutterBottom component="div">
        Quick Links
      </Typography>
      <Typography sx={{color:'white' }} variant="body2" gutterBottom component="div">
            <PaymentIcon sx={{color:'white', }}/> Payment method
        </Typography>
      <Typography sx={{color:'white' }} variant="body2" gutterBottom component="div">
            <PaymentIcon sx={{color:'white', }}/> News
        </Typography>
      <Typography sx={{color:'white' }} variant="body2" gutterBottom component="div">
            <HomeIcon sx={{color:'white', }}/> Home
        </Typography>
      <Typography sx={{color:'white' }} variant="body2" gutterBottom component="div">
            <PrivacyTipIcon sx={{color:'white', }}/> Privacy Policy
        </Typography>
      <Typography sx={{color:'white' }} variant="body2" gutterBottom component="div">
            <AccessibilityIcon sx={{color:'white', }} /> Warranty Policy
        </Typography>
          </Grid>
          
        </Grid>
        <Typography sx={{color:'white', textAlign:'center' }} variant="body2" gutterBottom component="div">
        © 2021 All Rights reserve to Bazuki
        </Typography>
      </Container>
    );
};

export default Footer;