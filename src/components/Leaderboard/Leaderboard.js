import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Leaderboard = () => {
    const classes = useStyles();
    const users = useSelector(state => state.users)
    const image = require.context('../../img',true);
    const usersId = Object.keys(users).sort((a,b) => 
    (users[b].questions.length + Object.keys(users[b].answers).length) -
    (users[a].questions.length + Object.keys(users[a].answers).length) )
    
    return (
        <Container style={{marginTop:75}}>
            <Row className='justify-content-center'>
                <Col md={10}>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Avatar</StyledTableCell>
                                    <StyledTableCell align="center">Username</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">#Questions Asked</StyledTableCell>
                                    <StyledTableCell align="center">#Questions Answered</StyledTableCell>
                                    <StyledTableCell align="center">Total Score</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {usersId.map((id) => (
                                <StyledTableRow key={id}>
                                <StyledTableCell align="left">
                                    <Avatar alt={users[id].name}  src={image(users[id].avatarURL).default}/>
                                </StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{users[id].name}</StyledTableCell>
                                <StyledTableCell align="center">{users[id].questions.length}</StyledTableCell>
                                <StyledTableCell align="center">{Object.keys(users[id].answers).length}</StyledTableCell>
                                <StyledTableCell align="center">{(users[id].questions.length + Object.keys(users[id].answers).length) }</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Col>
            </Row>
            
        </Container>
    );
}

export default Leaderboard;
