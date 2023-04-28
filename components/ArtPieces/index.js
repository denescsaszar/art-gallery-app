import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../Favorite";

export default function ArtPieces({ pieces, imageScale, onToggleFavorite, artPiecesInfo }) {
  
  const imageWidthRatio = pieces.dimensions.height / imageScale;
  return (
    <>
      <div className="artList__artwork">
        <Link href={`/art-pieces/${pieces.slug}`}>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={pieces.dimensions.width / imageWidthRatio}
            height={imageScale}
            
          />
        </Link>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={pieces.slug}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
      <div className="artList__information">
        <p className="artList__information__art">
          Name of artwork:&nbsp;<em>{pieces.name}</em>
        </p>
        <p className="artList__information__artist">
          Artist:&nbsp;<em>{pieces.artist}</em>
        </p>
      </div>
    </>
  );
}
