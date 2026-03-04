// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#1f2937",
        padding: "10px",
        display: "flex",
        gap: "10px",
        borderBottom: "1px solid #374151",
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="image" label="Image" />
      <DraggableNode type="filter" label="Filter" />
      <DraggableNode type="logger" label="Logger" />
    </div>
  );
};
