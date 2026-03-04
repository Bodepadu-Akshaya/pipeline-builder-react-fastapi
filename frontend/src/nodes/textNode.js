import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const textareaRef = useRef(null);

  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  // Extract variables like {{name}}
  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    const matches = [...text.matchAll(regex)];
    const vars = [...new Set(matches.map((m) => m[1].trim()))];
    setVariables(vars);
  }, [text]);

  // Auto resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    updateNodeField(id, "text", e.target.value);
  };

  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px",
        border: "1px solid #334155",
        width: "280px",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 12px",
          borderBottom: "1px solid #334155",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Text
      </div>

      {/* Text Area */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        placeholder="Enter text with {{variables}}"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          resize: "none",
          background: "transparent",
          color: "white",
          padding: "12px",
          fontSize: "13px",
          lineHeight: "1.5",
          boxSizing: "border-box",
          minHeight: "60px",
        }}
      />

      {/* Default input handle (when no variables exist) */}
      {variables.length === 0 && (
        <Handle
          type="target"
          position={Position.Left}
          id="input"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            background: "#3b82f6",
            width: 10,
            height: 10,
          }}
        />
      )}

      {/* Variable input handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={variable}
          style={{
            top: "50%",
            transform: `translateY(${
              (index - (variables.length - 1) / 2) * 22
            }px)`,
            background: "#3b82f6",
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          background: "#22c55e",
          width: 10,
          height: 10,
        }}
      />
    </div>
  );
};
