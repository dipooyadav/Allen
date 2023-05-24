import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { makeStyles } from '@material-ui/core';
import { Button, Container, } from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
    fontFamily: 'sans-serif',
    fontSize: '24px',
  },
  button: {
    backgroundColor: '#0077FF',
    color: 'white',
    borderRadius: '4px',
    padding: '12px 24px',
    marginTop: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
});

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container className={classes.container}>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <Button onClick={handleLogout} className={classes.button}>
          Log Out
        </Button>
      )}
    </Container>
  );
};

export default Profile;
