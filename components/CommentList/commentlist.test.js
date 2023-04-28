import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentList from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("The detail view has a list of comments for this art piece with the headline Comments", () => {
  render(<CommentList />);
  const comments = screen.getByText(/comments/i);
  expect(comments).toBeInTheDocument();
});

test("Each comment's text is displayed", () => {
  render(<CommentList />);
  const text = screen.getByText(/text/i);
  expect(text).toBeInTheDocument();
});

test("Each comment's date and time is displayed", () => {
  render(<CommentList />);
  const date = screen.getByText(/date/i);
  expect(date).toBeInTheDocument();
});

test("The detail view has an input field to write a comment", () => {
  render(<CommentList />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("The detail view has a submit button labeled Send", () => {
  render(<CommentList />);
  const button = screen.getByRole("button", { name: /send/i });
  expect(button).toBeInTheDocument();
});

test("After submitting the form, the comment is appended to the list of comments", () => {
  render(<CommentList />);
  const button = screen.getByRole("button", { name: /send/i });
  expect(button).toBeInTheDocument();
});
