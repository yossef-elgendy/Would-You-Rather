import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Container from '@material-ui/core/Container';
import appImage from '../../img/appImage.jpg'
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import User from './User';
import { Redirect } from 'react-router-dom';
import Copyright from './Copyright';






const SignIn = () => {
    const classes = useStyles();
    const { users, authedUser } = useSelector(state => state)
    const userIds = Object.keys(users)
    const Authed = Object.keys(users).includes(authedUser)
    
    if(Authed){
        alert('You have already logged in !!')
        return <Redirect to="/" />

    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
            

                <FormControl variant="outlined" className={classes.formControl}> 
                    <img className={classes.appImage} src={appImage} alt="Logo" />;

                </FormControl>

                <Typography component="h1" variant="h6">
                    <strong>Choose a User:</strong>
                </Typography>

                
            </div>

            <Grid container justifyContent="center" spacing={2}>
                {userIds.map(id => <User key={id} id={id}/>)}

      
            </Grid>

            <Box mt={8}>
                <Copyright />
            </Box>
            
        </Container>
    );
}

export default SignIn;