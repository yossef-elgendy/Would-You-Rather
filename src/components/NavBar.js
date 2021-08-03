import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faSignOutAlt, faPlusSquare, faClipboardList, faInfoCircle }
from '@fortawesome/free-solid-svg-icons'

import NavStyle from './NavStyle';
import { useDispatch, useSelector } from 'react-redux';
import { unSetAuthedUser } from '../actions/authedUser'
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const { authedUser, users} = useSelector(state => state)
    const dispatch = useDispatch()
    const classes = NavStyle();
    const image = require.context('../img', true)
    const Authed = Object.keys(users).includes(authedUser)
    
    const currentUser = Authed? users[authedUser]: null

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    dispatch(unSetAuthedUser())
    
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}`}
      >
        <Toolbar>
        
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Would You Rather ?!
              </Typography>
            
            {currentUser !== null && (
                <span
                style={{marginLeft:"70%"}}
                >
               
                    
                  <Avatar alt={currentUser.name} src={image(currentUser.avatarURL).default} />
                  <span style={{fontSize:14}}>{currentUser.name}</span>
                  
                </span>
            )}
            
        </Toolbar>
    
      </AppBar>


      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      > 
        <div className={classes.toolbar}>
          <span  style= {{fontWeight:400, marginRight:'20%', fontSize:20}}>
            Option Menu
          </span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </div>
        <Divider />
        
        
            
            {!Authed ? (
                <List>
                  <NavLink to="/login" style={{textDecoration:'none', color:'black'}}>
                    <ListItem button  key={1}>
                        <ListItemIcon style={{position:'relative', left:3}}>
                            <FontAwesomeIcon  icon={faSignInAlt} size="2x"  />
                        </ListItemIcon>
                        <ListItemText primary={"Login"} />
                    </ListItem>
                  </NavLink>
                </List>
            ):( 
                <List>
                  <NavLink to="/" style={{textDecoration:'none', color:'black'}}>
                    <ListItem button key={"Home"}>
                      
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faHome} size="2x" />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
        
                    </ListItem>
                  </NavLink>

                  <NavLink to="/add" style={{textDecoration:'none', color:'black'}}>
                    <ListItem button key={"Add"}>
                      
                        <ListItemIcon style={{position:'relative', left:3}}>
                            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                        </ListItemIcon>
                        <ListItemText primary={"Add Question"} />
                     
                    </ListItem>
                  </NavLink>

                  <NavLink to="/leaderboard" style={{textDecoration:'none', color:'black'}}>
                    <ListItem button key={"Leaderboard"}>
                      
                        <ListItemIcon style={{position:'relative', left:3}}>
                            <FontAwesomeIcon icon={faClipboardList} size="2x" />
                        </ListItemIcon>
                        <ListItemText primary={"Leaderboard"} />
                     
                    </ListItem>
                  </NavLink>

                    <ListItem button onClick={() => logout()}  key={"SignOut"}> 
                            <ListItemIcon style={{position:'relative', left:3}} >
                                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                            </ListItemIcon>
                            <ListItemText  primary={"SignOut"} />
                    </ListItem>  
                </List>         
            )}

                <List>
                  <NavLink to="/aboutus" style={{textDecoration:'none', color:'black'}}>
                    <ListItem button key={"AboutUs"}>
                      
                        <ListItemIcon style={{position:'relative', left:3}}>
                            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        </ListItemIcon>
                        <ListItemText primary={"About Us"} />
        
                    </ListItem>
                  </NavLink>
                </List>
            
        

      </Drawer>
    </div>
  );
}
