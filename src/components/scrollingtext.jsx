import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const ScrollingText = () => {
  const messages = [
    "Professional Home Appliance Installation Services",
    "Expert AC Installation & Maintenance",
    "Washing Machine and Dishwasher Setup",
    "Trusted by 1000+ Customers",
    "Same Day Service Available",
    "Licensed Professional Technicians"
  ];

  const messageGroup = (
    <>
      {messages.map((message, index) => (
        <>
          <Typography
            key={index}
            variant="h6"
            sx={{
              color: '#ffffff',
              fontWeight: 500,
              minWidth: 'max-content',
              textAlign: 'center',
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
              padding: '0 40px',
            }}
          >
            {message}
          </Typography>
          {index !== messages.length - 1 && (
            <img
              src="logo.png"
              alt="Ruba Agencies Logo"
              style={{
                height: '50px',
                width: 'auto',
                margin: '0 20px',
                filter: 'brightness(1.2)',
              }}
            />
          )}
        </>
      ))}
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
        padding: '15px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: `${scroll} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused'
          }
        }}
      >
        {messageGroup}
        {messageGroup} {/* Duplicate for seamless loop */}
      </Box>
    </Box>
  );
};

export default ScrollingText;

