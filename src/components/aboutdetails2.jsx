import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4rem 3rem",
  gap: "2rem",
 
  backgroundColor: "black",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: "2rem 1rem",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "white",
  lineHeight: "1.2",
  position: "relative",
  "&::before": {
    content: "'OUR MISSION'",
    position: "absolute",
    top: "-2rem",
    left: "0",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "2px",
    color: "#6c63ff",
    fontFamily: "'Segoe Script', cursive",
    fontStyle:"italic",
    [theme.breakpoints.down("md")]: {
      top: "-1.5rem",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontSize: "1rem",
  color: "white",
  lineHeight: "1.6",
}));

const ListWrapper = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  "&::before": {
    content: "'✓'",


    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#6c63ff",
  },
  "& div": {
    flex: 1,
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: "500px",
  position: "relative",
  "& img": {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  }
 
}));

const MissionSection = () => {
  return (
    <Wrapper>
      {/* Left Content */}
      <ContentWrapper>
        <Title>
          We help people install and maintain home appliances seamlessly.
        </Title>
        <Description>
          Our mission is to simplify home appliance installations and create a
          hassle-free experience for our customers, ensuring efficiency and
          reliability with every service.
        </Description>

        {/* List Items */}
        <ListWrapper>
          <ListItem>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
                Professional Installation Services
              </Typography>
              <Typography sx={{ color: "white" }}>
                Our team ensures seamless and safe installation of all types of
                home appliances.
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
                Affordable Maintenance Plans
              </Typography>
              <Typography sx={{ color: "white" }}>
                Extend the lifespan of your appliances with our affordable and
                effective maintenance packages.
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
                Quick and Reliable Repairs
              </Typography>
              <Typography sx={{ color: "white" }}>
                Get your appliances back in action with our fast and reliable
                repair services.
              </Typography>
            </Box>
          </ListItem>
        </ListWrapper>
      </ContentWrapper>

      {/* Right Image */}
      <ImageWrapper>
        <img
          src="tv.jpg"
          alt="Professional technician providing appliance installation"
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default MissionSection;
