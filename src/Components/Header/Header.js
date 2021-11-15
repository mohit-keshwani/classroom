import React from 'react'
import { useStyles } from "./style";
import {AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons"
import { useLocalContext } from "../../context/context";
import logo from "../../Assets/logo4.png"
import { CreateClass, JoinClass } from "..";

const Header = ({children}) => {
 const classes = useStyles();
 const { setCreateClassDialog, setJoinClassDialog, loggedInUser} = useLocalContext();

 const [anchorEl, setAnchorEl] = React.useState(null);
 const handleClick = (event) => setAnchorEl(event.currentTarget);
 const handleClose = () => setAnchorEl(null);

 const handleCreate =()=>{
     handleClose()
     setCreateClassDialog(true)
 }

 const handleJoin = () =>{
     handleClose();
     setJoinClassDialog(true);
 }

    return (
        <div className = {classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerWrapper}>
                        {children}
                        <img
                        src={logo}
                        alt="Microsoft"
                        />
                        <Typography variant ="h6" className = {classes.title}>
                            
                        </Typography>
                    </div>
                    <div className={classes.header_wrapper_right}>
                        <Add onClick={handleClick} className={classes.icon} />
                           <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                                <MenuItem onClick={handleJoin}>Join Club</MenuItem>
                                <MenuItem onClick={handleCreate}>Create Club</MenuItem>
                            </Menu>
                        <div>
                            <Avatar 
                            src = {loggedInUser?.photoURL}
                            className={classes.icon}
                            />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <CreateClass />
            <JoinClass />
        </div>
    );
};

export default Header;