(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){},259:function(e,t,a){e.exports=a(294)},266:function(e,t,a){},268:function(e,t,a){},286:function(e,t,a){},288:function(e,t,a){},290:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n,i=a(0),l=a.n(i),r=a(142),o=a.n(r),c=(a(266),a(268),a(10)),s=a(53),d=a(64),u=a(65),m=a(246),h=a(98),g=a(247),f=a(22),p=a(35),b=a(41),E=a(250),v=a.n(E),y=a(249),O=a.n(y),S=a(248),j=a.n(S),C=a(343),k=a(340),x=a(99),T=(a(235),a(237),a(344)),I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={editorState:a.initializeEditorState(),isEdit:!0,title:a.initializeTitleState()},a.focus=function(){return a.refs.editor.focus()},a.onChange=function(e){return a.setState({editorState:e})},a.handleKeyCommand=a._handleKeyCommand.bind(Object(f.a)(Object(f.a)(a))),a.mapKeyToEditorCommand=a._mapKeyToEditorCommand.bind(Object(f.a)(Object(f.a)(a))),a.toggleInlineStyle=a._toggleInlineStyle.bind(Object(f.a)(Object(f.a)(a))),a.handlePublish=a._handlePublish.bind(Object(f.a)(Object(f.a)(a))),a.handleEdit=a._handleEdit.bind(Object(f.a)(Object(f.a)(a))),a.handleTitle=a._handleTitle.bind(Object(f.a)(Object(f.a)(a))),a.handleScreenshot=a._handleScreenshot.bind(Object(f.a)(Object(f.a)(a))),a.ref=l.a.createRef(null),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"initializeEditorState",value:function(){var e=null,t=localStorage.getItem("editorState");if(t){var a=Object(p.convertFromRaw)(JSON.parse(t));e=p.EditorState.createWithContent(a)}else e=p.EditorState.createEmpty();return e}},{key:"initializeTitleState",value:function(){var e=localStorage.getItem("title");return e||(e="My Poem")}},{key:"_handleKeyCommand",value:function(e,t){var a=p.RichUtils.handleKeyCommand(t,e);return!!a&&(this.onChange(a),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return Object(p.getDefaultKeyBinding)(e);var t=p.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleInlineStyle",value:function(e){this.onChange(p.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"_handlePublish",value:function(){this.setState(Object(s.a)({},this.state,{isEdit:!1}));var e=Object(p.convertToRaw)(this.state.editorState.getCurrentContent());localStorage.setItem("editorState",JSON.stringify(e)),localStorage.setItem("title",this.state.title)}},{key:"_handleEdit",value:function(){this.setState(Object(s.a)({},this.state,{isEdit:!0})),this.focus()}},{key:"_handleTitle",value:function(e){e.preventDefault(),this.setState(Object(s.a)({},this.state,{title:e.target.value}))}},{key:"_handleScreenshot",value:function(){var e=this;this.props.takeScreenShot(this.ref.current).then(function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.name,i=void 0===n?e.state.title:n,l=a.extension,r=void 0===l?"jpg":l,o=document.createElement("a");o.href=t,o.download=Object(x.a)(r,i),o.click()})}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",a=e.getCurrentContent();return a.hasText()||"unstyled"!==a.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),l.a.createElement("div",null,this.state.isEdit&&l.a.createElement(k.a,{sx:{marginBottom:"20px"},id:"filled-basic",label:"Title",variant:"filled",fullWidth:!0,onChange:this.handleTitle,value:this.state.title}),l.a.createElement(T.a,{className:"RichEditor-root",sx:{backgroundColor:"background.default"}},this.state.isEdit&&l.a.createElement(_,{editorState:e,onToggle:this.toggleInlineStyle}),l.a.createElement(T.a,{className:t,onClick:this.focus,ref:this.ref,sx:{backgroundColor:"background.default"}},!this.state.isEdit&&l.a.createElement("p",{className:"title"},this.state.title),l.a.createElement(p.Editor,{customStyleMap:w,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Once upon a midnight dreary, while I pondered, weak and weary...",ref:"editor",spellCheck:!0,textAlignment:"center",readOnly:!this.state.isEdit}))),l.a.createElement("div",{className:"button-container"},this.state.isEdit&&l.a.createElement(C.a,{sx:{marginTop:"5px"},variant:"contained",endIcon:l.a.createElement(j.a,null),onClick:this.handlePublish,color:this.props.theme.primary},"Publish"),!this.state.isEdit&&l.a.createElement(C.a,{sx:{margin:"5px 0px"},variant:"contained",endIcon:l.a.createElement(O.a,null),color:this.props.theme.primary,onClick:this.handleScreenshot},"Screenshot"),!this.state.isEdit&&l.a.createElement(C.a,{sx:{margin:"5px 5px"},variant:"contained",endIcon:l.a.createElement(v.a,null),onClick:this.handleEdit,color:this.props.theme.primary},"Edit")))}}]),t}(l.a.Component),w={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}},R=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),l.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),t}(l.a.Component),N=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"}],_=function(e){var t=e.editorState.getCurrentInlineStyle();return l.a.createElement("div",{className:"RichEditor-controls"},N.map(function(a){return l.a.createElement(R,{key:a.label,active:t.has(a.style),label:a.label,onToggle:e.onToggle,style:a.style})}))},K=(n=I,function(e){var t=Object(b.a)(),a=Object(x.b)({type:"image/jpeg",quality:1}),i=Object(c.a)(a,2),r=i[0],o=i[1];return l.a.createElement(n,Object.assign({},e,{theme:t,image:r,takeScreenShot:o}))}),M=a(19),B=a(251),D=a.n(B),F=(a(286),a(288),function(e){var t=e.words;return l.a.createElement("div",{className:"wordList-container"},t.length>0?t.map(function(e){return l.a.createElement("p",{key:e},e)}):l.a.createElement("p",null,"No Results."))}),P=function(e){var t=Object(i.useState)(""),a=Object(c.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(""),s=Object(c.a)(o,2),d=s[0],u=s[1],m=Object(i.useState)([]),h=Object(c.a)(m,2),g=h[0],f=h[1],p=Object(b.a)();return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"textField-container"},l.a.createElement(k.a,{id:"outlined-basic",label:"Rhymes with...",variant:"outlined",color:p.primary,onChange:function(e){e.preventDefault(),r(e.target.value)}}),l.a.createElement(k.a,{sx:{marginLeft:"20px","@media screen and (max-width: 550px)":{marginLeft:"0px",marginTop:"10px"}},id:"outlined-basic",label:"Related to...",variant:"outlined",color:p.primary,onChange:function(e){e.preventDefault(),u(e.target.value.trim())}})),l.a.createElement("div",null,l.a.createElement(C.a,{sx:{marginTop:"10px"},color:p.primary,variant:"contained",onClick:function(){f([]);var e="";if(n.length>0&&d.length>0)e="https://api.datamuse.com/words?ml=".concat(d,"&rel_rhy=").concat(n);else{if(!(n.length>0))return;e="https://api.datamuse.com/words?rel_rhy=".concat(n)}fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return e.word});f(Object(M.a)(t))},function(e){console.log(e)})},endIcon:l.a.createElement(D.a,null)},"Query")),l.a.createElement("div",null,l.a.createElement(F,{words:g})))},L=(a(290),a(252)),z=a.n(L),U=a(253),A=a.n(U),J=a(292),W=a(345),q=a(338),H=l.a.createContext({toggleColorMode:function(){},mode:"light"}),Q=function(e){var t=l.a.useState("light"),a=Object(c.a)(t,2),n=a[0],i=a[1],r=l.a.useMemo(function(){return Object(J.a)({palette:Object(s.a)({primary:{main:"#8c1aff"},mode:n},"light"===n?{text:{primary:"#000000"}}:{background:{default:"#262626",paper:"#262626"},text:{primary:"#fff"}})})},[n]);return l.a.createElement(H.Provider,{value:{toggleColorMode:function(){i(function(e){return"light"===e?"dark":"light"})}}},l.a.createElement(W.a,{theme:r},l.a.createElement(q.a,null,e.children)))},G=H,V=a(346),X=function(e){var t=Object(b.a)(),a=l.a.useContext(G);return l.a.createElement(T.a,{sx:{bgcolor:"primary.main",height:"4rem",color:"white",top:"0",lineHeight:"4rem",fontSize:"24px",fontFamily:"Roboto Mono",paddingLeft:"20px",fontWeight:"bold",alignItems:"center"}},"poe.io",l.a.createElement(V.a,{sx:{float:"right",mt:"0.7rem",mr:"10px"},onClick:a.toggleColorMode,color:"inherit"},"dark"===t.palette.mode?l.a.createElement(z.a,{size:"large"}):l.a.createElement(A.a,null)))};var Y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"editorApp"},l.a.createElement(K,null)),l.a.createElement(P,null)))},Z=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,339)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),l(e),r(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null,l.a.createElement(Y,null)))),Z()}},[[259,3,2]]]);
//# sourceMappingURL=main.8a6c3b18.chunk.js.map