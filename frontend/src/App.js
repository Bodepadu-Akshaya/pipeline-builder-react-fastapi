import "reactflow/dist/style.css";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#111827",
      }}
    >
      <PipelineToolbar />

      <div style={{ flex: 1 }}>
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
