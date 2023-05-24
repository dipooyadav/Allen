import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from "@mui/material/Container";
import Tooltip from '@mui/material/Tooltip';
import {  Grid, IconButton, Typography, Button, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
// import { Button, Modal } from '@material-ui/core';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(name, price, rating, quantity) {
  return { name, price, rating, quantity};
}


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor:'beige',
  border: "2px solid #000",
  borderRadius:4,
  p: 4,
};



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin:theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

function ViewRow({cartItems, setCartItems}) {

    const [currentRow, setCurrentRow] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const handleClose = () => {
      setModalOpen(false)
      
    };
    
    const handlePreview = ( row) => {
        setCurrentRow(row);
        setModalOpen(true);
      };



    const handleDelete = (row) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== row.name);
    setCartItems(updatedCartItems);
    };

    const rows = cartItems.map((item) =>
        createData(item.name, item.price, item.rating, item.quantity)
    );
     
      
    



  return (
    <React.Fragment>
    <Container>
    <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead style={{backgroundColor:'ThreeDFace',}}>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>View Details</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.rating}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>
            <Tooltip title="Preview">
            <Button onClick={() =>{ handlePreview(row) }} >
            <VisibilityIcon />
            </Button>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(row)}>
                    <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Container>
  <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Grid Container style={style}>
      <h2 style={{ textAlign: 'center', textDecorationLine:'underline',}}>Details</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item><Typography>Price: {currentRow.price}</Typography></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><Typography>Rating: {currentRow.rating}</Typography></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><Typography>quantity: {currentRow.quantity}</Typography></Item>
      </Grid>
    </Grid>
    <Button style={{marginBottom:10, marginTop: 10, marginLeft:'80%',}} variant='contained' onClick={handleClose}>Ok</Button>
      </Grid>
    </Modal>
    </React.Fragment>
  );
}

export default ViewRow;
