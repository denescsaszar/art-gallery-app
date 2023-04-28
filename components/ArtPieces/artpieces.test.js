import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieces from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("All art pieces are displayed as a list", () => {
  const data = [
    {
      name: "The Starry Night",
      artist: "Vincent van Gogh",
      imageSource: "/images/the-starry-night.jpg",
      slug: "the-starry-night",
      dimensions: {
        width: 73.7,
        height: 92.1,
      },
      isFavorite: false,
    },
    {
      name: "The Scream",
      artist: "Edvard Munch",
      imageSource: "/images/the-scream.jpg",
      slug: "the-scream",
      dimensions: {
        width: 91,
        height: 73.5,
      },
      isFavorite: false,
    },
  ];
  const onToggleFavorite = jest.fn();
  const artPiecesInfo = true;

  render(
    <ArtPieces
      pieces={data}
      imageScale={250}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );

  const sections = screen.getAllByRole("listitem");
  expect(sections).toHaveLength(2);
});
