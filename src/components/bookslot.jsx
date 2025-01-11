import { useState } from 'react';
import emailjs from 'emailjs-com';
import { CheckCircle, XCircle, Mail } from 'lucide-react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('idle');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !date || !time) {
      setStatus('error');
      showNotification('Please fill in all fields', 'error');
      return;
    }

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(date)) {
      setStatus('error');
      showNotification('Invalid date format. Use DD/MM/YYYY.', 'error');
      return;
    }

    try {
      const emailParams = { name, email, phone, date, time };

      await emailjs.send('service_bxama57', 'template_zoc0x7a', emailParams, 'gCOXhAKT_GlbkeU5o');
      setStatus('success');
      showNotification('Your booking was successful!', 'success');
      resetForm();
    } catch (error) {
      setStatus('error');
      showNotification('Something went wrong. Please try again.', 'error');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 5000);
  };

  const ProgressIndicator = () => {
    const getStatusContent = () => {
      switch (status) {
        case 'success':
          return {
            icon: <CheckCircle size={64} color="green" />,
            title: 'Inquiry Received!',
            message: 'Our team will contact you shortly.',
          };
        case 'error':
          return {
            icon: <XCircle size={64} color="red" />,
            title: 'Something Went Wrong',
            message: 'Please check the form fields correctly.',
          };
        default:
          return {
            icon: <Mail size={64} color="white" />,
            title: 'Send Your Inquiry',
            message: 'Fill out the form to proceed.',
          };
      }
    };

    const content = getStatusContent();

    return (
      <Box
        sx={{
          background: 'linear-gradient(to bottom right, #7e57c2, #42a5f5)',
          p:{xs:6,md:'100px'},
          borderRadius: 4,
          textAlign: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width:'100%',
          boxShadow: 6,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        {content.icon}
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
          {content.title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
          {content.message}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ bgcolor: 'black', py: 6, px: { xs: 2, md: 6 },}}>
      <Grid container spacing={4} alignItems="center" flexDirection={{xs:"column-reverse",md:"row"}}>
        <Grid item xs={12} md={4} display="flex" justifyContent="center" >
          <ProgressIndicator />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
              boxShadow: 6,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                // fontWeight: 'bold',
                color: '#333',
              }}
            >
              Book Your Slot
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f5f5f5' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f5f5f5' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f5f5f5' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Date (DD/MM/YYYY)"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f5f5f5' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Time (e.g., 2:30 PM)"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f5f5f5' },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  borderRadius: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #7e57c2, #42a5f5)',
                  color: 'white',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'linear-gradient(to right, #6a48a3, #3793e5)',
                  },
                }}
              >
                Submit Inquiry
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={notification.show}
        autoHideDuration={5000}
        onClose={() => setNotification({ ...notification, show: false })}
      >
        <Alert severity={notification.type} onClose={() => setNotification({ ...notification, show: false })}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookingForm;
