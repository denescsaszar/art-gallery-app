import Image from "next/image";
import FavoriteButton from "../Favorite";
import { useRouter } from "next/router";

export default function Spotlight({
  pieces,
  imageScale,
  artPiecesInfo,
  onToggleFavorite,
  
}) {
  const router = useRouter();
  const imageWidthRatio = pieces.dimensions.height / imageScale;
  return (
    <>
      <div className="artList__artwork">
        <Image
          src={pieces.imageSource}
          alt={pieces.name}
          width={pieces.dimensions.width / imageWidthRatio}
          height={imageScale}
          onClick={() => {
            router.push(`/art-pieces/${pieces.slug}`);
          }}
        />
      
      </div>
      <div className="artList__information">
        <h3 className="artList__information__artist">
          Artist:&nbsp;<em>{pieces.artist}</em>
        </h3>
      </div>
    </>
  );
}
