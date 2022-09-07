import "./styles.css";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import { useEffect, useState } from "react";

export default function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {}
      }
    });
    setEditor(editor);
  }, []);
  console.log(editor);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}
