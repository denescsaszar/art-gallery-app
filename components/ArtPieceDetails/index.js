import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../Favorite";
import Comment from "../Comment";
import CommentList from "../CommentList";

export default function ArtPieceDetails({
  currentArt,
  artPiecesInfo,
  onToggleFavorite,
  handleCommentSubmit,
}) {
  const router = useRouter();

  return (
    <>
      <h2>Art Details</h2>
      <section>
        <section>
          <button onClick={() => router.back()}>Go Back</button>
          <button onClick={() => router.push("/list")}>Go to List</button>
        </section>
        <div className="artPieceDetails__artwork" style={{ display: "flex" }}>
          <Image
            src={currentArt.imageSource}
            alt={currentArt.name}
            width={currentArt.dimensions.width / 4}
            height={currentArt.dimensions.height / 4}
          />
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            slug={currentArt.slug}
            artPiecesInfo={artPiecesInfo}
          />
          <div>
            {/* {console.log(currentArt.colors)} */}
            {currentArt.colors.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: "50px",
                    height: "50px",
                    priority: true,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="artPieceDetails__information">
          <h4>
            Name of artwork:&nbsp;<em>{currentArt.name}</em>
          </h4>
          <h4>
            Artist:&nbsp;<em>{currentArt.artist}</em>
          </h4>
          <h4>
            Year:&nbsp;<em>{currentArt.year}</em>
          </h4>
          <h4>
            Genre:&nbsp;<em>{currentArt.genre}</em>
          </h4>
        </div>

        <section>
          <h3>Thoughts & Feelings</h3>
          <Comment
            slug={currentArt.slug}
            handleCommentSubmit={handleCommentSubmit}
          />
          <CommentList 
          slug={currentArt.slug}
          artPiecesInfo={artPiecesInfo}
          />
        </section>
      </section>
    </>
  );
}
