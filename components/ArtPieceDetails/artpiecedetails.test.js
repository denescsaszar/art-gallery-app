import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieceDetails from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("Each art piece's image is displayed", () => {
  render(<ArtPieceDetails />);
  const image = screen.getByAltText(/art piece/i);
  expect(image).toBeInTheDocument();
});

test("Each art piece's title is displayed", () => {
  render(<ArtPieceDetails />);
  const title = screen.getByText(/title/i);
  expect(title).toBeInTheDocument();
});

test("Each art piece's artist is displayed", () => {
  render(<ArtPieceDetails />);
  const artist = screen.getByText(/artist/i);
  expect(artist).toBeInTheDocument();
});

test("Each art piece's year is displayed", () => {
  render(<ArtPieceDetails />);
  const year = screen.getByText(/year/i);
  expect(year).toBeInTheDocument();
});

test("the art piece genre is displayed", () => {
  render(<ArtPieceDetails />);
  const genre = screen.getByText(/genre/i);
  expect(genre).toBeInTheDocument();
});

test("A back-button is displayed", () => {
  render(<ArtPieceDetails />);
  const back = screen.getByText(/back/i);
  expect(back).toBeInTheDocument();
});

test("Pass the `colors` given by the API to the `ArtPieceDetails` component", () => {
  render(<ArtPieceDetails />);
  const colors = screen.getByText(/colors/i);
  expect(colors).toBeInTheDocument();
});
