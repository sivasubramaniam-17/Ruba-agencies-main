import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, Avatar, AvatarGroup } from '@mui/material';
import { Settings } from 'lucide-react';

const backgroundImages = [
  'tv.jpg', // Washer installation
  'wm.jpg', // AC installation
  'ht.jpg', // Refrigerator installation
];

const StatusCard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', sm: '430px' },
        height: {sm: 'auto' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', sm: 'flex-start' },
        padding: { xs: 2, sm: 4 },
        position: 'relative',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          background: 'transparent',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          width: '100%',
          aspectRatio: { xs: '3 / 4', sm: '4 / 5' },
          margin: '0 auto',
          height: { xs: 'auto', sm: 'auto' },
        }}
      >
        {/* Animated Background with Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(149deg, rgba(106,5,114,0.7) 0%, rgba(27,152,224,0.7) 90%)',
              backdropFilter: 'blur(2px)',
              zIndex: 1,
            },
            // backgroundImage: `url(${backgroundImages[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.5s ease-in-out',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            padding: { xs: 2, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Success Rate */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '40%', sm: '40%' },
              marginBottom: 3,
              backgroundColor: 'white',
              padding: 1,
              borderRadius: '30px',
            }}
          >
            <Typography
              component="span"
              sx={{
                color: 'black',
                fontSize: { xs: '0.65rem', sm: '0.875rem' },
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              ⚡ 99% Success Rate
            </Typography>
          </Box>

          {/* Installation Stats Box */}
          <Box
            sx={{
              background: 'white',
              borderRadius: '20px',
              padding: { xs: 2, sm: 3 },
              marginBottom: 2.5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.5rem' },
                fontWeight: 700,
                color: 'black',
                marginBottom: 1,
              }}
            >
              349+
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontSize: '0.875rem',
                marginBottom: 2,
                lineHeight: 1.5,
              }}
            >
              Professional appliance installations completed this month
            </Typography>
            <AvatarGroup
              max={4}
              sx={{
                '& .MuiAvatar-root': {
                  width: 28,
                  height: 28,
                  fontSize: '0.875rem',
                  border: '2px solid white',
                },
              }}
            >
              <Avatar src="av1.avif" />
              <Avatar src="av2.avif" />
              <Avatar src="av3.jpg" />
              <Avatar src="av4.avif" />
            </AvatarGroup>
          </Box>

          {/* Service Status Box */}
          <Box
            sx={{
              background: 'white',
              borderRadius: '20px',
              padding: { xs: 2, sm: 3 },
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  color: 'black',
                }}
              >
                Available Services
              </Typography>
              <Settings size={20} style={{ color: 'black' }} />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {['TV', 'Home theatre', 'Air conditioner', 'Washing Machine'].map((service) => (
                <Box
                  key={service}
                  sx={{
                    background: 'black',
                    borderRadius: '12px',
                    padding: 2,
                    textAlign: 'center',
                    color: '#2563eb',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    fontWeight: 500,
                  }}
                >
                  {service}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StatusCard;
