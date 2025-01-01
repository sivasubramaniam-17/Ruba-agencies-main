import React from "react";
import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import { styled } from "@mui/system";

const steps = [
  {
    id: 1,
    label: "Request for installation",
    description: "Submit your installation request to get started.",
    icon: "/icons/step1-icon.png", // Replace with the actual icon path
  },
  {
    id: 2,
    label: "Our team will contact you",
    description: "We’ll reach out to confirm the details.",
    icon: "/icons/step2-icon.png", // Replace with the actual icon path
  },
  {
    id: 3,
    label: "Schedule the service",
    description: "Choose a time that works best for you.",
    icon: "/icons/step3-icon.png", // Replace with the actual icon path
  },
  {
    id: 4,
    label: "Installation completed",
    description: "Our experts will complete the installation.",
    icon: "/icons/step4-icon.png", // Replace with the actual icon path
  },
];

// Styled dotted vertical line
const VerticalLine = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "24px",
  top: "40px",
  height:"345px",
  bottom: "0",
  width: "2px",
  background: "rgba(255,255,255,0.5)",
}));

// Styled step container
const StepContainer = styled(Box)({
  position: "relative",
  paddingLeft: "80px",
  marginBottom: "50px",
});

const StepperComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#6C63FF",
        pt: 8,
        pb:1,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 7,
            textAlign: "center",
            fontStyle:"italic",
            fontFamily: "'Segoe Script', cursive",
           
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Smooth and Fast Home Appliance Installation Process
        </Typography>

        <Grid container sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Grid item xs={12}>
            <Box sx={{ position: "relative" }}>
              {/* Vertical Line */}
              <VerticalLine />
              {steps.map((step, index) => (
                <StepContainer key={step.id}>
                  {/* Step Icon */}
                  <Avatar
                    src={step.icon}
                    sx={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                      left: "0",
                      top: "0",
                      border: "2px solid #00A19D",
                      backgroundColor: "#006D77",
                    }}
                  />
                  {/* Step Content */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        mb: 1,
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "1rem",
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </StepContainer>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StepperComponent;
