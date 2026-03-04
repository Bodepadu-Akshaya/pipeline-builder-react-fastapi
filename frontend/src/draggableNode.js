// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        padding: "8px 14px",
        background: "#374151",
        color: "white",
        borderRadius: "6px",
        cursor: "grab",
        fontSize: "14px",
      }}
    >
      {label}
    </div>
  );
};
