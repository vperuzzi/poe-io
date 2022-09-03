import React from "react";
import {
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from "draft-js";
import { useTheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useScreenshot, createFileName } from "use-react-screenshot";
import "./RichTextEditor.css";
import "../../node_modules/draft-js/dist/Draft.css";
import { Box } from "@mui/material";

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.initializeEditorState(),
      isEdit: true,
      title: this.initializeTitleState(),
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.handlePublish = this._handlePublish.bind(this);
    this.handleEdit = this._handleEdit.bind(this);
    this.handleTitle = this._handleTitle.bind(this);
    this.handleScreenshot = this._handleScreenshot.bind(this);

    this.ref = React.createRef(null);
  }

  initializeEditorState() {
    let editorState = null;
    let storeRaw = localStorage.getItem("editorState");
    if (storeRaw) {
      const rawContent = convertFromRaw(JSON.parse(storeRaw));
      editorState = EditorState.createWithContent(rawContent);
    } else {
      editorState = EditorState.createEmpty();
    }

    return editorState;
  }

  initializeTitleState() {
    let title = localStorage.getItem("title");
    if (title) {
      return title;
    } else {
      title = 'My Poem';
    }

    return title;
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  _handlePublish() {
    this.setState({ ...this.state, isEdit: false });
    let contentRaw = convertToRaw(this.state.editorState.getCurrentContent());
    localStorage.setItem("editorState", JSON.stringify(contentRaw));
    localStorage.setItem("title", this.state.title);
  }

  _handleEdit() {
    this.setState({ ...this.state, isEdit: true });
    this.focus();
  }

  _handleTitle(event) {
    event.preventDefault();
    this.setState({ ...this.state, title: event.target.value });
  }

  _handleScreenshot() {
    this.props.takeScreenShot(this.ref.current).then((image, { name = this.state.title, extension = "jpg" } = {}) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = createFileName(extension, name);
      a.click();
    });
  }

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div>
        {this.state.isEdit && (
          <TextField
            sx={{
              marginBottom: "20px",
            }}
            id="filled-basic"
            label="Title"
            variant="filled"
            fullWidth
            onChange={this.handleTitle}
            value={this.state.title}
          />
        )}
        <Box className="RichEditor-root" sx={{backgroundColor: 'background.default'}}>
          {this.state.isEdit && (
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
          )}
          <div className={className} onClick={this.focus} ref={this.ref}>
            {!this.state.isEdit && <p className="title">{this.state.title}</p>}
            <Editor
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Once upon a midnight dreary, while I pondered, weak and weary..."
              ref="editor"
              spellCheck={true}
              textAlignment="center"
              readOnly={!this.state.isEdit}
            />
          </div>
        </Box>
        <div className="button-container">
          {this.state.isEdit && (
            <Button
              sx={{
                marginTop: "5px",
              }}
              variant="contained"
              endIcon={<AutoAwesomeIcon />}
              onClick={this.handlePublish}
              color={this.props.theme.primary}
            >
              Publish
            </Button>
          )}
          {!this.state.isEdit && (
            <Button
              sx={{
                margin: "5px 0px",
              }}
              variant="contained"
              endIcon={<CameraAltIcon />}
              color={this.props.theme.primary}
              onClick={this.handleScreenshot}
            >
              Screenshot
            </Button>
          )}
          {!this.state.isEdit && (
            <Button
              sx={{
                margin: "5px 5px",
              }}
              variant="contained"
              endIcon={<EditIcon />}
              onClick={this.handleEdit}
              color={this.props.theme.primary}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const withHooks = (Component) => {
  return function WrappedComponent(props) {
    const theme = useTheme();
    const [image, takeScreenShot] = useScreenshot({
      type: "image/jpeg",
      quality: 1.0
    });

    return (
      <Component
        {...props}
        theme={theme}
        image={image}
        takeScreenShot={takeScreenShot}
      />
    );
  };
};

export default withHooks(RichTextEditor);
