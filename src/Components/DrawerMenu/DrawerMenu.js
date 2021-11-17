import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@mui/material/Button';

import { NavLink } from "react-router-dom";

const useStyles = makeStyles(()=>({
    navlinks:{
        textDecoration:"none",
        color: 'black',
        fontWeight: '500',
        fontSize: "14px",
    },
    icon:{
        color: "black"
    }
}));

const DrawerMenu = () => {
    const { user, logout } = useAuth();
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);


    return (
        <>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <NavLink  to="/home" className={classes.navlinks}>Home</NavLink>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <NavLink  className={classes.navlinks} to="/explorebikes" >Explore Bikes</NavLink>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
            {user?.displayName && <ListItemText className={classes.navlinks}>{user.displayName}</ListItemText>}

            </ListItem>
            <Divider variant="middle"/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
            {
               user?.email ?
              <>
              <NavLink  className={classes.navlinks} to="/dashboard">
              Dashboard
              </NavLink>
              <Divider />
              <Button onClick={logout}  className={classes.navlinks} >Logout</Button>
              </>
              :
              <NavLink className={classes.navlinks} to="/login">
              Login
              </NavLink>
            }
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
          <MenuIcon/>
        </IconButton>
      </>
    );
};

export default DrawerMenu;