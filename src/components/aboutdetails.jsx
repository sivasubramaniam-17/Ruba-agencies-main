import  { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",
  minWidth: "auto",
  padding: "6px 16px",
  borderRadius: "20px",
  marginRight: "8px",
  color: "white",
  "&.Mui-selected": {
    color: "#1b247f",
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  marginBottom: "20px",
  color: "#6c63ff",
}));

const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  height: "400px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const TopImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "45%",
  height: "auto",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  objectFit: "cover",
  top: "10%",
  left: "10%",
  zIndex: 2,
  [theme.breakpoints.up("lg")]: {
    top: "20%",
  },
}));

const BottomImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "45%",
  height: "auto",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  objectFit: "cover",
  bottom: "10%",
  right: "10%",
  zIndex: 1,
  [theme.breakpoints.up("lg")]: {
    bottom: "0%",
  },
}));

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const HomeApplianceComponent = () => {
  const [selectedTab, setSelectedTab] = useState("installation");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const tabContent = {
    installation: {
      text: "Our professional team ensures seamless installation of all home appliances, from refrigerators to air conditioners. With precision and expertise, we make sure your appliances are installed correctly and efficiently, giving you peace of mind.",
      title: "Reliable Home Appliance Installation Services",
    },
    maintenance: {
      text: "Regular maintenance is key to prolonging the lifespan of your appliances. We provide comprehensive maintenance services to keep your appliances in top condition, preventing costly repairs and ensuring optimal performance.",
      title: "Keep Your Appliances Running Like New",
    },
    repair: {
      text: "Facing issues with your appliances? Our skilled technicians diagnose and repair all types of home appliances quickly and effectively. From minor fixes to major repairs, we’ve got you covered.",
      title: "Fast and Effective Home Appliance Repairs",
    },
  };

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "black" }}>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#1b247f",
                  fontWeight: "bold",
                  letterSpacing: 2,
                  display: "block",
                  mb: 2,
                  fontFamily: "'Segoe Script', cursive",
                  fontStyle:"italic",
                }}
              >
                {selectedTab.toUpperCase()}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                {tabContent[selectedTab].title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                {tabContent[selectedTab].text}
              </Typography>
            </Box>

            <StyledTabs value={selectedTab} onChange={handleTabChange}>
              <StyledTab value="installation" label="Installation" />
              <StyledTab value="maintenance" label="Maintenance" />
              <StyledTab value="repair" label="Repair" />
            </StyledTabs>

            {selectedTab === "installation" && (
              <Box sx={{ mt: 4 }}>
                {["Expert installation for all appliances", "Ensuring safety and efficiency", "Guaranteed satisfaction with every installation"].map(
                  (item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#1b247f" }}
                      >
                        0{index + 1}.
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            )}

            {selectedTab === "maintenance" && (
              <Box sx={{ mt: 4 }}>
                {["Preventive checks for smooth operation", "Extending appliance lifespan", "Cost-effective maintenance plans"].map(
                  (item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#1b247f" }}
                      >
                        0{index + 1}.
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            )}

            {selectedTab === "repair" && (
              <Box sx={{ mt: 4 }}>
                {["Quick diagnosis of appliance issues", "Skilled repair for all brands", "Affordable and reliable solutions"].map(
                  (item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#1b247f" }}
                      >
                        0{index + 1}.
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            )}
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageWrapper>
              <TopImage src="tv.jpg" alt="Appliance Installation" />
              <BottomImage src="ht.jpg" alt="Appliance Maintenance" />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Box>

 
    </Container>
  );
};

export default HomeApplianceComponent;
