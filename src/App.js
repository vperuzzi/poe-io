import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import Form from "./components/Form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from 'react';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8c1aff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <div className="editorApp">
            <RichTextEditor />
          </div>
          <Form />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
