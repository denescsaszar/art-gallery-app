import ArtPieces from "../../components/ArtPieces";

export default function favorites({ data, onToggleFavorite, artPiecesInfo }) {
  // console.log("artlist from favorites",artPiecesInfo)
  const favoritesList = artPiecesInfo.filter((element) => {
    return element.isFavorite === true}).map((element) => {return element.slug});
  // console.log("favoriteList: ", favoriteslist);
  const onlyFavs = data.filter(element=>favoritesList.includes(element.slug))
  // console.log(onlyFavourites)
  return (
    <>
    <h2>Favourites</h2>
      {onlyFavs.map((art, index) => {
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
