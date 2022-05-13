const { expect } = require("chai");
const { polybius } = require("../src/polybius");

  describe("Test polybius function", () => {

    it("should return true if function exists", () => {
      const actual = typeof polybius === "function";

      expect(actual).to.be.true;
    });

    it("should encode a message by translating each letter to number pairs", () => {
      const inputString = "this is my test";
      const actual = polybius(inputString, true);
      const expected = "44324234 4234 2345 44513444";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by translating each pair of numbers into a letter", () => {
      const inputString = "44324234 4234 2345 44513444";
      const actual = polybius(inputString, false);
      const expected = "th(i/j)s (i/j)s my test";

      expect(actual).to.equal(expected);
    });

  });


