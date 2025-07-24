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
        display: "flex",
        alignItems: "center",
        gap: 24,
        fontFamily: "Futura, sans-serif",
        background: "#fff",
        padding: 16,
        borderRadius: 0,
        width: 520,
        minHeight: 120,
      }}
    >
      <div style={{ width: 120, height: 120, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImageTile
          imageUrl={imageUrl}
          isFavorited={isFavorited}
          onFavoriteToggle={onFavoriteToggle}
          productName={productName}
        />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, minWidth: 0, height: 120 }}>
        <CartItemTextBlock
          productName={productName}
          promoMessages={promoMessages}
          onRemove={onRemove}
        />
        <div style={{ marginTop: 16 }}>
          <QuantityPricing
            quantity={quantity}
            unitPrice={unitPrice}
            discountedPrice={discountedPrice}
            onQuantityChange={onQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleCartItemTile; 