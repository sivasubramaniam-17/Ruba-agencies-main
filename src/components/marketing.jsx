import { Grid, Box, Typography, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from 'react';
import { keyframes } from '@mui/system';

// Define animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px) translateX(-50%); }
  to { opacity: 1; transform: translateY(0) translateX(-50%); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); box-shadow: 0 4px 12px rgba(108, 99, 255, 0.2); }
  50% { transform: scale(1.02); box-shadow: 0 8px 24px rgba(108, 99, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 4px 12px rgba(108, 99, 255, 0.2); }
`;

// Counter component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return `${count}%`;
};

export default function InstallationServicesMarketing() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: { xs: 2, sm: 4, md: 8 },
        // borderRadius: 4,
        margin: "0 auto",
       
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{ display:"flex",
        flexDirection:{xs:"column-reverse",md:"row"}}}>
        {/* Left Side (Image and Stats) */}
        <Grid item xs={12} md={5}>
          <Box sx={{ position: "relative", textAlign: "center" }}>
            {/* Profile Image */}
            <Box
              component="img"
              src="tv.jpg" // Replace with your installation service image URL
              alt="Installation Services"
              sx={{
                width: "100%",
                maxWidth: 700,
                borderRadius: 2,
               
              }}
            />
            {/* Stats Box */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#FFF",
                padding: 2,
                boxShadow: 3,
                borderRadius: "20px",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: `${fadeIn} 1s ease-out`,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateX(-50%) scale(1.02)",
                }
              }}
            >
              <CircularProgress
                variant="determinate"
                value={85}
                size={80}
                thickness={4}
                sx={{ 
                  color: "#1b247f",
                  animation: `${pulse} 2s infinite ease-in-out`,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                <AnimatedCounter value={90} />
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              marginTop: 4,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.1rem",
              color: "white",
            }}
          >
            200+ Satisfied Customers in 2023
          </Typography>
        </Grid>

        {/* Right Side (Text Content) */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1b247f",
              marginBottom: 2,
              fontSize:{xs:"1.5rem",md:"1.8rem"},
              fontStyle: 'italic',
              textTransform: "uppercase",
            
              fontFamily: "'Segoe Script', cursive",
            }}
          >
            Professional Home Appliance Installation Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              marginBottom: 4,
            }}
          >
            Our expert installation services ensure your home appliances, including TVs, washing machines, refrigerators, air conditioners, and home theatre systems, are set up quickly and correctly. Get reliable, efficient, and safe installation from certified professionals....
          </Typography>
          <Box component="ul" sx={{ paddingLeft: 2, color: "white" }}>
            <Typography component="li" sx={{ marginBottom: 1.5 }}>
              TV mounting and installation with cable management for a clean look
            </Typography>
            <Typography component="li" sx={{ marginBottom: 1.5 }}>
              Washing machine setup and testing to ensure optimal performance
            </Typography>
            <Typography component="li" sx={{ marginBottom: 1.5 }}>
              Refrigerator installation with energy-saving tips and maintenance advice
            </Typography>
            <Typography component="li" sx={{ marginBottom: 1.5 }}>
              Air conditioning unit installation with smart thermostat integration
            </Typography>
            <Typography component="li" sx={{ marginBottom: 1.5 }}>
              Home theatre system setup with surround sound calibration
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
              transition: 'all 0.3s ease-in-out',
              animation: `${pulseAnimation} 2s infinite`,
              padding: '8px 20px',
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(108, 99, 255, 0.2)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a237e 10%, #283593 50%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(108, 99, 255, 0.3)',
              },
              '&:active': {
                transform: 'translateY(1px)',
                boxShadow: '0 2px 8px rgba(108, 99, 255, 0.2)',
              }
            }}
          >
            Schedule an Installation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
