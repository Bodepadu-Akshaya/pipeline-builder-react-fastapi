import BaseNode from "./BaseNode";

export function ImageNode() {
  return (
    <BaseNode title="Image Node" inputs={["image"]} outputs={["processed"]}>
      <div>Image processing</div>
    </BaseNode>
  );
}
