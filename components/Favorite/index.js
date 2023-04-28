import Image from "next/image";
import MeHearty from "../Heart/Heart";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const currentPiece = artPiecesInfo.find((current)=>current.slug === slug)
  const isFavorite = currentPiece ? currentPiece.isFavorite : false
  
  return (
    <button
      onClick={() => {
        onToggleFavorite(slug);
      }}
      style={{ background: "none", border: "none", cursor: "alias" }}
    >
      <MeHearty isFavorite={isFavorite} />
      <Image
        src="/heart.svg"
        alt="Favorite"
        width={20}
        height={20}
        className="favorite-icon"
        style={{visibility: "hidden"}}
      />
    </button>
  );
}
