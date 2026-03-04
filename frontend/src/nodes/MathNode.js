import BaseNode from "./BaseNode";

export function MathNode() {
  return (
    <BaseNode title="Math Node" inputs={["a", "b"]} outputs={["result"]}>
      <div>Add two numbers</div>
    </BaseNode>
  );
}
