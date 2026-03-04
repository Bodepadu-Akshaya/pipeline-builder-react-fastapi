// ui.js
import { SubmitButton } from "./submit";

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import { useStore } from "./store";

import { InputNode } from "./nodes/inputNode";
import { OutputNode } from "./nodes/outputNode";
import { LLMNode } from "./nodes/llmNode";
import { TextNode } from "./nodes/textNode";
import { MathNode } from "./nodes/MathNode";
import { APINode } from "./nodes/APINode";
import { ImageNode } from "./nodes/ImageNode";
import { FilterNode } from "./nodes/FilterNode";
import { LoggerNode } from "./nodes/LoggerNode";

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  math: MathNode,
  api: APINode,
  image: ImageNode,
  filter: FilterNode,
  logger: LoggerNode,
};

export const PipelineUI = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    useStore();

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");

    if (!type) return;

    const position = {
      x: event.clientX - 200,
      y: event.clientY - 100,
    };

    addNode(type, position);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView
      >
        <Background />
        <Controls />
        <SubmitButton />
      </ReactFlow>
    </div>
  );
};
