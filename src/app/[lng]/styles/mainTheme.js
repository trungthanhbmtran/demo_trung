'use client'; 

import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";


const theme = createTheme({
  // ... your theme here
});


const responsive = responsiveFontSizes(theme);

export default responsive;