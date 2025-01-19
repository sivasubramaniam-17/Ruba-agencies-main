// File: Testimonials.js
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Styled Components
const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: "350px",
  margin: "0 auto",
  textAlign: "center",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
}));

const AvatarWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
}));

const SwiperContainer = styled(Box)(() => ({
  width: "100%",
  padding: "50px 0",
  position: "relative", // Needed for arrow positioning
}));

const Title = styled(Typography)(() => ({
  textAlign: "center",
  fontWeight: 700,
  marginBottom: "12px",
  fontSize:{xs:"1.3rem",md:"1.8rem"},
  color: "#1b247f",
  fontStyle: "italic",
  textTransform: "uppercase",
  fontFamily: "'Segoe Script', cursive",
}));

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: "black", py: 5 }}>
      <Title variant="h5"  className="component">What Our Clients Say</Title>
      <Typography  className="component" variant="body2" sx={{color:"rgba(255,255,255,0.8)",textAlign:"center"}}>Customer feedback on expert home appliance installation and quality service</Typography>
      <SwiperContainer  className="component">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continues autoplay after interaction
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            960: { slidesPerView: 3, spaceBetween: 30 },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
              
                sx={{
                  opacity: isActive ? 1 : 0.5, // Fully visible for active, dimmed for others
                }}
              >
                <CardContent>
                  <AvatarWrapper>
                    <Avatar
                      src="https://i.pravatar.cc/150?img=10"
                      alt="John Doe"
                      sx={{
                        width: 90,
                        height: 90,
                        border: "4px solid #f1f1f1",
                      }}
                    />
                  </AvatarWrapper>
                  <Typography variant="h6" fontWeight="bold">
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={2}>
                    “Pellentesque in ipsum id orci porta dapibus. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui.”
                  </Typography>
                </CardContent>
              </TestimonialCard>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
                sx={{
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <CardContent>
                  <AvatarWrapper>
                    <Avatar
                      src="https://i.pravatar.cc/150?img=20"
                      alt="Sarah Lee"
                      sx={{
                        width: 90,
                        height: 90,
                        border: "4px solid #f1f1f1",
                      }}
                    />
                  </AvatarWrapper>
                  <Typography variant="h6" fontWeight="bold">
                    Sarah Lee
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={2}>
                    “Curabitur aliquet quam id dui posuere blandit. Nulla quis
                    lorem ut libero malesuada feugiat.”
                  </Typography>
                </CardContent>
              </TestimonialCard>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
                sx={{
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <CardContent>
                  <AvatarWrapper>
                    <Avatar
                      src="https://i.pravatar.cc/150?img=15"
                      alt="Ann Lubin"
                      sx={{
                        width: 90,
                        height: 90,
                        border: "4px solid #f1f1f1",
                      }}
                    />
                  </AvatarWrapper>
                  <Typography variant="h6" fontWeight="bold">
                    Ann Lubin
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={2}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum.”
                  </Typography>
                </CardContent>
              </TestimonialCard>
            )}
          </SwiperSlide>

          {/* Navigation Arrows */}
        </Swiper>
      </SwiperContainer>
    </Box>
  );
};

export default Testimonials;
