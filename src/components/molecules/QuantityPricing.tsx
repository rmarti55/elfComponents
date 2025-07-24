import React from "react";
import { QuantitySelector } from "../atoms";

interface QuantityPricingProps {
  quantity: number;
  unitPrice: number;
  discountedPrice?: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
}

const QuantityPricing: React.FC<QuantityPricingProps> = ({
  quantity,
  unitPrice,
  discountedPrice,
  onQuantityChange,
  disabled = false,
}) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const currentPrice = discountedPrice || unitPrice;
  const totalPrice = quantity * currentPrice;
  const originalTotal = quantity * unitPrice;
  const unitPriceDisplay = unitPrice.toFixed(2);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        fontFamily: "Futura, sans-serif",
        padding: "0",
        boxSizing: "border-box",
        gap: "clamp(8px, 3vw, 16px)",
      }}
    >
      <QuantitySelector
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        disabled={disabled}
      />
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginLeft: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          <span>x</span>
        </div>

        <span
          style={{
            textDecoration: "line-through",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          ${unitPriceDisplay}
        </span>
        <span
          style={{
            color: "#dc2626",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          ${discountedPrice ? discountedPrice.toFixed(2) : unitPriceDisplay}
        </span>

        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#111827",
            marginLeft: "auto",
          }}
        >
          ${(quantity * (discountedPrice || unitPrice)).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default QuantityPricing; 