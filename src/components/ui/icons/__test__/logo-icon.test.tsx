import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogoIcon } from "..";

describe("Logo Icon", () => {
  it("should render correctly if not parsing height and width props", () => {
    render(<LogoIcon />);
  });

  it("should render correctly if parsing height and width props", () => {
    render(<LogoIcon width={23} height={22} />);
  });
});
