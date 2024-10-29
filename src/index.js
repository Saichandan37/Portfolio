import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey, deepOrange, lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ffbaf6",
      dark: "#002884",
      contrastText: "#fff",
    },
    skyblue: {
      light: "#757ce8",
      main: "#87CEEB",
      dark: "#002884",
      contrastText: "#fff",
    },
    lightyellow: {
      light: "#757ce8",
      main: "#FFC300",
      dark: "#002884",
      contrastText: "#fff",
    },
    lightgreen: {
      light: "#757ce8",
      main: "#FF5733",
      dark: "#002884",
      contrastText: "#fff",
    },
    black: {
      light: "#757ce8",
      main: "#000000",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
