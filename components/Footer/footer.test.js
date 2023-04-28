import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders Footer component", () => {
  render(<Footer />);
});
