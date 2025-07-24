import React from "react";

interface RemoveButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: 0,
      border: "none",
      background: "none",
      color: "#111",
      fontSize: 14,
      textTransform: "uppercase",
      textDecoration: "underline",
      cursor: "pointer",
      fontWeight: 400,
      fontFamily: "Futura, sans-serif",
      textAlign: "left",
      marginTop: 12,
    }}
  >
    {children}
  </button>
);

export default RemoveButton; 