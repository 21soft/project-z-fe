import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthLayout } from "..";

describe("auth layout", () => {
  beforeEach(() => {
    render(
      <AuthLayout src="/" alt="alternate image text">
        <h1>test title</h1>
      </AuthLayout>
    );
  });

  it("should have image banner", () => {
    const imageBanner = screen.getByRole("img", { name: "banner" });
    expect(imageBanner).toBeInTheDocument();
    expect(imageBanner).toHaveAttribute("alt", "alternate image text");
  });

  it("should have ornament on banner", () => {
    const ornamentIcon = screen.getByRole("ornament-icon");
    expect(ornamentIcon).toBeInTheDocument();
  });

  it("should have heading 1 parsing on children props", () => {
    const headingText = screen.getByRole("heading", {
      level: 1,
      name: "test title",
    });
    expect(headingText).toBeInTheDocument();
  });
});
