"use client";
import { ThemeProvider } from "@mui/material";
import { DefaultTheme, ThemeProviderProps } from "@mui/styles";
import React from "react";

export const SSRThemeProvider = (
  props,
  ThemeProviderProps
) => {
  return (
    <React.StrictMode>
      <ThemeProvider {...props} />
    </React.StrictMode>
  );
};