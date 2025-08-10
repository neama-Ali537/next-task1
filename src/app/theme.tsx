'use client'
import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl", // دعم الاتجاه العربي
  typography: {
    fontFamily: "Tajawal, Arial, sans-serif",
  },
});
export default theme;
