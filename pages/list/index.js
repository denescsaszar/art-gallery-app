import ArtPieces from "../../components/ArtPieces";

export default function List({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
    <h2>Piece List</h2>
      {data.map((art, index) => {
        return (
          <section key={index}>
            <ArtPieces
              pieces={art}
              imageScale={250}
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </section>
        );
      })}
    </>
  );
}
