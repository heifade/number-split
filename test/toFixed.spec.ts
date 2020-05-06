import { expect } from "chai";
import "mocha";
import { toFixed } from "../src";

describe("toFixed", function () {
  it("toFixed number ", () => {
    expect(toFixed(0, 0)).to.equal("0");
    expect(toFixed(0, 1)).to.equal("0.0");
    expect(toFixed(0, 2)).to.equal("0.00");
    expect(toFixed(0, 3)).to.equal("0.000");
    expect(toFixed(0, 4)).to.equal("0.0000");
    expect(toFixed(0, 5)).to.equal("0.00000");
    expect(toFixed(0, 6)).to.equal("0.000000");
    expect(toFixed(0, 7)).to.equal("0.0000000");
    expect(toFixed(0, 8)).to.equal("0.00000000");
    expect(toFixed(0, 9)).to.equal("0.000000000");
    expect(toFixed(0, 10)).to.equal("0.0000000000");

    expect(toFixed(0.0, 0)).to.equal("0");
    expect(toFixed(0.0, 1)).to.equal("0.0");
    expect(toFixed(0.0, 2)).to.equal("0.00");
    expect(toFixed(0.0, 3)).to.equal("0.000");
    expect(toFixed(0.0, 4)).to.equal("0.0000");
    expect(toFixed(0.0, 5)).to.equal("0.00000");

    expect(toFixed(1.0, 0)).to.equal("1");
    expect(toFixed(1.0, 1)).to.equal("1.0");
    expect(toFixed(1.0, 2)).to.equal("1.00");
    expect(toFixed(1.0, 3)).to.equal("1.000");
    expect(toFixed(1.0, 4)).to.equal("1.0000");
    expect(toFixed(1.0, 5)).to.equal("1.00000");

    expect(toFixed(10.1, 0)).to.equal("10");
    expect(toFixed(10.2, 1)).to.equal("10.2");
    expect(toFixed(10.3, 2)).to.equal("10.30");
    expect(toFixed(10.4, 3)).to.equal("10.400");
    expect(toFixed(10.5, 4)).to.equal("10.5000");
    expect(toFixed(10.6, 5)).to.equal("10.60000");
    expect(toFixed(10.6, 0)).to.equal("11");

    expect(toFixed(10.1, 0)).to.equal("10");
    expect(toFixed(11.22, 1)).to.equal("11.2");
    expect(toFixed(12.333, 2)).to.equal("12.33");
    expect(toFixed(13.4444, 3)).to.equal("13.444");
    expect(toFixed(14.55555, 4)).to.equal("14.5556");
    expect(toFixed(15.666666, 5)).to.equal("15.66667");

    expect(toFixed(-1.0, 0)).to.equal("-1");
    expect(toFixed(-1.0, 1)).to.equal("-1.0");
    expect(toFixed(-1.0, 2)).to.equal("-1.00");
    expect(toFixed(-1.0, 3)).to.equal("-1.000");
    expect(toFixed(-1.0, 4)).to.equal("-1.0000");
    expect(toFixed(-1.0, 5)).to.equal("-1.00000");

    expect(toFixed(-10.1, 0)).to.equal("-10");
    expect(toFixed(-10.2, 1)).to.equal("-10.2");
    expect(toFixed(-10.3, 2)).to.equal("-10.30");
    expect(toFixed(-10.4, 3)).to.equal("-10.400");
    expect(toFixed(-10.5, 4)).to.equal("-10.5000");
    expect(toFixed(-10.6, 5)).to.equal("-10.60000");
    expect(toFixed(-10.6, 0)).to.equal("-11");

    expect(toFixed(-10.1, 0)).to.equal("-10");
    expect(toFixed(-11.22, 1)).to.equal("-11.2");
    expect(toFixed(-12.333, 2)).to.equal("-12.33");
    expect(toFixed(-13.4444, 3)).to.equal("-13.444");
    expect(toFixed(-14.55555, 4)).to.equal("-14.5556");
    expect(toFixed(-15.666666, 5)).to.equal("-15.66667");
  });

  it("toFixed string ", () => {
    expect(toFixed("0", 0)).to.equal("0");
    expect(toFixed("0", 1)).to.equal("0.0");
    expect(toFixed("0", 2)).to.equal("0.00");
    expect(toFixed("0", 3)).to.equal("0.000");
    expect(toFixed("0", 4)).to.equal("0.0000");
    expect(toFixed("0", 5)).to.equal("0.00000");
    expect(toFixed("0", 6)).to.equal("0.000000");
    expect(toFixed("0", 7)).to.equal("0.0000000");
    expect(toFixed("0", 8)).to.equal("0.00000000");
    expect(toFixed("0", 9)).to.equal("0.000000000");
    expect(toFixed("0", 10)).to.equal("0.0000000000");

    expect(toFixed("0.0", 0)).to.equal("0");
    expect(toFixed("0.0", 1)).to.equal("0.0");
    expect(toFixed("0.0", 2)).to.equal("0.00");
    expect(toFixed("0.0", 3)).to.equal("0.000");
    expect(toFixed("0.0", 4)).to.equal("0.0000");
    expect(toFixed("0.0", 5)).to.equal("0.00000");

    expect(toFixed("1.0", 0)).to.equal("1");
    expect(toFixed("1.0", 1)).to.equal("1.0");
    expect(toFixed("1.0", 2)).to.equal("1.00");
    expect(toFixed("1.0", 3)).to.equal("1.000");
    expect(toFixed("1.0", 4)).to.equal("1.0000");
    expect(toFixed("1.0", 5)).to.equal("1.00000");

    expect(toFixed("10.1", 0)).to.equal("10");
    expect(toFixed("10.2", 1)).to.equal("10.2");
    expect(toFixed("10.3", 2)).to.equal("10.30");
    expect(toFixed("10.4", 3)).to.equal("10.400");
    expect(toFixed("10.5", 4)).to.equal("10.5000");
    expect(toFixed("10.6", 5)).to.equal("10.60000");
    expect(toFixed("10.6", 0)).to.equal("11");

    expect(toFixed("10.1", 0)).to.equal("10");
    expect(toFixed("11.22", 1)).to.equal("11.2");
    expect(toFixed("12.333", 2)).to.equal("12.33");
    expect(toFixed("13.4444", 3)).to.equal("13.444");
    expect(toFixed("14.55555", 4)).to.equal("14.5556");
    expect(toFixed("15.666666", 5)).to.equal("15.66667");

    expect(toFixed("-1.0", 0)).to.equal("-1");
    expect(toFixed("-1.0", 1)).to.equal("-1.0");
    expect(toFixed("-1.0", 2)).to.equal("-1.00");
    expect(toFixed("-1.0", 3)).to.equal("-1.000");
    expect(toFixed("-1.0", 4)).to.equal("-1.0000");
    expect(toFixed("-1.0", 5)).to.equal("-1.00000");

    expect(toFixed("-10.1", 0)).to.equal("-10");
    expect(toFixed("-10.2", 1)).to.equal("-10.2");
    expect(toFixed("-10.3", 2)).to.equal("-10.30");
    expect(toFixed("-10.4", 3)).to.equal("-10.400");
    expect(toFixed("-10.5", 4)).to.equal("-10.5000");
    expect(toFixed("-10.6", 5)).to.equal("-10.60000");
    expect(toFixed("-10.6", 0)).to.equal("-11");

    expect(toFixed("-10.1", 0)).to.equal("-10");
    expect(toFixed("-11.22", 1)).to.equal("-11.2");
    expect(toFixed("-12.333", 2)).to.equal("-12.33");
    expect(toFixed("-13.4444", 3)).to.equal("-13.444");
    expect(toFixed("-14.55555", 4)).to.equal("-14.5556");
    expect(toFixed("-15.666666", 5)).to.equal("-15.66667");
  });

  it("toFixed other ", () => {
    expect(toFixed(null, 0)).to.equal("0");
    expect(toFixed(undefined, 0)).to.equal("0");

    expect(toFixed(null, 1)).to.equal("0.0");
    expect(toFixed(undefined, 1)).to.equal("0.0");

    expect(toFixed(0)).to.equal("0.00");

    expect(toFixed(true as any)).to.equal("0.00");
    expect(toFixed(false as any)).to.equal("0.00");

    expect(toFixed("abc")).to.equal("0.00");
    expect(toFixed("123.11abc")).to.equal("0.00");
    expect(toFixed("0..1")).to.equal("0.00");
  });
});
