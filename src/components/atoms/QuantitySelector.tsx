import React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onDecrease,
  onIncrease,
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #374151",
        borderRadius: "9999px",
        backgroundColor: "white",
        padding: "8px 12px",
        minWidth: "120px",
      }}
    >
      <button
        onClick={onDecrease}
        disabled={disabled || quantity <= 0}
        style={{
          background: "none",
          border: "none",
          width: "24px",
          height: "24px",
          padding: "0",
          color: "#6b7280",
          cursor: disabled || quantity <= 0 ? "not-allowed" : "pointer",
          opacity: disabled || quantity <= 0 ? 0.3 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Decrease quantity"
      >
        <Minus size={18} />
      </button>
      
      <span
        style={{
          flex: "1",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "700",
          color: "#111827",
          padding: "0 12px",
          fontFamily: "Futura, sans-serif",
          lineHeight: "1",
          minWidth: "40px",
          width: "40px",
        }}
      >
        {quantity}
      </span>
      
      <button
        onClick={onIncrease}
        disabled={disabled}
        style={{
          background: "none",
          border: "none",
          width: "24px",
          height: "24px",
          padding: "0",
          color: "#6b7280",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.3 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Increase quantity"
      >
        <Plus size={18} />
      </button>
    </div>
  );
};

export default QuantitySelector; 