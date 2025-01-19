// File: ProfessionalSocialMediaUI.js

import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { keyframes } from "@mui/system";

// Blinking animation
const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
`;

const ProfessionalSocialMediaUI = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        bgcolor: "black",
        // minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}  className="component">
          <Typography
          
            variant="h6"
            sx={{
              color: "#1b247f",
              fontWeight: "bold",
              textTransform: "uppercase",
              mb: 1,
              fontStyle:"italic",
            fontFamily: "'Segoe Script', cursive",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2,color:"white" }}>
            Professional Home Appliance Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#6C757D", maxWidth: "500px", mb: 4 }}
          >
            Reliable professionals for setting up home appliances like TVs,
            fridges, washing machines, air conditioning units, and home
            theaters. Trust our experts for timely, high-quality services.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "50px",
              transition: "all 0.3s ease-in-out",
              backgroundColor: (theme) => theme.palette.primary.main,
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: (theme) => theme.palette.primary.dark,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }
            }}
          >
            Explore Services
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}  className="component">
          {/* Background Image with Overlay */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", sm: "400px" },
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              backgroundImage: "url('ht.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
              }}
            ></Box>
          </Box>

          {/* Social Media Icons at Separate Positions */}
          <Box>
            {/* Facebook (Top Left) */}
            <Link
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                position: "absolute",
                top: { xs: "50px", sm: "100px" },
                left: { xs: "50px", sm: "100px" },
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "50px" },
                borderRadius: "50%",
                bgcolor: "#4267B2",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: `${blinkAnimation} 1.5s infinite ease-in-out`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <FacebookIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
            </Link>

            {/* LinkedIn (Top Right) */}
            <Link
              href="https://linkedin.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                position: "absolute",
                top: { xs: "70px", sm: "80px" },
                right: { xs: "40px", sm: "100px" },
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "50px" },
                borderRadius: "50%",
                bgcolor: "#0077B5",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: `${blinkAnimation} 1.5s infinite ease-in-out`,
                animationDelay: "0.2s",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
            </Link>

            {/* Instagram (Bottom Left) */}
            <Link
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                position: "absolute",
                bottom: { xs: "47px", sm: "50px" },
                left: { xs: "60px", sm: "200px" },
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "50px" },
                borderRadius: "50%",
                bgcolor: "#E4405F",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: `${blinkAnimation} 1.5s infinite ease-in-out`,
                animationDelay: "0.4s",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <InstagramIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
            </Link>

            {/* Twitter (Bottom Right) */}
            <Link
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                position: "absolute",
                bottom: { xs: "30px", sm: "20px" },
                right: { xs: "40px", sm: "20px" },
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "50px" },
                borderRadius: "50%",
                bgcolor: "#1DA1F2",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: `${blinkAnimation} 1.5s infinite ease-in-out`,
                animationDelay: "0.6s",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <TwitterIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalSocialMediaUI;
