import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
  Snackbar,
  MenuItem,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import emailjs from "emailjs-com"; // Email.js integration

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    applianceType: "",
    installationTime: "9-12 AM",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email.js email submission
    emailjs
      .send(
        "service_bxama57", // Replace with your Email.js service ID
        "template_zojs8kb", // Replace with your Email.js template ID
        formData,
        "gCOXhAKT_GlbkeU5o" // Replace with your Email.js public API key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowSuccess(true);
          setLoading(false);
          // Reset the form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            applianceType: "",
            installationTime: "9-12 AM",
            preferredDate: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setLoading(false);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
       className="component"
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
          mb: 1,
          color: '#1b247f',
          textTransform: 'uppercase',
        
          fontFamily: "'Segoe Script', cursive",
          fontStyle:"italic",
        }}
      >
        Schedule your Slot
      </Typography>

      <Typography
       className="component"
        variant="body1"
        sx={{
          textAlign: "center",
          color: "white",
          mb: 4,
        }}
      >
        Schedule your appliance installation with us!
      </Typography>

      <Box
        sx={{
          display: "flex",
          bgcolor: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          minHeight: "600px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Side - Contact Information */}
        <Box
          sx={{
            background: "linear-gradient(45deg, #1a237e 30%, #283593 90%)",
            width: { xs: "100%", md: "40%" },
            p: 4,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography  className="component" variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information
            </Typography>
            <Typography  className="component" variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
              Fill up the form and our Team will <br /> get back to you within 24
              hours.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography  className="component" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                📞 +91 6379440442
              </Typography>
              <Typography  className="component" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                ✉️ Rubaagencies72@gmail.com
              </Typography>
              <Typography  className="component" sx={{ display: "flex", alignItems: "center" }}>
                📍 102 Street 2714 Don
              </Typography>
            </Box>
          </Box>

          <Box  className="component" sx={{ display: "flex", gap: 2, position: "relative", zIndex: 2 }}>
            <Facebook sx={{ cursor: "pointer", opacity: 0.9 }} />
            <Twitter sx={{ cursor: "pointer", opacity: 0.9 }} />
            <Instagram sx={{ cursor: "pointer", opacity: 0.9 }} />
            <LinkedIn sx={{ cursor: "pointer", opacity: 0.9 }} />
          </Box>
        </Box>

        {/* Right Side - Form */}
        <Box
         className="component"
          sx={{
            flex: 1,
            p: 4,
            bgcolor: "#fff",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
                mb: 3,
              }}
            >
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
                mb: 3,
              }}
            >
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

            <TextField
              fullWidth
              label="Installation Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
                mb: 3,
              }}
            >
              <TextField
                select
                label="Appliance Type"
                name="applianceType"
                value={formData.applianceType}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              >
                <MenuItem value="Refrigerator">Refrigerator</MenuItem>
                <MenuItem value="Washing Machine">Washing Machine</MenuItem>
                <MenuItem value="Dryer">Dryer</MenuItem>
                <MenuItem value="Dishwasher">Dishwasher</MenuItem>
                <MenuItem value="Air Conditioner">Air Conditioner</MenuItem>
                <MenuItem value="Water Heater">Water Heater</MenuItem>
                <MenuItem value="Stove">Stove/Range</MenuItem>
                <MenuItem value="Microwave">Microwave</MenuItem>
              </TextField>

              <TextField
                type="date"
                label="Preferred Installation Date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Installation Time
            </Typography>
            <RadioGroup
              row
              name="installationTime"
              value={formData.installationTime}
              onChange={handleChange}
              sx={{ mb: 3 }}
            >
              <FormControlLabel
                value="9-12 AM"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#5850EC",
                      },
                    }}
                  />
                }
                label="9-12 AM"
              />
              <FormControlLabel
                value="2-5 PM"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#5850EC",
                      },
                    }}
                  />
                }
                label="2-5 PM"
              />
              <FormControlLabel
                value="6-9 PM"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#5850EC",
                      },
                    }}
                  />
                }
                label="6-9 PM"
              />
            </RadioGroup>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Notes"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements or concerns..."
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: "#5850EC",
                color: "#fff",
                py: 1.5,
                px: 4,
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "#4338CA",
                },
                "&.Mui-disabled": {
                  bgcolor: "#9CA3AF",
                  color: "#fff",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Schedule Installation"
              )}
            </Button>
          </form>
        </Box>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        message="Installation request submitted successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
};

export default ContactForm;
