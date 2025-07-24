import React from "react";
import { Heart } from "lucide-react";

interface ImageTileProps {
  imageUrl: string;
  isFavorited: boolean;
  onFavoriteToggle: () => void;
  productName: string;
}

const ImageTile: React.FC<ImageTileProps> = ({
  imageUrl,
  isFavorited,
  onFavoriteToggle,
  productName,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={onFavoriteToggle}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "white",
          border: "none",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease",
        }}
        aria-label={`${isFavorited ? 'Remove' : 'Add'} ${productName} to favorites`}
      >
        <Heart
          size={18}
          fill={isFavorited ? "#dc2626" : "transparent"}
          color={isFavorited ? "#dc2626" : "#6b7280"}
          style={{
            transition: "all 0.2s ease",
          }}
        />
      </button>
    </div>
  );
};

export default ImageTile; 