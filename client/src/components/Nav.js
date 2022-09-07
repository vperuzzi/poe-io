import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./Nav.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ColorModeContext from "./Theme/ColorModeContextProvider";
import IconButton from "@mui/material/IconButton";

const Nav = (props) => {
  const theme = useTheme();

  const ctx = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "4rem",
        color: "white",
        top: "0",
        lineHeight: "4rem",
        fontSize: "24px",
        fontFamily: "Roboto Mono",
        paddingLeft: "20px",
        fontWeight: "bold",
        alignItems: 'center',
      }}
    >
      poe.io ✒️
      <IconButton sx={{ float: "right", mt: '0.7rem', mr: '10px'}} onClick={ctx.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <LightModeIcon size="large"/> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Nav;
