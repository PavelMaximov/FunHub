import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#F8FBF7", 
    },
    primary: {
      main: "#4A0F26", 
    },
    secondary: {
      main: "#9C9773", 
    },
    background: {
      default: "#230014", 
      paper: "#34021F",   
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    h1: { fontFamily: '"Montserrat Alternates", sans-serif' },
    h2: { fontFamily: '"Montserrat Alternates", sans-serif' },
    h3: { fontFamily: '"Montserrat Alternates", sans-serif' },
    h4: { fontFamily: '"Montserrat Alternates", sans-serif' },
  }
});


declare module "@mui/material/styles" {
  interface Theme {
    customGradients: {
      accent: string;
      background: string;
      border: string;
    };
    customRadius: {
      sm: number;
      md: number;
      lg: number;
    };
  }
  interface ThemeOptions {
    customGradients?: {
      accent?: string;
      background?: string;
      border?: string;
    };
     customRadius?: {
      sm?: number;
      md?: number;
      lg?: number;
    };
  }
}

theme.customGradients = {
  accent: "linear-gradient(90deg, #AF7332 24%, #C70B48 100%)",
  background: "linear-gradient(153.825deg, #34001E 0%, #400628 48%, #34001E 100%)",
  border: "linear-gradient(180deg, #9C9773 0%, #501028 100%)",
};

theme.customRadius = {
  sm: 14,
  md: 16,
  lg: 18,
};

export default theme;