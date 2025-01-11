import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const ResponsiveNavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define nav items separately with keywords
  const navItems = [
    { label: "Home", path: "/", keywords: "home, landing, main" },
    { label: "About Us", path: "/about-us-nagercoil", keywords: "about, company, us" },
    { label: "Services", path: "/services", keywords: "services, offerings, solutions" },
    { label: "Contact", path: "/contact", keywords: "contact, reach us, support" },
  ];

  // Handle scroll event to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled
            ? "linear-gradient(149deg, rgba(66,1,139,1) 0%, rgba(27,152,224,1) 90%)" // Solid background after scroll
            : "rgba(66,1,139,0)", // Transparent by default
          boxShadow: isScrolled ? "0px 2px 10px rgba(0,0,0,0.8)" : "none",
          transition: "background 0.2s ease-in-out",
          top: 0,
          left: 0,
          right: 0,
          py: isScrolled ? "10px" : "10px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            mt: {
              xs: isScrolled ? "10px" : "0px", // Apply margin-top adjustment for mobile only
              md: "0px", // No margin-top for medium screens and above
            },
          }}
        >
          {/* Logo and Title */}
          <Box display="flex" alignItems="center">
            <img
              src="logo.png" // Replace with your logo path
              alt="Ruba Agencies Logo"
              style={{ height: "90px", marginRight: "5px" }}
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 900,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                 
            fontStyle:"italic",
            
            fontFamily: "'Segoe Script', cursive",
                }}
              >
                Ruba Agencies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 0.3,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "white",
                    flexGrow: 1,
                    mx: 1,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                    // fontStyle: "italic",
                    whiteSpace: "nowrap",
                    // fontFamily: "'Segoe Script', cursive",
                  }}
                >
                  Since 2021
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "white",
                    flexGrow: 1,
                    mx: 1,
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Manually setting each nav link */}
            <Button
              component={Link} // Use Link for routing
              to={navItems[0].path}
              variant="text"
              sx={{
                color: "white",
                borderRadius: "20px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#FFD6B1",
                  color: "black",
                },
              }}
            >
              {navItems[0].label}
            </Button>
            <Button
              component={Link} // Use Link for routing
              to={navItems[1].path}
              variant="text"
              sx={{
                color: "white",
                borderRadius: "20px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#FFD6B1",
                  color: "black",
                },
              }}
            >
              {navItems[1].label}
            </Button>
            <Button
              component={Link} // Use Link for routing
              to={navItems[2].path}
              variant="text"
              sx={{
                color: "white",
                borderRadius: "20px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#FFD6B1",
                  color: "black",
                },
              }}
            >
              {navItems[2].label}
            </Button>
            <Button
              component={Link} // Use Link for routing
              to={navItems[3].path}
              variant="text"
              sx={{
                color: "white",
                borderRadius: "20px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#FFD6B1",
                  color: "black",
                },
              }}
            >
              {navItems[3].label}
            </Button>
          </Box>

          {/* Call to Action Button */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              
              startIcon={<PhoneIcon />}
              sx={{
                backgroundColor: "#1975d9",
                color: "#FFF",
                borderRadius: "20px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#a905dd",
                },
              }}
            >
              Consult With Us
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{
              display: { xs: "block", md: "none" },
              zIndex: 1201,
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
          </IconButton>

          {/* Drawer for Mobile */}
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#FFF8F3",
                width: "250px",
                padding: 2,
              },
            }}
          >
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon sx={{ color: "#1975d9" }} />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label}  disablePadding>
                  <ListItemButton LinkComponent={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: { fontWeight: "bold", color: "#1975d9" },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    justifyContent: "center",
                    mt: 2,
                    backgroundColor: "#FF8A3D",
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor: "#E57300",
                    },
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="button" color="#FFF">
                    Consult With Us
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ResponsiveNavBar;
