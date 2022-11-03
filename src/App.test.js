import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App testing", () => {
  test("First load", () => {
    //Arrange
    render(<App />);

    //Assertion
    const headerElement = screen.getByText(/new blog/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("Clicking 'NewBlog'", () => {
    //Arrange
    render(<App />);

    //Act
    const headerElement = screen.queryByText(/bitblog/i);
    const allBlogsTitle = screen.queryByText(/all blogs/i);
    const linkClick = screen.getByText(/new blog/i);
    userEvent.click(linkClick);

    //Assertion
    expect(headerElement).toBeInTheDocument();
    expect(allBlogsTitle).not.toBeInTheDocument();
  });
});
