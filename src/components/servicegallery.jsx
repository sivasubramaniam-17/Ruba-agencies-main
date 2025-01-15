// File: HomeApplianceServices.js

import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const homeApplianceServices = [
  { id: 1, img: 'tv.jpg', alt: 'Appliance Cleaning Project 1' },
  { id: 2, img: 'wm.jpg', alt: 'Appliance Cleaning Project 2' },
  { id: 3, img: 'tv.jpg', alt: 'Appliance Cleaning Project 3' },
  { id: 4, img: 'wm.jpg', alt: 'Appliance Cleaning Project 4' },
  { id: 5, img: 'tv.jpg', alt: 'Appliance Cleaning Project 5' },
];

export default function HomeApplianceServices() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4, md: 6 },
        backgroundColor: 'black',
        textAlign: 'center',
      }}
    >
      {/* Section Header */}
     
      <Typography
       
        sx={{
          fontWeight: 'bold',
         mb: 2,
          lineHeight: 1.2,
          color: '#1b247f',
          textTransform: 'uppercase',
          fontFamily: "'Segoe Script', cursive",
          fontSize: { xs: "1.3rem", sm: "2rem", md: "2rem" },

        }}
      >
       Our Recent Home Appliance Installations
      </Typography>
      <Typography
          variant="body2"
          sx={{
            
            mb: 6,
            color: 'grey',
            textAlign: 'center',
          }}
        >
          Professional Home Appliance Installation Services
        </Typography>


      {/* Responsive Grid */}
      <Grid container spacing={3} justifyContent="center">
        {homeApplianceServices.map((service) => (
          <Grid
            key={service.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.img}
                alt={service.alt}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      
    </Box>
  );
}
