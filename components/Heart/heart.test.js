import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MeHearty from "./Heart";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("MeHearty component contains an SVG", () => {
  render(<MeHearty />);
  const svgElement = screen.getByTestId("heart-svg");
  expect(svgElement).toBeInTheDocument();
});
