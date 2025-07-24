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
        border: "1px solid #d1d5db",
        borderRadius: "9999px",
        backgroundColor: "white",
        padding: "4px",
      }}
    >
      <button
        onClick={onDecrease}
        disabled={disabled || quantity <= 0}
        style={{
          background: "none",
          border: "none",
          width: "32px",
          height: "32px",
          padding: "0",
          color: "#111827",
          cursor: disabled || quantity <= 0 ? "not-allowed" : "pointer",
          opacity: disabled || quantity <= 0 ? 0.3 : 1,
        }}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <span
        style={{
          flex: "1",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#111827",
          padding: "0 8px",
          fontFamily: "Futura, sans-serif",
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
          width: "32px",
          height: "32px",
          padding: "0",
          color: "#111827",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.3 : 1,
        }}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector; 