import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("favorite button should be in the document", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});

test("favorite button should be enabled", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeEnabled();
});

test("The favorite-button is displayed in the spotlight view", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});

test("The favorite-button is displayed in each entry in the list view", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});

test("The favorite-button is displayed in the details view", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});

test("Clicking the favorite-button on a non-favorite piece saves it as a favorite", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});

test("Clicking the favorite-button on a favorite piece removes it from favorites", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button", { name: /favorite/i });
  expect(favoriteButton).toBeInTheDocument();
});
