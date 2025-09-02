import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Banner from "./Banner";
import { useTheme } from "@mui/material/styles";

const banners = [
  {
    title: "Lorem Ipsum is simply dummy.",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    buttonText: "Кнопка действие",
    themeColor: "#6A1B9A",
    imagePlaceholder: "#F5C16C",
  },
  {
    title: "Second Banner Title",
    description: "Second banner description goes here.",
    buttonText: "Второе действие",
    themeColor: "#1976D2",
    imagePlaceholder: "#FFD700",
  },
  {
    title: "Third Banner Title",
    description: "Third banner description goes here.",
    buttonText: "Третье действие",
    themeColor: "#388E3C",
    imagePlaceholder: "#FF7043",
  },
];

const BannerSlider: React.FC = () => {
const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Banner {...banners[currentIndex]} />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "left", mt: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              background: theme.customGradients.accent,
              borderRadius: "12px",
              width: 44,
              height: 44,
              color: "#fff",
             transition: "all 0.3s",
              border: "none",
              '&:hover': {
                opacity: 0.8,
                background: theme.customGradients.accent,
              },
            }}
          >
            <SlArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              background: theme.customGradients.accent,
              borderRadius: "12px",
              width: 44,
              height: 44,
              color: "#fff",
              border: "none",
              transition: "all 0.3s",
              '&:hover': {
                opacity: 0.8,
                background: theme.customGradients.accent,
              },
            }}
          >
            <SlArrowRight />
          </IconButton>
        </Box>
        {/* Slider indicator */}
        <Box sx={{ display: "flex", alignItems: "center", ml:4, gap: 2 }}>
          {banners.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: idx === currentIndex ? 70 : 40,
                height: 6,
                borderRadius: 3,
                background:
                  idx === currentIndex
                    ? theme.customGradients.accent
                    : theme.customGradients.accent,
                opacity: idx === currentIndex ? 1 : 0.5,
                transition: "all 0.3s",
                border: idx === currentIndex ? "none" : "1px solid #F5C16C",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BannerSlider;
