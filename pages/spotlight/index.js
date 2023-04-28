import Spotlight from "../../components/Spotlight";

export default function Tile({ data, onToggleFavorite, artPiecesInfo }) {
  const spotlight = data[Math.floor(Math.random() * data.length)];

  return (
    <section>
      <h2>Piece Spotlight</h2>
      <Spotlight
        pieces={spotlight}
        imageScale={1100}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </section>
  );
}
