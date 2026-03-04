// llmNode.js
import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

export function LLMNode() {
  return (
    <BaseNode title="LLM Node" inputs={["prompt"]} outputs={["response"]}>
      <div>LLM Processing</div>
    </BaseNode>
  );
}
