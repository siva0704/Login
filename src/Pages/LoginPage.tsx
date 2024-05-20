import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Static/img/gustingo_logo.png'; // Import your brand logo image
import backgroundImage from '../Static/img/background.jpg'; // Import your background image

const theme = createTheme();

const LoginPage: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);

  const handleGetOtp = () => {
    // Send OTP logic
    console.log('OTP Sent to ' + mobileNumber);
    setOtpSent(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verify OTP logic
    if (otp === '123456') {
      setError('');
      console.log('Login successful!');
    } else {
      setError('Invalid OTP.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
          <Container>
            <img src={logo} alt="Brand Logo" style={{ width: '200px', marginBottom: '20px' }} />
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              {!otpSent ? (
                <div className="mb-3">
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              ) : (
                <div className="mb-3">
                  <TextField
                    fullWidth
                    label="OTP"
                    variant="outlined"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              )}
              {error && (
                <Typography variant="body2" color="error" gutterBottom>
                  {error}
                </Typography>
              )}
              {!otpSent ? (
                <Button type="button" variant="contained" color="primary" onClick={handleGetOtp}>
                  Get OTP
                </Button>
              ) : (
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              )}
            </form>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
