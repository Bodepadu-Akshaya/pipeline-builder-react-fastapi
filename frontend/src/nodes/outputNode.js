// outputNode.js
import BaseNode from "./BaseNode";
import { useState } from "react";
import { Handle, Position } from "reactflow";

export function OutputNode() {
  return (
    <BaseNode title="Output Node" inputs={["input"]} outputs={[]}>
      <div>Output will appear here</div>
    </BaseNode>
  );
}
