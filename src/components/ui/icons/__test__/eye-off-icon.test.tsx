import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EyeOffIcon } from "..";

describe("Eye Off Icon", () => {
  it("should render correctly if not parsing height and width props", () => {
    render(<EyeOffIcon />);
  });

  it("should render correctly if parsing height and width props", () => {
    render(<EyeOffIcon width={23} height={22} />);
  });
});
