
import { Box, Container, Typography } from '@mui/material';

const ServiceStepper = () => {
  const steps = [
    {
      number: "01",
      title: "Book a Service",
      description: "Schedule your home appliance installation easily. Our customer service team will confirm your appointment and guide you through the process.",
      image: "tv.jpg"
    },
    {
      number: "02",
      title: "Team Arrives",
      description: "Our certified technicians arrive at your doorstep with all necessary equipment and expertise to handle your appliance installation.",
      image: "wm.jpg"
    },
    {
      number: "03",
      title: "Installation Process",
      description: "Our team follows manufacturer guidelines and industry best practices to ensure proper installation and optimal performance.",
      image: "tv.jpg"
    },
    {
      number: "04",
      title: "Final Result",
      description: "Complete testing of the installed appliance, feature demonstration, and quality assurance checks for your peace of mind.",
      image: "wm.jpg"
    }
  ];

  return (
    <Box sx={{ width: '100%', bgcolor: 'black', pt: { xs: 2, md: 1 }, pb: { xs: 4, md: 8 },color:"white" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 5, md: 8 } ,color:"white"}} >
          <Typography 
           className="component"
            variant="h1" 
            sx={{
              fontSize: { xs: '1.3rem', sm: '2rem', md: '2rem' },
              textAlign: 'center',
              fontWeight: 700,
              lineHeight: 1.3,
              mb: { xs: 1, md: 2 }, 
              color:"#1b247f",
              textTransform: 'uppercase',
              fontFamily: "'Segoe Script', cursive",
              fontStyle:"italic"
            }}
          >
            Our Methodical Approach <br /> To Installation
          </Typography>
         
        </Box>

        {/* Timeline Container */}
        <Box sx={{ 
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(100% - 40px)',
            bgcolor: 'grey.200',
            top: '20px',
            display: { xs: 'none', md: 'none' }
          }
        }}>
          {steps.map((step, index) => (
            <Box
             className="component"
              key={step.number}
              sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: { 
                  xs: 'column', 
                  md: index % 2 === 0 ? 'row' : 'row-reverse' 
                },
                mb: { xs: 6, md: 8 },
                '&:last-child': { mb: 0 }
              }}
            >
              {/* Step Number Circle */}
              <Box
               
               sx={{
                position: { xs: 'static', md: 'absolute' },
                left: { md: '50%' },
                transform: { md: 'translateX(-50%)' },
                alignSelf: { xs: 'center' },
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 },
                bgcolor: '#1b247f',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 600,
                mb: { xs: 2, md: 0 },
                zIndex: 2,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {step.number}
              </Box>

              {/* Content Side */}
              <Box sx={{
                width: { xs: '100%', md: 'calc(50% - 32px)' },
                color: 'white',
                textAlign: { 
                  xs: 'center', 
                  md: index % 2 === 0 ? 'right' : 'left' 
                },
                pr: { md: index % 2 === 0 ? 4 : 0 },
                pl: { md: index % 2 === 0 ? 0 : 4 },
                // mb: { xs: 0.2, md: 0 },
                order: { xs: 2, md: 0 }
              }}>
                <Typography
                 className="component"
                 sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  mb: { xs: 1, md: 2 },
                  color:"#1b247f",
                  textTransform: 'uppercase',
                  fontFamily: "'Segoe Script', cursive",
                  fontStyle:"italic"
                }}>
                  {step.title}
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  color: 'white',
                  lineHeight: 1.6,
                  mx: { xs: 2, md: 0 }
                }}  className="component">
                  {step.description}
                </Typography>
              </Box>

              {/* Image Side */}
              <Box sx={{
                width: { xs: '100%', md: 'calc(50% - 32px)' },
                order: { xs: 1, md: 0 },
                mb: { xs: 3, md: 0 }
              }}>
                <Box 
                 className="component"
                  component="img"
                  src={step.image}
                  alt={step.title}
                  sx={{
                    width: '100%',
                    height: { xs: '200px', sm: '240px', md: '280px' },
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'block',
                    mx: 'auto'
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceStepper;