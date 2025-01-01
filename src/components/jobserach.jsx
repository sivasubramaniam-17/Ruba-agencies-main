import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const RootBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F9FC',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
//   maxWidth: 1200,
  margin: 'auto',
}));

const CustomButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: 24,
});

const JobAlertCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: 20,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  fontSize: 14,
}));

const CandidateCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: 20,
  left: 20,
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const TalentSearchForm = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  width: 200,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

const JobSearchComponent = () => {
  return (
    <RootBox>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#212121' }}
          >
            Find Your Ideal Job
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: '#606770', lineHeight: 1.5 }}
          >
            The digital marketing solution provider for Ford Dealers and Lincoln
            Retailers turned to the DataRobot.
          </Typography>
          <Box sx={{ display: 'flex', mt: 3 }}>
            <TextField
              placeholder="Search job"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                marginRight: 2,
                borderRadius: '24px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 24,
                },
              }}
            />
            <CustomButton variant="contained" color="primary" size="large">
              Search
            </CustomButton>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#212121' }}>
              8M+ Matches Made
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: '#606770', lineHeight: 1.5, mt: 1 }}
            >
              Unlocking your potential. Here to help with our logistics.
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="#"
              sx={{
                color: '#1976D2',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none',
                mt: 1,
                display: 'inline-block',
              }}
            >
              Browse All Categories
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Box sx={{ position: 'relative', width: '100%', borderRadius: 2 }}>
            <Avatar
              src="https://via.placeholder.com/500"
              alt="User"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
            {/* Job Alert Card */}
            <JobAlertCard>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Job Alert Subscribe
              </Typography>
            </JobAlertCard>

            {/* Candidate Card */}
            <CandidateCard>
              <Avatar
                src="https://via.placeholder.com/40"
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                5k+ candidates get job
              </Typography>
            </CandidateCard>

            {/* Talent Search Form */}
            <TalentSearchForm>
              <TextField
                placeholder="Type of Work"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: '24px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 24,
                  },
                }}
              />
              <TextField
                placeholder="Position"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: '24px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 24,
                  },
                }}
              />
              <CustomButton variant="contained" color="primary">
                Search Talent
              </CustomButton>
            </TalentSearchForm>
          </Box>
        </Grid>
      </Grid>
    </RootBox>
  );
};

export default JobSearchComponent;
