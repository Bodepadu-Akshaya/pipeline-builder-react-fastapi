import BaseNode from "./BaseNode";

export function FilterNode() {
  return (
    <BaseNode title="Filter Node" inputs={["data"]} outputs={["filtered"]}>
      <div>Filter incoming data</div>
    </BaseNode>
  );
}
