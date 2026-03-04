// inputNode.js
import BaseNode from "./BaseNode";
import { useState } from "react";
import { Handle, Position } from "reactflow";

export function InputNode() {
  return (
    <BaseNode title="Input Node" inputs={[]} outputs={["output"]}>
      <input type="text" placeholder="Enter input" style={{ width: "100%" }} />
    </BaseNode>
  );
}
