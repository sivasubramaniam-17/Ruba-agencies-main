import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const HomeAppliancesSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
        boxSizing: "border-box",
        backgroundColor: "black", // Adjust the background if needed
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          textAlign: "center",
        
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 600,
            color: "#6C63FF",
            fontStyle:"italic",
            fontFamily: "'Segoe Script', cursive",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            marginTop:"20px"
          }}
        >
          Our Trusted Partner in Home Appliances
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
            marginTop: "20px",
            marginBottom: "20px",
            lineHeight: "1.6",
            textAlign:"center",
            maxWidth:"1100px"
          }}
        >
      Explore a range of energy-efficient home appliances including smart TVs, washing machines, home theaters, fridges, and air conditioners. Enhance your living spaces with durable, eco-friendly solutions that offer top-notch performance and style. Upgrade to modern, smart appliances designed for energy savings, comfort, and sustainability
        </Typography>
      </Box>
      {/* Orange Gradient Box with Logos */}
      <Box
        sx={{
          background: "linear-gradient(149deg, rgba(66,1,139,1) 0%, rgba(27,152,224,1) 90%)",
          padding: "50px 40px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px",
          width:{xs:"auto",lg:"100%"},
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        
       {["/logo1.webp", "/logo31.jpg", "/logo3.jpg"].map((logo, index) => (
  <Box
    key={index}
    component="img"
    src={logo} // Directly use the logo from the array
    alt={`Logo ${index + 1}`}
    sx={{
      maxWidth: "100px",
      maxHeight: "60px",
      flexShrink: 0,
      backgroundColor:"white",
      borderRadius:"10px",
      opacity:"0.8"
    }}
  />
))}

      </Box>

     
    </Box>
  );
};

export default HomeAppliancesSection;
