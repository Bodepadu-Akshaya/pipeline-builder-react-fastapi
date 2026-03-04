import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "#ffffff",
        padding: "12px",
        borderRadius: "12px",
        minWidth: "180px",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        border: "1px solid #374151",
      }}
    >
      <div
        style={{
          fontWeight: "600",
          marginBottom: "10px",
          fontSize: "15px",
          borderBottom: "1px solid #374151",
          paddingBottom: "6px",
        }}
      >
        {title}
      </div>

      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{
            top: 50 + index * 25,
            background: "#3b82f6",
            width: "10px",
            height: "10px",
          }}
        />
      ))}

      <div className="node-content">{children}</div>

      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{
            top: 50 + index * 25,
            background: "#10b981",
            width: "10px",
            height: "10px",
          }}
        />
      ))}
    </div>
  );
}
