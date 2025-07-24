import React from "react";
import { ImageTile } from "../molecules";
import { CartItemTextBlock, QuantityPricing } from "../molecules";

interface SimpleCartItemTileProps {
  imageUrl: string;
  isFavorited: boolean;
  onFavoriteToggle: () => void;
  productName: string;
  promoMessages: string[];
  onRemove: () => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  unitPrice: number;
  discountedPrice?: number;
}

const SimpleCartItemTile: React.FC<SimpleCartItemTileProps> = ({
  imageUrl,
  isFavorited,
  onFavoriteToggle,
  productName,
  promoMessages,
  onRemove,
  quantity,
  onQuantityChange,
  unitPrice,
  discountedPrice,
}) => {
  return (
    <div
      style={{
        fontFamily: "Futura, sans-serif",
        background: "#fff",
        padding: 16,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 3%, 16px)" }}>
        <div style={{ 
          width: "clamp(100px, 30%, 140px)", 
          height: "clamp(100px, 30%, 140px)", 
          flex: 'none', 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'center', 
          position: 'relative', 
          overflow: 'hidden', 
          borderRadius: "8px",
        }}>
          <ImageTile
            imageUrl={imageUrl}
            isFavorited={isFavorited}
            onFavoriteToggle={onFavoriteToggle}
            productName={productName}
          />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, minWidth: 0 }}>
          <CartItemTextBlock
            productName={productName}
            promoMessages={promoMessages}
            onRemove={onRemove}
          />
        </div>
      </div>
      <div style={{ width: '100%', marginTop: 8 }}>
        <QuantityPricing
          quantity={quantity}
          unitPrice={unitPrice}
          discountedPrice={discountedPrice}
          onQuantityChange={onQuantityChange}
        />
      </div>
    </div>
  );
};

export default SimpleCartItemTile; 