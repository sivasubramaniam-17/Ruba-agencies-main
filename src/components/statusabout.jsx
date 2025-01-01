import React from 'react';
import { Box, Typography, Paper, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

const ApplianceStats = () => {
  const stats = [
    { number: '200+', label: 'Installations' },
{ number: '150+', label: 'Happy Clients' },
{ number: '10', label: 'Expert Team' },
{ number: '50+', label: 'Services' }
  ];

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      bgcolor: 'black',
      py: 6,
    }}>
    
    <Box
  sx={{
    position: 'absolute',
    left: -100, // Adjust as needed for alignment
    top: 0,
    width: '400px', // Half the height for a perfect half-circle
    height: '500px',
    background: 'linear-gradient(149deg, rgba(106,5,114,1) 0%, rgba(27,152,224,1) 90%)',
    borderRadius: '0 100% 100% 0', // Ensures a smooth half-circle
    zIndex: 0,
  }}
/>


      <Box sx={{
        maxWidth: 1400,
        mx: 'auto',
        px: { xs: 2, md: 4 },
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4
      }}>
        {/* Left content */}
        <Box sx={{ flex: 1, color: 'white' }}>
        <Typography
          variant="h6"
          sx={{ textTransform: 'uppercase', letterSpacing: '2px', mb: 2, fontStyle:"italic",
            fontFamily: "'Segoe Script', cursive",fontWeight:"bold",color:"black" }}
        >
          Why us?
        </Typography>
          <Typography variant="h4" sx={{ 
            mb: 3, 
            fontWeight: 'bold',
            fontSize: { xs: '20px', md: '28px' }
          }}>
          Our goal is to deliver reliable and professional home appliance installation services, ensuring quality and customer satisfaction.
          </Typography>
          <Typography sx={{ mb: 4, color: 'white' }}>
            We specialize in expert installation of TVs, Air Conditioners, Refrigerators, 
            Washing Machines, and Home Theatre Systems with guaranteed satisfaction and professional service.
          </Typography>
         

          {/* Stats row */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            background:"white",
            // gap: { xs: 2, md: 4 },
            borderRadius:"20px",
            maxWidth:{xs:"auto",md:"80%"},
            justifyContent: { xs: 'center', md: 'center' }
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper elevation={0} sx={{
                  textAlign: 'center',
                  minWidth: { xs: '45%', sm: 'auto' },
                  padding:4
                }}>
                  <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    mb: 1
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ flex: 1, maxWidth: '500px' }}
        >
          <Box sx={{
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            zIndex:2
          }}>
            <img
              src="wm.jpg"
              alt="Professional appliance installation service"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box
  sx={{
    display:{xs:"none",lg:"block"},
    position: 'absolute',
    right: -100, // Adjust as needed for alignment
    top: 100,
    width: '400px', // Half the height for a perfect half-circle
    height: '500px',
    background: 'linear-gradient(149deg, rgba(106,5,114,1) 0%, rgba(27,152,224,1) 90%)',
    borderRadius: '100% 0 0 100%', // Ensures a smooth half-circle
    zIndex: 0,
  }}
/>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ApplianceStats;