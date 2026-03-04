import BaseNode from "./BaseNode";

export function LoggerNode() {
  return (
    <BaseNode title="Logger Node" inputs={["input"]} outputs={[]}>
      <div>Logs pipeline data</div>
    </BaseNode>
  );
}
