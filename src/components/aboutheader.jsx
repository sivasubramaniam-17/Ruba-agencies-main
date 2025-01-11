import React from 'react';
import { Box, Typography, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const HeaderComponent = () => {
  const keyframesFloat1 = `
    @keyframes float1 {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  const keyframesFloat2 = `
    @keyframes float2 {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        textAlign: 'center',
        py: { xs: 20, sm: 14, md: 22 },
        pt: { xs: 30, sm: 14, md: 22 },
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        background: '#000', // Full black background
        color: '#fff', // White text
       
        '@global': {
          '@keyframes float1': keyframesFloat1,
          '@keyframes float2': keyframesFloat2,
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '15%',
          left: '-10%',
          width: { xs: '100px', md: '250px' },
          height: { xs: '100px', md: '250px' },
          backgroundColor: '#a76fd9',
          filter: 'blur(100px)',
          borderRadius: '50%',
          animation: 'float1 6s infinite ease-in-out',
          zIndex: 1,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          right: '-15%',
          width: { xs: '200px', md: '300px' },
          height: { xs: '200px', md: '300px' },
          backgroundColor: '#167ee0',
          filter: 'blur(120px)',
          borderRadius: '50%',
          animation: 'float2 8s infinite ease-in-out',
          zIndex: 1,
        },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
          mb: 2,
          px: { xs: 2, sm: 4 }, 
          color: '#6C63FF',
        
          fontFamily: "'Segoe Script', cursive",
          fontStyle:"italic",// Add padding for smaller screens
        }}
      >
        About us
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
          maxWidth: '600px',
          mx: 'auto',
          mb: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 4 }, // Add padding for smaller screens
        }}
      >
        We provide the best-designed plugins for our clients by maximizing
        innovation.
      </Typography>

      {/* Ratings Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, sm: 1 },
        }}
      >
        <Rating value={5} readOnly sx={{ color: '#FFD700' }} />
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.2rem' },
          }}
        >
          5.0
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
          }}
        >
          {['av1.avif', 'av2.avif', 'av3.jpg', 'av4.avif'].map((src, index) => (
            <Avatar
              key={index}
              alt={`User ${index}`}
              src={src}
              sx={{
                width: { xs: 30, sm: 40 },
                height: { xs: 30, sm: 40 },
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: { xs: 30, sm: 40 },
            height: { xs: 30, sm: 40 },
            backgroundColor: '#007BFF',
            color: '#fff',
            // fontWeight: 'bold',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '0.8rem', sm: '1rem' },
          }}
        >
          2K+
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
