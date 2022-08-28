import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
          <RichTextEditor theme={theme} />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
