import { renderComponent, expect } from "../test_helper";

import Header from "../../client/components/Header.js";

describe("Header", () => {
  let component;
  before(() => {
    component = renderComponent(Header);
  });

  it("shows the correct Heading", () => {
    expect(component).to.contain("StockTwits");
  });
});
