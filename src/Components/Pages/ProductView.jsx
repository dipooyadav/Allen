import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ScrollToTop from "react-scroll-to-top";

const ProductView = ({product, onClose, cartItems, setCartItems  }) => {
  const [quantity, setQuantity] = useState(0);
  const [imageNum, setImageNum] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handleImageClick = ()=>{
    setImageNum(getRandomInt(product.images.length));
  }
  
  const addItem = () => {
    if (quantity === 0) {
      // Remove the item from cartItems if quantity is 0
      const updatedCartItems = cartItems.filter(item => item.name !== product.title);
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        name: product.title,
        quantity: quantity,
        description: product.description,
        rating: product.rating,
        price: product.price
      };

      // Check if item already exists in the cart
      const existingItemIndex = cartItems.findIndex(item => item.name === product.title);
      if (existingItemIndex !== -1) {
        // Item already exists, update the quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity = quantity;
        setCartItems(updatedCartItems);
      } else {
        // Item does not exist, add it to the cart
        setCartItems(prevCartItems => [...prevCartItems, newItem]);
      }
    }
    onClose();
    console.log('Cart Items:', cartItems);
  };
  const closeButtonLabel = quantity === 0 ? 'Close' : 'Save Item';

  return (
    <div>
          <Card sx={{maxWidth: '30%', mb:4, ml: 2 }}>
            <CardMedia
              sx={{ height: 140, paddingTop: '56.25%'}}
              image={product.images[imageNum]}
              title={product.title}
              onClick = {handleImageClick}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {product.description}
              </Typography>
              <Typography>Rating: {product.rating}</Typography>
              <Typography>Price: ${product.price}</Typography>
            </CardContent>
            <CardActions  sx={{maxWidth: '100%'}}>
              <Button size="small" onClick={decrementQuantity}>-</Button>
              <Typography variant="body1">{quantity}</Typography>
              <Button size="small" onClick={incrementQuantity}>+</Button>
              <div>
                <Button variant="contained" onClick={addItem}>
                  {closeButtonLabel}
                </Button>
              </div>
              <div>
                <Typography variant="body1">Total: ${product.price*quantity}</Typography>
              </div>
            </CardActions>
          </Card> 
          <ScrollToTop smooth />
        </div>
  );
};

export default ProductView;
