import React from "react";
import { TertiaryCTA } from "../atoms";

interface CartItemTextBlockProps {
  productName: string;
  promoMessages: string[];
  onRemove: () => void;
}

const CartItemTextBlock: React.FC<CartItemTextBlockProps> = ({
  productName,
  promoMessages,
  onRemove,
}) => {
  return (
    <div style={{ fontFamily: "Futura, sans-serif", color: "#111", width: "100%" }}>
      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
        {productName}
      </div>
      {promoMessages.map((msg, i) => (
        <div
          key={i}
          style={{
            color: "#2a3eb1",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: 15,
            marginBottom: 2,
            letterSpacing: 0.1,
          }}
        >
          {msg}
        </div>
      ))}
      <TertiaryCTA onClick={onRemove}>Remove</TertiaryCTA>
    </div>
  );
};

export default CartItemTextBlock; 