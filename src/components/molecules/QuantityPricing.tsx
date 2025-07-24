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
        padding: "0 16px",
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
          gap: "16px",
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

        {discountedPrice && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
            }}
          >
            <span
              style={{
                textDecoration: "line-through",
                color: "#9ca3af",
              }}
            >
              ${unitPriceDisplay}
            </span>
            <span
              style={{
                color: "#dc2626",
                fontWeight: "500",
              }}
            >
              ${discountedPrice ? discountedPrice.toFixed(2) : unitPriceDisplay}
            </span>
          </div>
        )}

        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          ${(quantity * (discountedPrice || unitPrice)).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default QuantityPricing; 