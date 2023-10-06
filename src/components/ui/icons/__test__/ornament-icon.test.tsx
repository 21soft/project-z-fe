import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrnamentIcon } from "..";

describe("Logo Icon", () => {
  it("should render correctly if not parsing height and width props", () => {
    render(<OrnamentIcon />);
  });

  it("should render correctly if parsing height and width props", () => {
    render(<OrnamentIcon className="absolute" />);
  });
});
