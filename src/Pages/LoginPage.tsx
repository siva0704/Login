import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import googleLogo from '../Static/img/google_logo.png'

const theme = createTheme();

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulated login logic
    if (email === 'user@example.com' && password === 'password') {
      setError('');
      console.log('Login successful!');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Continue with Google');
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <Typography variant="body2" color="error" gutterBottom>
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="body1" gutterBottom>
              Or continue with:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '5px' }}
              onClick={handleGoogleLogin}
              startIcon={<img src={googleLogo} alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />}
            >
              Google
            </Button>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
