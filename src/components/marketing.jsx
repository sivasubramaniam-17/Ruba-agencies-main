
import { Grid, Box, Typography, Button, CircularProgress } from "@mui/material";

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
              }}
            >
              <CircularProgress
                variant="determinate"
                value={85}
                size={80}
                thickness={4}
                sx={{ color: "#6C63FF" }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                85%
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
              color: "#6C63FF",
              marginBottom: 2,
              fontSize:{xs:"1.7rem",md:"2rem"},
              fontStyle: 'italic',
            
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
              backgroundColor: "#6C63FF",
              "&:hover": { backgroundColor: "#FB8C00" },
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Schedule an Installation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
