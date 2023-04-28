import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import Comment from "../../components/Comment";

export default function ArtPieceDetail({
  data,
  onToggleFavorite,
  artPiecesInfo,
  handleCommentSubmit,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  const currentIndex = data.indexOf(currentArt);
  return (
    <>
      <ArtPieceDetails
        currentArt={currentArt}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
}
