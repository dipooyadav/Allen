import React, { useState, useEffect } from 'react';
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive } from "./Data";
import axios from 'axios';
import SearchBar from './SearchBar';
import { Select, MenuItem, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductView from './ProductView';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function AddItem({cartItems, setCartItems}) {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleSearch = () => {
    if (searchKeyword === "") {
      setSearchProducts(products);
    }
    const filteredData = products.filter((obj) =>
      obj.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setSearchProducts(filteredData);
    console.log('Searching for:', searchKeyword);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const productsData = response.data.products;
      setProducts(productsData);
      setSearchProducts(productsData);

      const uniqueCategories = [...new Set(productsData.map((product) => product.category))];
      setCategories(['All', ...uniqueCategories]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All' ? searchProducts : searchProducts.filter(product => product.category === selectedCategory);

  const renderedProducts = filteredProducts.map((item) => (
    <Product
      key={item.id}
      name={item.title}
      url={item.thumbnail}
      altImg={item.images[0]}
      price={item.price}
      description={item.description}
      rating={item.rating}
      onClick={() => setSelectedProduct(item)}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  ));
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <div className="SearchContainer">
        <div className="categories">
          <Select value={selectedCategory} onChange={handleCategoryChange} sx={{ m: 1, minWidth: 150, maxWidth: 150 }}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="searchbar">
          <SearchBar onChange={(value) => setSearchKeyword(value)} />
        </div>
        <div>
          <IconButton variant="outlined" color="primary" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <Carousel showDots={false} responsive={responsive}>
          {renderedProducts}
        </Carousel>
      </div>
      <div className="product_view">
        {selectedProduct && (
          <ProductView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </div>
      <div>
        <Carousel showDots={false} responsive={responsive}>
          {products.map((item) => (
            <Product
              key={item.id}
              name={item.title}
              url={item.thumbnail}
              altImg={item.images[0]}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => setSelectedProduct(item)}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
