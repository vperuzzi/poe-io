import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import Form from "./components/Form";
import React from "react";
import Nav from "./components/Nav";

function App() {

  return (
    <React.Fragment>
      <Nav />
      <div className="App">
        <div className="editorApp">
          <RichTextEditor />
        </div>
        <Form />
      </div>
    </React.Fragment>
  );
}

export default App;
