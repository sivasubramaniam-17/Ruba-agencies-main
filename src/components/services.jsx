import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import RefrigeratorIcon from '@mui/icons-material/Kitchen';
import WashingMachineIcon from '@mui/icons-material/LocalLaundryService';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FilterAltIcon from '@mui/icons-material/FilterAlt';  // Replace AirFilterIcon
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';  // For Water Purifier
import ThermostatIcon from '@mui/icons-material/Thermostat';  // Replace HeatingIcon


// Styled Card component with wave effect
const StyledCard = styled(Card)(({ bgcolor }) => ({
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '20px',
  minHeight: '380px',
  width: '100%',
  maxWidth: '320px',
  overflow: 'hidden',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  
  // Wave effect added here
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '35%',
    background: bgcolor || '#4facfe', // Use dynamic color or default color
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    transform: 'scale(1.2)',
    animation: 'wave-animation 3s infinite linear', // Add wave animation here
    transition: 'all 0.3s ease-in-out',
  },

  // Wave animation keyframes (smooth wave with gentle bends)
  '@keyframes wave-animation': {
    '0%': {
      clipPath: 'polygon(0% 60%, 20% 70%, 40% 60%, 60% 70%, 80% 60%, 100% 70%, 100% 100%, 0% 100%)',
    },
    '50%': {
      clipPath: 'polygon(0% 55%, 20% 65%, 40% 55%, 60% 65%, 80% 55%, 100% 65%, 100% 100%, 0% 100%)',
    },
    '100%': {
      clipPath: 'polygon(0% 60%, 20% 70%, 40% 60%, 60% 70%, 80% 60%, 100% 70%, 100% 100%, 0% 100%)',
    },
  },
}));

const IconWrapper = styled(Box)({
  width: '48px',
  height: '48px',
  margin: '24px auto 16px',
  position: 'relative',
  zIndex: 2,
  transition: 'transform 0.3s ease-in-out',
  '& svg': {
    width: '100%',
    height: '100%',
    color: '#1b247f',
  }
});

const ServicesCard = () => {
  const services = [
    {
      icon: <RefrigeratorIcon />,
      title: 'Refrigerator Installation',
      keywords: ['Install', 'Maintenance', 'Cooling'],
      color: '#1b247f',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Professional refrigerator installation and maintenance services.',
      fullDescription: 'We provide top-notch refrigerator installation and maintenance services to ensure your appliance operates with optimal cooling efficiency and energy savings. Our experts handle everything from setting up your fridge to checking its performance.'
    },
    {
      icon: <WashingMachineIcon />,
      title: 'Washing Machine Installation',
      keywords: ['Install', 'Setup', 'Laundry'],
      color: '#F97316',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Expert washing machine installation and setup.',
      fullDescription: 'Our team ensures your washing machine is installed correctly and efficiently, providing a smooth laundry experience. From connecting water lines to ensuring optimal machine performance, we handle it all.'
    },
    {
      icon: <MicrowaveIcon />,
      title: 'Microwave Installation',
      keywords: ['Install', 'Appliances', 'Cooking'],
      color: '#14B8A6',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Reliable microwave installation services.',
      fullDescription: 'We offer professional microwave installation services to ensure your appliance is safely and properly installed. Whether you’re upgrading your kitchen or installing a new unit, our experts handle it all.'
    },
    {
      icon: <TvIcon />,
      title: 'TV Installation',
      keywords: ['Mounting', 'Setup', 'Display'],
      color: '#3B82F6',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Expert TV installation and setup for home or office.',
      fullDescription: 'We provide professional TV installation and mounting services, ensuring a perfect display setup for your home theater or office. From wall mounting to cable management, we guarantee a sleek, secure installation.'
    },
    {
      icon: <AcUnitIcon />,
      title: 'AC Installation and Maintenance',
      keywords: ['Cooling', 'AC', 'Maintenance'],
      color: '#2563EB',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Reliable air conditioner installation and servicing.',
      fullDescription: 'Our expert team offers professional air conditioner installation and regular maintenance to ensure optimal cooling performance. We provide everything from setup to annual servicing for your comfort.'
    },
  
    {
      icon: <SettingsInputComponentIcon />,
      title: 'Stabilizer Installation and Maintenance',
      keywords: ['Stabilizer', 'Protection', 'Surge'],
      color: '#F59E0B',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Protect your electronics with professional stabilizer services.',
      fullDescription: 'We provide installation and servicing of voltage stabilizers to protect your electronics from power surges and voltage fluctuations. Keep your devices safe with our reliable stabilizer installation services.'
    },
    {
      icon: <LightbulbIcon />,
      title: 'LED Bulb Installation',
      keywords: ['LED', 'Lighting', 'Energy'],
      color: '#10B981',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Energy-efficient LED bulb installation services.',
      fullDescription: 'We offer energy-efficient LED bulb installation to enhance your home or office lighting while saving on electricity costs. Our experts handle all aspects of LED lighting setup and maintenance.'
    },
    {
      icon: <FilterDramaIcon />,
      title: 'Water Purifier Installation',
      keywords: ['Purifier', 'Filtration', 'Water'],
      color: '#14B8A6',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Reliable water purifier installation services.',
      fullDescription: 'We provide installation of water purifiers, ensuring safe, clean drinking water in your home or office. Our experts will install and maintain your water filtration system to provide fresh, purified water.'
    },
    {
      icon: <ThermostatIcon />,
      title: 'Heater Installation and Maintenance',
      keywords: ['Heater', 'Heating', 'Comfort'],
      color: '#EF4444',
      bgColor: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
      shortDescription: 'Efficient heater installation for winter comfort.',
      fullDescription: 'Our team provides professional heater installation services to ensure your space stays warm during winter. From electric heaters to gas-based units, we ensure everything is set up safely and efficiently.'
    },
  ];
  
  
  

  return (
    <Box sx={{ p: 4, backgroundColor: 'black' }}>
      <Typography  className="component" sx={{textAlign:"center",fontSize:{xs:"1.3rem",md:"1.8rem"}, color: "#1b247f",
            fontStyle:"italic",
            textTransform:"uppercase",
            fontWeight:"bold",
            fontFamily: "'Segoe Script', cursive",mb:1}}>
        Our Services
      </Typography>
      <Typography sx={{textAlign:"center",color:"rgba(255,255,255,0.8)"}}  className="component">
      Professional installation and maintenance for all household appliances and systems.
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={"20px"}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <StyledCard bgcolor={service.bgColor}  className="component">
              {/* Top Content */}
              <Box
               className="component"
               sx={{
                position: 'relative',
                zIndex: 2,
                padding: '0 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <IconWrapper className="icon-wrapper">
                  {service.icon}
                </IconWrapper>

                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    mb: 1
                  }}
                >
                  {service.title}
                </Typography>

                {/* Keywords */}
                <Box
                  className="content"
                  sx={{
                    display: 'flex',
                    gap: 2,
                    opacity: 1,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {service.keywords.map((keyword, idx) => (
                    <Typography
                      key={idx}
                      variant="caption"
                      sx={{
                        color: '#1b247f',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem'
                      }}
                    >
                      {keyword}
                    </Typography>
                  ))}
                </Box>

                {/* Full description - Always visible */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'black',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    mt: 2,
                    maxWidth: '85%',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {service.fullDescription}
                </Typography>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesCard;
