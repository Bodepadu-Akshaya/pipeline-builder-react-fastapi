import BaseNode from "./BaseNode";

export function APINode() {
  return (
    <BaseNode title="API Node" inputs={["request"]} outputs={["response"]}>
      <div>Fetch data from API</div>
    </BaseNode>
  );
}
