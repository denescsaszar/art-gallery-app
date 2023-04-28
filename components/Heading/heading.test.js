import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Heading from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders Heading component", () => {
  render(<Heading />);
});
