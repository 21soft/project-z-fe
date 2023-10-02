import { screen, render } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render heading 1 with 'Hello Project Z' text", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Hello Project Z",
    });

    expect(heading).toBeInTheDocument();
  });
});
