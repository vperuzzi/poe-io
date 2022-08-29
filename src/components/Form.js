import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Form.css";
import WordList from "./WordList";

const Form = (props) => {
  const [rhyme, setRhyme] = useState("");
  const [related, setRelated] = useState("");
  const [results, setResults] = useState([]);

  const theme = useTheme();

  const handleRhyme = (event) => {
    event.preventDefault();
    setRhyme(event.target.value);
  };

  const handleRelated = (event) => {
    event.preventDefault();
    setRelated(event.target.value.trim());
  };

  const handleQuery = () => {
    let url = "";
    console.log(related, rhyme);
    if (rhyme.length > 0 && related.length > 0) {
      url = `https://api.datamuse.com/words?ml=${related}&rel_rhy=${rhyme}`;
    } else if (rhyme.length > 0) {
      url = `https://api.datamuse.com/words?rel_rhy=${rhyme}`;
    } else {
      return;
    }

    fetch(url)
      .then((result) => result.json())
      .then(
        (result) => {
          let words = result.map((element) => {
            return element.word;
          });
          setResults([...words]);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="Rhymes with..."
        variant="outlined"
        color={theme.primary}
        onChange={handleRhyme}
      />
      <TextField
        sx={{
          marginLeft: "20px",
        }}
        id="outlined-basic"
        label="Related to..."
        variant="outlined"
        color={theme.primary}
        onChange={handleRelated}
      />
      <div>
        <Button
          sx={{
            marginTop: "10px",
          }}
          color={theme.primary}
          variant="contained"
          onClick={handleQuery}
          endIcon={<SearchIcon />}
        >
          Query
        </Button>
      </div>
      <div>
        <WordList words={results} />
      </div>
    </div>
  );
};

export default Form;
