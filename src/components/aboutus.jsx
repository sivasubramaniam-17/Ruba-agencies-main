import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalDiningIcon from '@mui/icons-material/LocalDining'; // For dishwashers

const About = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: '#fff', py: 8, px: 4 }}>
      {/* Top Section */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', mb: 6 }}>
        <Typography
          variant="h6"
          sx={{ textTransform: 'uppercase', letterSpacing: '2px', mb: 2, fontStyle: 'italic',
            fontFamily: "'Segoe Script', cursive", fontWeight: 'bold',mb:4 }}
        >
         Why Choose Us ?

        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          Our Partner in Home Appliance Installation
        </Typography>
        <Typography
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 3,
          }}
        >
         At Ruba Agencies, we bring precision and expertise to every home appliance installation. Whether it's setting up TVs, washing machines, refrigerators, or air conditioners, we guarantee seamless, reliable service tailored to your needs. Our goal is to optimize the functionality and comfort of your space through meticulous care and professional attention to detail.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#014463',
            color: 'white',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#e69900' },
          }}
        >
          Book a Slot
        </Button>
      </Box>

      {/* Service Cards Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          py: 6,
          px: 4,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        <Grid container spacing={4}>
          {/* Card 1 - TVs */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <TvIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                TV Installation
              </Typography>
              <Typography color='black'>
                Professional setup for all types of televisions, ensuring optimal performance and secure mounting.
              </Typography>
            </Box>
          </Grid>

          {/* Card 2 - Washing Machines */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <LocalLaundryServiceIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                Washing Machine Setup
              </Typography>
              <Typography color='black'>
                Expert washing machine installation services designed to optimize performance and energy efficiency.
              </Typography>
            </Box>
          </Grid>

          {/* Card 3 - Home Theater Systems */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <TvIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                Home Theater Installation
              </Typography>
              <Typography color='black'>
                Transform your space into a cinematic experience with customized home theater installation.
              </Typography>
            </Box>
          </Grid>

          {/* Card 4 - Refrigerators */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <BuildIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                Refrigerator Installation
              </Typography>
              <Typography color='black'>
                Ensure optimal performance with professional refrigerator installation services tailored to your needs.
              </Typography>
            </Box>
          </Grid>

          {/* Card 5 - Air Conditioners */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <ThermostatIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                Air Conditioner Installation
              </Typography>
              <Typography color='black'>
                Stay comfortable with precision air conditioner installation, optimizing cooling efficiency.
              </Typography>
            </Box>
          </Grid>

          {/* Card 6 - Dishwashers */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <LocalDiningIcon sx={{ fontSize: '3rem', color: '#014463', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" mb={1} color='black'>
                Dishwasher Installation
              </Typography>
              <Typography color='black'>
                Simplify your kitchen chores with expert dishwasher installation services for hassle-free use.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
