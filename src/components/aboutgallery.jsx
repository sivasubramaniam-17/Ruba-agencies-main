import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Image Data with Captions
const images = [
  {
    src: "3.jpg",
    alt: "Refrigerator Installation",
    heading: "Refrigerator Installation",
    caption: "Expert refrigerator installation for reliable cooling and storage.",
  },
  {
    src: "2.jpg",
    alt: "Air Conditioner Setup",
    heading: "Air Conditioner Installation",
    caption: "Stay cool with professional AC installation services.",
  },
  {
    src: "wm.jpg",
    alt: "Washing Machine Service",
    heading: "Washing Machine Installation",
    caption: "Efficient washing machine setup for hassle-free laundry days.",
  },
  {
    src: "4.jpg",
    alt: "Microwave Setup",
    heading: "Microwave Installation",
    caption: "Seamless microwave setup for quick and easy cooking.",
  },
  {
    src: "tv.jpg",
    alt: "Television Wall Mount",
    heading: "Television Installation",
    caption: "Perfectly mounted TVs for the ultimate viewing experience.",
  },
];

// Animation Variants for Card Transition
const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Carousel = () => {
  const [[currentIndex, direction], setIndex] = useState([0, 0]);
  const isMobile = useMediaQuery("(max-width:768px)");

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([prevIndex]) => [prevIndex + 1 === images.length ? 0 : prevIndex + 1, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const nextSlide = () => setIndex([currentIndex + 1 === images.length ? 0 : currentIndex + 1, 1]);
  const prevSlide = () => setIndex([currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1, -1]);

  return (
    <Box
      {...swipeHandlers}
      sx={{
        position: "relative",
        width: "100%",
    
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#121212",
      }}
    >
      {/* Heading Section */}
      <Box sx={{ textAlign: "center", marginBottom: "550px" }}>
        <Typography variant={isMobile ? "h6" : "h5"} color="white" fontWeight="bold" sx={{color: "#1b247f",
    fontFamily: "'Segoe Script', cursive",
    fontStyle:"italic",textTransform:"uppercase"}}  className="component">
          Expert Home Appliance Installation Services
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"} color="white" mt={1}  className="component">
          Reliable, professional, and hassle-free installation for your home appliances.
        </Typography>
      </Box>

      {/* Carousel Animation */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
            width: "80%",
          }}
        >
          <Box
           className="component"
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundImage: `url(${images[currentIndex].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* Overlay Text */}
            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                right: "5%",
                backgroundColor: "rgba(0, 0, 0, 1)",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <Typography variant={isMobile ? "h6" : "h6"} fontWeight="bold" sx={{color: "#1b247f",
              textTransform:"uppercase",
    fontFamily: "'Segoe Script', cursive",
    fontStyle:"italic",}}>
                {images[currentIndex].heading}
              </Typography>
              <Typography variant={isMobile ? "body2" : "body1"} mt={1}>
                {images[currentIndex].caption}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex([i, i > currentIndex ? 1 : -1])}
            sx={{
              width: isMobile ? "10px" : "15px",
              height: isMobile ? "10px" : "15px",
              borderRadius: "50%",
              backgroundColor: i === currentIndex ? "white" : "gray",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
