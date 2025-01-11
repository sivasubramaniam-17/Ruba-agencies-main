
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Phone, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        background:"linear-gradient(45deg, #1a237e 30%, #283593 90%)" ,// Solid background after scroll

        py: 6,
        borderTop: '1px solid',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          {/* Logo and Company Info */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src="logo.png"
                alt="ruba agencies"
                sx={{
                  height: 80,
                  mr: 2,
                }}
              />
              <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h6"
                
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  letterSpacing: "0.5px",
              
                }}
              >
                Ruba Agencies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 0.3,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "white",
                    flexGrow: 1,
                    mx: 1,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                    fontStyle: "italic",
                    whiteSpace: "nowrap",
                    
                    fontFamily: "'Segoe Script', cursive",
                  }}
                >
                  Since 2021
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "white",
                    flexGrow: 1,
                    mx: 1,
                  }}
                />
              </Box>
            </Box>
            </Box>
            <Typography variant="body2" color="rgba(255,255,255,0.8)" sx={{ mb: 2,marginLeft:12 }}>
              123 Business Street
              <br />
              City, State 12345
              <br />
              Country
            </Typography>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h6" color='white' sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.8)" sx={{ mb: 1 }}>
              Email: rubaagencies@gmail.com
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.8)" sx={{ mb: 2 }}>
              Phone: +91 6379440442
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', width: '100%' }}>
              <Button
                variant="contained"
                startIcon={<Phone />}
                sx={{
                  bgcolor: 'primary.main',
                  width: 'auto', // Adjusted for more balanced width
                  mb: 1,
                  borderRadius:"20px",
                  maxWidth: '200px', // Set a max width for the buttons
                  alignSelf: 'flex-start', // Align left
                }}
                href="tel:++916379440442"
              >
                Call Now
              </Button>
              <Button
                variant="contained"
                startIcon={<WhatsApp />}
                sx={{
                  bgcolor: '#25D366',
                  width: 'auto', // Adjusted for more balanced width
                  mb: 1,
                  borderRadius:"20px",
                  maxWidth: '200px', // Set a max width for the buttons
                  alignSelf: 'flex-start', // Align left
                }}
                href="https://wa.me/+916379440442"
              >
                WhatsApp
              </Button>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h6" color='white' sx={{ mb: 2 }}>
              Home Appliances Installation
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.8)" sx={{ mb: 2 }}>
              Professional installation services for:
              <br />
              • Washing Machines
              <br />
              • Refrigerators
              <br />
              • Dishwashers
              <br />
              • Air Conditioners
              <br />
              • And more...
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color='white' sx={{ mb: 1 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#1877F2',backgroundColor:'white',borderRadius:"50%" }}>
                  <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#1DA1F2',backgroundColor:'white',borderRadius:"50%" }}>
                  <Twitter />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#0A66C2',backgroundColor:'white',borderRadius:"50%" }}>
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#E4405F',backgroundColor:'white',borderRadius:"50%" }}>
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" color="rgba(255,255,255,0.8)" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Ruba Agencies. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
