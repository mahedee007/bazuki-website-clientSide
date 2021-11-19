import React from 'react';

import useAuth from '../../hooks/useAuth'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { makeStyles } from '@mui/styles';
import { Container, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    
    logo: {
      flexGrow: "1",
      textAlign:"start",
      cursor: "pointer",
      marginBottom: "14px",
      color: "black",
      fontWeight: "700"
  
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "1 rem",
      padding: '8px',
      margin: "8px",
      "&:hover": {
        color: 'red',
        
        borderBottom: "1px solid black",
      },
    },
  }));

const Header = () =>{

    const { user, logout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Container> 
       <AppBar style={{backgroundColor: "white", boxShadow: "none"}} position="static" >
      <CssBaseline  />
      <Toolbar >
        <Typography variant="h6" className={classes.logo}>
        Bazuki
        </Typography>
        {isMobile ? (
          <DrawerMenu />
        ) : (
          <div className={classes.navlinks}>
            {user?.displayName && <Link to="/home" className={classes.link}>{user.displayName}</Link>}
            <Link  className={classes.link} to="/home">
              Home
            </Link>
            <Link  className={classes.link} to="/explorebikes">
             Explore-bikes
            </Link>
             
            {
            user?.email ?
            <>
            <Link  className={classes.link} to="/dashboardPage">
              Dashboard
            </Link>
            <Button onClick={logout}  className={classes.link} >Logout</Button>
            </>
            :
            <Link  className={classes.link} to="/login">
              Login
            </Link>
           }
          </div>
        )}
      </Toolbar>
    </AppBar>
        </Container>
    );
};
export default Header;