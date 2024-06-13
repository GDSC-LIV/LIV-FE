import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f6f8' }}>
      <Box sx={{ display: 'flex', width: '70%', maxWidth: '1200px', boxShadow: 3, borderRadius: 2, overflow: 'hidden', backgroundColor: '#fff' }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Sign In to Recharge Direct
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            If you don't have an account you can{' '}
            <Button variant="text" color="primary" onClick={handleRegisterClick}>
              Register here!
            </Button>
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: 4, backgroundColor: '#eef2f5' }}>
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <SignInForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const SignInForm: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Enter Email" variant="outlined" fullWidth />
      <TextField label="Password" type="password" variant="outlined" fullWidth />
      <Button variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </Box>
  );
};

export default Login;
