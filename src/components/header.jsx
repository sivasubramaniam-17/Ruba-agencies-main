import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
// import HomeApplianceIcon from '@mui/icons-material/HomeRepairService';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AnimatedStatsComponent from './statuscard';


const HomeApplianceInstallation = () => {
  const animatedTexts = [
    'Expert Home Appliance Installation',
    'Affordable Appliance Setup Services',
    'Complete Home Appliance Installation',
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 10000);

    return () => clearInterval(textInterval);
  }, [animatedTexts.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        overflow: 'hidden',
        flexWrap: 'wrap',
        pt: { xs: 20, md: 15 },
        pb:{xs:2,md:2}
      }}
    >
      <Box
        sx={{
          color: '#fff',
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 3 },
          maxWidth: { xs: '100%', md: '800px' },
          width: { xs: '100%', md: '50%' },
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#6C63FF',
            fontStyle: 'italic',
            mb: 2,
            fontFamily: "'Segoe Script', cursive",
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
          }}
        >
          We Provide...
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
            lineHeight: 1.2,
            animation: 'fadeText 1.5s ease-in-out',
          }}
        >
          Home Appliance
          <br />
          Installation Service
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.5rem' },
            fontWeight: 'normal',
            animation: 'fadeText 1.5s ease-in-out',
          }}
        >
          {animatedTexts[currentText]}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' },
          }}
        >
          Same day service Guaranteed Or It's Free!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
          }}
        >
          * Call before 12 Noon, Monday - Saturday
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
          }}
        >
          Effortless Home Appliance Installation <strong>Quick,Reliable</strong>,{' '}
          <strong>Hassle-Free!</strong>
        </Typography>

        <Box
          display="flex"
          gap={2}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100%', sm: 'auto' },
            alignItems:"center"
          }}
        >
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            sx={{
              backgroundColor: '#FF8A3D',
              '&:hover': { backgroundColor: '#E57300' },
              padding: { xs: '10px 16px', md: '7px 15px' },
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              borderRadius: '30px',
              boxShadow: 2,
              width: { xs: '50%', sm: 'auto' },
            }}
          >
            Call Now
          </Button>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: '#25D366',
              '&:hover': { backgroundColor: '#1DA851' },
              padding: { xs: '10px 16px', md: '7px 15px' },
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              borderRadius: '30px',
              boxShadow: 2,
              width: { xs: '50%', sm: 'auto' },
            }}
          >
            WhatsApp Now
          </Button>
        </Box>
      </Box>

     <AnimatedStatsComponent/>

      <style>
        {`
          @keyframes fadeText {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </Box>
  );
};

export default HomeApplianceInstallation;