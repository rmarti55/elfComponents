import React from "react";

interface TertiaryCTAProps {
  onClick: () => void;
  children: React.ReactNode;
}

const TertiaryCTA: React.FC<TertiaryCTAProps> = ({ onClick, children }) => (
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

export default TertiaryCTA; 