import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ name, url, onClick}) => {
 
  return (
    <div>
      <div onClick = {onClick} className="card">
        <img className="product--image" src={url} alt={name} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Product;
