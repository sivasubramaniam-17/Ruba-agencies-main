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
import { motion, AnimatePresence } from 'framer-motion';

// Add these animation variants before the component
const menuVariants = {
  closed: {
    x: "-100%",
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const menuItemVariants = {
  closed: { x: -20, opacity: 0 },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
};

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
            ? "linear-gradient(45deg, #1a237e 30%, #283593 90%)" // Solid background after scroll
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
              style={{ height: "90px", marginRight:"20px" }}
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 900,
                  textAlign: "center",
                  // letterSpacing: "0.5px"
                  fontSize:{xs:"16px",sm:"20px",md:"18px"},
                 
            fontStyle:"italic",
            textTransform: "uppercase",
            
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
                backgroundColor: "#1481e1",
                color: "#FFF",
                borderRadius: "20px",
                padding: "6px 16px",
                position: "relative",
                transition: "all 0.5s ease-in-out",
                animation: "pulse 2s infinite",
                boxShadow: "0 4px 15px rgba(8, 52, 99, 0.67)",
                
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: "0 0 0 0 rgba(59, 85, 114, 0.73)",
                  },
                  "70%": {
                    boxShadow: "0 0 0 10px rgba(14, 48, 84, 0.4)",
                  },
                  "100%": {
                    boxShadow: "0 0 0 0 rgba(13, 49, 87, 0.32)",
                  },
                },
            
                "&:hover": {
                  backgroundColor: "#1b247f",
                  transform: "translateY(-2px) scale(1.02)",
                  boxShadow: "0 6px 20px #1b247f",
                },
            
                "&:active": {
                  transform: "translateY(1px)",
                },
            
                "& .MuiButton-startIcon": {
                  transition: "transform 0.3s ease",
                },
            
                "&:hover .MuiButton-startIcon": {
                  transform: "rotate(15deg)",
                },
              }}
            >
              Connect With Us
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
            <MenuIcon sx={{ fontSize: "1.5rem", color: "white" }} />
          </IconButton>

          {/* Drawer for Mobile */}
          <AnimatePresence>
            {isDrawerOpen && (
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: '#1b247f',
                    width: '280px',
                    padding: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  },
                }}
                PaperProps={{
                  component: motion.div,
                  initial: "closed",
                  animate: "open",
                  exit: "exit",
                  variants: menuVariants
                }}
              >
                <Box display="flex" justifyContent="flex-end" mb={3}>
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      '&:hover': {
                        transform: 'rotate(90deg)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <CloseIcon sx={{ color: "#1975d9", fontSize: "2rem" }} />
                  </IconButton>
                </Box>
                <List sx={{ mt: 2 }}>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      variants={menuItemVariants}
                      custom={i}
                    >
                      <ListItem disablePadding sx={{ mb: 2 }}>
                        <ListItemButton
                          LinkComponent={Link}
                          to={item.path}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 117, 217, 0.08)',
                              transform: 'translateX(8px)',
                            }
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              sx: { 
                                fontWeight: 300,
                                color: "white",
                                fontSize: '1.1rem',
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={menuItemVariants}
                    custom={navItems.length}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          justifyContent: 'center',
                          mt: 3,
                          backgroundColor: '#1481e1',
                          borderRadius: '16px',
                          padding: '12px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#1481e1',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(255, 138, 61, 0.3)',
                          },
                        }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <PhoneIcon sx={{ mr: 1 ,color:"white"}} />
                        <Typography variant="button" color="#FFF" fontWeight="600">
                          Connect With Us
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                </List>
              </Drawer>
            )}
          </AnimatePresence>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ResponsiveNavBar;
