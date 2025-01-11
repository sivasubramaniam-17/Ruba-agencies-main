
import { Box, Typography, Button, Container } from '@mui/material';

const PerfectLanding = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        maxWidth: '1440px',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor:"black"
      }}
    >
        <Typography sx={{
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '2rem' },
            fontWeight: 700,
            lineHeight: { xs: 1.3, md: 1.2 },            
            color: "#6C63FF",
            fontStyle:"italic",
            textAlign: 'center',
            fontFamily: "'Segoe Script', cursive",
        }}>Why Choose us?</Typography>
      {/* Top Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        mb: { xs: 6, md: 10 },
        position: 'relative'
      }}>
        {/* Left Side with Logo */}
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
          mb: { xs: 4, md: 0 }
        }}>
          <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFC0CB 0%, #FFEFD5 50%, #FFD700 100%)',
            flexShrink: 0
          }} />
          <Box>
            <Typography sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'white',
              fontWeight: 400
            }}>
              A living place for curiosity and
            </Typography>
            <Typography sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'white',
              fontWeight: 400
            }}>
              collaboration, meeting and meaning.
            </Typography>
            <Typography sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'white',
              fontWeight: 400
            }}>
              The heart of a creative community
            </Typography>
          </Box>
        </Box>

        {/* Right Side Stats */}
        <Box sx={{
          display: 'flex',
          gap: { xs: 4, md: 6 }
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'white',
              lineHeight: 1,
              mb: 0.5
            }}>
              12
            </Typography>
            <Typography sx={{
              fontSize: '0.75rem',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Countries
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'white',
              lineHeight: 1,
              mb: 0.5
            }}>
              11K
            </Typography>
            <Typography sx={{
              fontSize: '0.75rem',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Participants
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 8 },
        position: 'relative'
      }}>
        {/* Left Side Cards Section */}
        <Box sx={{
          width: { xs: '100%', md: '45%' },
          position: 'relative',
          minHeight: { xs: 380, md: 300 }
        }}>
          {/* Pseudo Elements */}
          <Box sx={{
            position: 'absolute',
            width: 12,
            height: 12,
            bgcolor: '#FF4081',
            borderRadius: '50%',
            top: -16,
            left: -16,
            zIndex: 1
          }} />
          <Box sx={{
            position: 'absolute',
            width: 8,
            height: 8,
            bgcolor: '#4CAF50',
            borderRadius: '50%',
            bottom: { xs: 60, md: 40 },
            left: '20%',
            zIndex: 1
          }} />
          <Box sx={{
            position: 'absolute',
            width: 8,
            height: 8,
            bgcolor: '#FFA000',
            borderRadius: '50%',
            right: '10%',
            top: '50%',
            zIndex: 1
          }} />
          <Box sx={{
            position: 'absolute',
            width: 6,
            height: 6,
            bgcolor: '#FF80AB',
            borderRadius: '50%',
            right: '5%',
            bottom: '20%',
            zIndex: 1
          }} />

          {/* Cards */}
          <Box sx={{
            position: 'absolute',
            width: { xs: '200px', md: '220px' },
            p: 3,
            bgcolor: '#FFF3E0',
            borderRadius: 2,
            top: 0,
            left: 0,
            zIndex: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            <Typography sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#FFA000',
              mb: 1
            }}>
              125+
            </Typography>
            <Typography sx={{
              fontSize: '0.875rem',
              color: '#FFA000',
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              Performer
            </Typography>
          </Box>

          <Box sx={{
            position: 'absolute',
            width: { xs: '200px', md: '220px' },
            p: 3,
            bgcolor: '#E8F5E9',
            borderRadius: 2,
            top: { xs: 80, md: 60 },
            left: { xs: 40, md: 100 },
            zIndex: 2,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            <Typography sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#4CAF50',
              mb: 1
            }}>
              10K+
            </Typography>
            <Typography sx={{
              fontSize: '0.875rem',
              color: '#4CAF50',
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              Member
            </Typography>
          </Box>

          <Box sx={{
            position: 'absolute',
            width: { xs: '200px', md: '220px' },
            p: 3,
            bgcolor: '#E3F2FD',
            borderRadius: 2,
            top: { xs: 160, md: 120 },
            left: { xs: 80, md: 50 },
            zIndex: 1,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            <Typography sx={{
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#2196F3',
              mb: 1
            }}>
              450
            </Typography>
            <Typography sx={{
              fontSize: '0.875rem',
              color: '#2196F3',
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              Composition
            </Typography>
          </Box>
        </Box>

        {/* Right Side Content */}
        <Box sx={{
          width: { xs: '100%', md: '55%' },
          position: 'relative'
        }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'white',
            mb: { xs: 2, md: 3 }
          }}>
            How it works?
          </Typography>

          <Typography sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'white',
            mb: 2
          }}>
            Only companies you apply to will see you're looking for a job. Your current boss won't know. Compare jobs using our salary tool.
          </Typography>

          <Typography sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'white',
            mb: 3
          }}>
            No middlemen. Speak directly to founders and hiring managers. No third party recruiters allowed.
          </Typography>

          <Button 
            variant="contained"
            sx={{
              bgcolor: 'black',
              color: 'white',
              borderRadius: '28px',
              px: { xs: 3, md: 4 },
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#333'
              }
            }}
          >
            Read more
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PerfectLanding;