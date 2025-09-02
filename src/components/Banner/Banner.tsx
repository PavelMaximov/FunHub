import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  themeColor: string;

}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonText,
  themeColor,

}) => {

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        borderRadius: "18px",
        overflow: "hidden",
        marginTop: 4,
        backgroundColor: themeColor,
      }}
    >
      <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, maxWidth: 670 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            mb: 10,
            color: "#fff",
            opacity: 0.85,
          }}
        >
          {description}
        </Typography>
        <Button
          sx={{
            background: theme.customGradients.accent,
            backgroundSize: "170% 100%",
            backgroundPosition: "center bottom",
            transition: "all 0.4s ease",
            borderRadius: "16px",
            px: 4,
            py: 1.5,
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            "&:hover": {
              backgroundPosition: "left bottom",

            },
          }}
        >
          {buttonText}
        </Button>
      </Box>

    </Box>
  );
};

export default Banner;
