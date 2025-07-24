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
        alignItems: "flex-start",
        gap: 16,
        fontFamily: "Futura, sans-serif",
        background: "#fff",
        padding: 20,
        borderRadius: 0,
        width: 600,
        minHeight: 120,
      }}
    >
      <div style={{ width: 120, height: 120, flex: 'none', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <ImageTile
          imageUrl={imageUrl}
          isFavorited={isFavorited}
          onFavoriteToggle={onFavoriteToggle}
          productName={productName}
        />
      </div>
      <div style={{ flex: 1, maxWidth: 340, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, minWidth: 0 }}>
        <CartItemTextBlock
          productName={productName}
          promoMessages={promoMessages}
          onRemove={onRemove}
        />
        <div style={{ marginTop: 8, width: '100%' }}>
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