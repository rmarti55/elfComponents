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
    <div style={{ 
        fontFamily: "Futura, sans-serif", 
        color: "#111", 
        width: "100%",
        boxSizing: "border-box" 
      }}>
      <div style={{ 
        fontWeight: 700, 
        fontSize: "clamp(18px, 5vw, 22px)", 
        marginBottom: "clamp(4px, 2vw, 8px)",
        lineHeight: 1.2
      }}>
        {productName}
      </div>
      {promoMessages.map((msg, i) => (
        <div
          key={i}
          style={{
            color: "#2a3eb1",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(13px, 4vw, 15px)",
            marginBottom: "2px",
            letterSpacing: 0.1,
            lineHeight: 1.3
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