import { expect } from "chai";
import "mocha";
import { numberSplit } from "../src/numberSplit";

describe("numberSplit", function () {
  it("numberSplit >=0 ", () => {
    expect(numberSplit("0", 3)).to.equal("0");
    expect(numberSplit("1", 3)).to.equal("1");
    expect(numberSplit("12", 3)).to.equal("12");
    expect(numberSplit("123", 3)).to.equal("123");
    expect(numberSplit("1234", 3)).to.equal("1,234");
    expect(numberSplit("12345", 3)).to.equal("12,345");

    expect(numberSplit("123456", 3)).to.equal("123,456");
    expect(numberSplit("1234567", 3)).to.equal("1,234,567");
    expect(numberSplit("12345678", 3)).to.equal("12,345,678");
    expect(numberSplit("123456789", 3)).to.equal("123,456,789");
    expect(numberSplit("1234567890", 3)).to.equal("1,234,567,890");
    expect(numberSplit("1234567890", 4)).to.equal("12,3456,7890");

    expect(numberSplit("0.1", 3)).to.equal("0.1");
    expect(numberSplit("0.12", 3)).to.equal("0.12");
    expect(numberSplit("0.123", 3)).to.equal("0.123");
    expect(numberSplit("0.1234", 3)).to.equal("0.123,4");
    expect(numberSplit("0.12345", 3)).to.equal("0.123,45");
    expect(numberSplit("0.123456", 3)).to.equal("0.123,456");
    expect(numberSplit("0.1234567", 3)).to.equal("0.123,456,7");
    expect(numberSplit("0.12345678", 3)).to.equal("0.123,456,78");
    expect(numberSplit("0.123456789", 3)).to.equal("0.123,456,789");
    expect(numberSplit("0.123456789", 4)).to.equal("0.1234,5678,9");

    expect(numberSplit("12.123456789", 3)).to.equal("12.123,456,789");
    expect(numberSplit("123.123456789", 3)).to.equal("123.123,456,789");
    expect(numberSplit("1234.123456789", 3)).to.equal("1,234.123,456,789");
    expect(numberSplit("12345.123456789", 3)).to.equal("12,345.123,456,789");
    expect(numberSplit("123456.123456789", 3)).to.equal("123,456.123,456,789");
    expect(numberSplit("1234567.123456789", 3)).to.equal("1,234,567.123,456,789");
    expect(numberSplit("12345678.123456789", 3)).to.equal("12,345,678.123,456,789");
    expect(numberSplit("123456789.123456789", 3)).to.equal("123,456,789.123,456,789");
    expect(numberSplit("1234567890.123456789", 3)).to.equal("1,234,567,890.123,456,789");
    expect(numberSplit("1234567890.123456789")).to.equal("1,234,567,890.123,456,789");
    expect(numberSplit("1234567890.123456789", 4)).to.equal("12,3456,7890.1234,5678,9");

    expect(numberSplit(0, 3)).to.equal("0");
    expect(numberSplit(1, 3)).to.equal("1");
    expect(numberSplit(12, 3)).to.equal("12");
    expect(numberSplit(123, 3)).to.equal("123");
    expect(numberSplit(1234, 3)).to.equal("1,234");
    expect(numberSplit(12345, 3)).to.equal("12,345");

    expect(numberSplit(123456, 3)).to.equal("123,456");
    expect(numberSplit(1234567, 3)).to.equal("1,234,567");
    expect(numberSplit(12345678, 3)).to.equal("12,345,678");
    expect(numberSplit(123456789, 3)).to.equal("123,456,789");
    expect(numberSplit(1234567890, 3)).to.equal("1,234,567,890");
    expect(numberSplit(1234567890, 4)).to.equal("12,3456,7890");

    expect(numberSplit(0.1, 3)).to.equal("0.1");
    expect(numberSplit(0.12, 3)).to.equal("0.12");
    expect(numberSplit(0.123, 3)).to.equal("0.123");
    expect(numberSplit(0.1234, 3)).to.equal("0.123,4");
    expect(numberSplit(0.12345, 3)).to.equal("0.123,45");
    expect(numberSplit(0.123456, 3)).to.equal("0.123,456");
    expect(numberSplit(0.1234567, 3)).to.equal("0.123,456,7");
    expect(numberSplit(0.12345678, 3)).to.equal("0.123,456,78");
    expect(numberSplit(0.123456789, 3)).to.equal("0.123,456,789");
    expect(numberSplit(0.123456789, 4)).to.equal("0.1234,5678,9");

    expect(numberSplit(12.123456789, 3)).to.equal("12.123,456,789");
    expect(numberSplit(123.123456789, 3)).to.equal("123.123,456,789");
    expect(numberSplit(1234.123456789, 3)).to.equal("1,234.123,456,789");
    expect(numberSplit(12345.123456789, 3)).to.equal("12,345.123,456,789");
    expect(numberSplit(123456.123456789, 3)).to.equal("123,456.123,456,789");
    expect(numberSplit(1234567.123456789, 3)).to.equal("1,234,567.123,456,789");
    expect(numberSplit(1234567.123456789)).to.equal("1,234,567.123,456,789");

    expect(numberSplit(1234567.123456789, 4)).to.equal("123,4567.1234,5678,9");
  });

  it("numberSplit < 0 ", () => {
    expect(numberSplit("-0", 3)).to.equal("0");
    expect(numberSplit("-1", 3)).to.equal("-1");
    expect(numberSplit("-12", 3)).to.equal("-12");
    expect(numberSplit("-123", 3)).to.equal("-123");
    expect(numberSplit("-1234", 3)).to.equal("-1,234");
    expect(numberSplit("-12345", 3)).to.equal("-12,345");

    expect(numberSplit("-123456", 3)).to.equal("-123,456");
    expect(numberSplit("-1234567", 3)).to.equal("-1,234,567");
    expect(numberSplit("-12345678", 3)).to.equal("-12,345,678");
    expect(numberSplit("-123456789", 3)).to.equal("-123,456,789");
    expect(numberSplit("-1234567890", 3)).to.equal("-1,234,567,890");
    expect(numberSplit("-1234567890", 4)).to.equal("-12,3456,7890");

    expect(numberSplit("-0.1", 3)).to.equal("-0.1");
    expect(numberSplit("-0.12", 3)).to.equal("-0.12");
    expect(numberSplit("-0.123", 3)).to.equal("-0.123");
    expect(numberSplit("-0.1234", 3)).to.equal("-0.123,4");
    expect(numberSplit("-0.12345", 3)).to.equal("-0.123,45");
    expect(numberSplit("-0.123456", 3)).to.equal("-0.123,456");
    expect(numberSplit("-0.1234567", 3)).to.equal("-0.123,456,7");
    expect(numberSplit("-0.12345678", 3)).to.equal("-0.123,456,78");
    expect(numberSplit("-0.123456789", 3)).to.equal("-0.123,456,789");

    expect(numberSplit("-12.123456789", 3)).to.equal("-12.123,456,789");
    expect(numberSplit("-123.123456789", 3)).to.equal("-123.123,456,789");
    expect(numberSplit("-1234.123456789", 3)).to.equal("-1,234.123,456,789");
    expect(numberSplit("-12345.123456789", 3)).to.equal("-12,345.123,456,789");
    expect(numberSplit("-123456.123456789", 3)).to.equal("-123,456.123,456,789");
    expect(numberSplit("-1234567.123456789", 3)).to.equal("-1,234,567.123,456,789");
    expect(numberSplit("-12345678.123456789", 3)).to.equal("-12,345,678.123,456,789");
    expect(numberSplit("-123456789.123456789", 3)).to.equal("-123,456,789.123,456,789");
    expect(numberSplit("-1234567890.123456789", 3)).to.equal("-1,234,567,890.123,456,789");
    expect(numberSplit("-1234567890.123456789")).to.equal("-1,234,567,890.123,456,789");
    expect(numberSplit("-1234567890.123456789", 4)).to.equal("-12,3456,7890.1234,5678,9");

    expect(numberSplit(-0, 3)).to.equal("0");
    expect(numberSplit(-1, 3)).to.equal("-1");
    expect(numberSplit(-12, 3)).to.equal("-12");
    expect(numberSplit(-123, 3)).to.equal("-123");
    expect(numberSplit(-1234, 3)).to.equal("-1,234");
    expect(numberSplit(-12345, 3)).to.equal("-12,345");

    expect(numberSplit(-123456, 3)).to.equal("-123,456");
    expect(numberSplit(-1234567, 3)).to.equal("-1,234,567");
    expect(numberSplit(-12345678, 3)).to.equal("-12,345,678");
    expect(numberSplit(-123456789, 3)).to.equal("-123,456,789");
    expect(numberSplit(-1234567890, 3)).to.equal("-1,234,567,890");

    expect(numberSplit(-0.1, 3)).to.equal("-0.1");
    expect(numberSplit(-0.12, 3)).to.equal("-0.12");
    expect(numberSplit(-0.123, 3)).to.equal("-0.123");
    expect(numberSplit(-0.1234, 3)).to.equal("-0.123,4");
    expect(numberSplit(-0.12345, 3)).to.equal("-0.123,45");
    expect(numberSplit(-0.123456, 3)).to.equal("-0.123,456");
    expect(numberSplit(-0.1234567, 3)).to.equal("-0.123,456,7");
    expect(numberSplit(-0.12345678, 3)).to.equal("-0.123,456,78");
    expect(numberSplit(-0.123456789, 3)).to.equal("-0.123,456,789");

    expect(numberSplit(-12.123456789, 3)).to.equal("-12.123,456,789");
    expect(numberSplit(-123.123456789, 3)).to.equal("-123.123,456,789");
    expect(numberSplit(-1234.123456789, 3)).to.equal("-1,234.123,456,789");
    expect(numberSplit(-12345.123456789, 3)).to.equal("-12,345.123,456,789");
    expect(numberSplit(-123456.123456789, 3)).to.equal("-123,456.123,456,789");
    expect(numberSplit(-1234567.123456789, 3)).to.equal("-1,234,567.123,456,789");
    expect(numberSplit(-1234567.123456789)).to.equal("-1,234,567.123,456,789");

    expect(numberSplit(-1234567.123456789, 4)).to.equal("-123,4567.1234,5678,9");
  });

  it("other", () => {
    expect(numberSplit(undefined, 0)).to.equal("0");
    expect(numberSplit(null, 0)).to.equal("0");
    expect(numberSplit("", 0)).to.equal("0");
    expect(numberSplit("100", 0)).to.equal("100");
  });
});
