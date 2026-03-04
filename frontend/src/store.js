// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  // ---------------- STATE ----------------
  nodes: [],
  edges: [],
  nodeIDs: {},

  // ---------------- NODE ID GENERATOR ----------------
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };

    if (!newIDs[type]) {
      newIDs[type] = 0;
    }

    newIDs[type] += 1;

    set({ nodeIDs: newIDs });

    return `${type}-${newIDs[type]}`;
  },

  // ---------------- ADD NODE ----------------
  addNode: (type, position) => {
    const id = get().getNodeID(type);

    const newNode = {
      id,
      type,
      position: position || { x: 100, y: 100 }, // prevents crash
      data: {
        label: type,
        value: "",
        text: "",
        output: "",
      },
    };

    set({
      nodes: [...get().nodes, newNode],
    });
  },

  // ---------------- NODE CHANGE (DRAG, MOVE) ----------------
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  // ---------------- EDGE CHANGE ----------------
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  // ---------------- CONNECT NODES ----------------
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
          },
        },
        get().edges,
      ),
    });
  },

  // ---------------- UPDATE NODE FIELD ----------------
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: fieldValue,
            },
          };
        }
        return node;
      }),
    });
  },

  // ---------------- SET NODE OUTPUT (PIPELINE RESULT) ----------------
  setNodeOutput: (nodeId, output) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              output,
            },
          };
        }
        return node;
      }),
    });
  },
}));
