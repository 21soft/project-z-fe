import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GoogleIcon } from "..";

describe("Google Icon", () => {
  it("should render correctly if not parsing height and width props", () => {
    render(<GoogleIcon />);
  });

  it("should render correctly if parsing height and width props", () => {
    render(<GoogleIcon width={23} height={22} />);
  });
});
