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
        gap: 20,
        fontFamily: "Futura, sans-serif",
        background: "#fff",
        padding: 12,
        borderRadius: 0,
        width: 370,
      }}
    >
      <ImageTile
        imageUrl={imageUrl}
        isFavorited={isFavorited}
        onFavoriteToggle={onFavoriteToggle}
        productName={productName}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
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