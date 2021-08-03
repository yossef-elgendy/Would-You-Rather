import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, CardActionArea, CardContent, Typography, Avatar} from '@material-ui/core'
import { setAuthedUser } from '../../actions/authedUser';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';


const User = (props) => {
    const classes = useStyles();
    const { id } = props
    const users = useSelector(state => state.users)
    const image = require.context('../../img', true)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = () => {
        dispatch(setAuthedUser(id))
        history.push('/')
    }

    return (
    <Grid item xs={4}> 
        <Card onClick={() => handleLogin() } className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Avatar 
                        src={image(users[id].avatarURL).default} 
                        alt ="tyler" 
                        className={classes.CustomAvatar}
                        />
                        {users[id].name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid> 
    );
}
export default User;