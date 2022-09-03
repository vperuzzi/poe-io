import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = (props) => {
  const [mode, setMode] = React.useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#8c1aff",
          },
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                text: {
                  primary: '#000000'
                },
              }
            : {
                // palette values for dark mode
                background: {
                  default: '#262626',
                  paper: '#262626',
                },
                text: {
                  primary: "#fff",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider
      value={{
        toggleColorMode: toggleColorMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline>{props.children}</CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;
