import List from "./list";

export default function HomePage({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <List
      data={data}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
