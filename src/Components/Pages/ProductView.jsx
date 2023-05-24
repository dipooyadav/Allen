import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductView = ({product, onClose, cartItems, setCartItems  }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
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

    console.log('Cart Items:', cartItems);
  };

  return (
    <div>
          <img className="" src={product.images[0]} alt={product.title} />
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography>Rating: {product.rating}</Typography>
          <Typography>Price: ${product.price}</Typography>
          <div>
            <Button variant="outlined" onClick={decrementQuantity}>
              -
            </Button>
            <Typography variant="body1">{quantity}</Typography>
            <Button variant="outlined" onClick={incrementQuantity}>
              +
            </Button>
          </div>
          <Button variant="contained" onClick={addItem}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
  );
};

export default ProductView;
