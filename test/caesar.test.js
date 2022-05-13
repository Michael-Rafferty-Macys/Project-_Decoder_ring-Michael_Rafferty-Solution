const { expect } = require("chai");
const { caesar } = require("../src/caesar");

  describe("Test caesar function", () => {

    it("should return true if function exists", () => {
      const actual = typeof caesar === "function";

      expect(actual).to.be.true;
    });

    it("should return false if the shift = 0", () => {
      const inputString = "this is my test";
      const shift = 0;
      const actual = caesar(inputString, shift, true);

      expect(actual).to.be.false;
    });

    it("should return false if the shift > 25", () => {
      const inputString = "this is my test";
      const shift = 30;
      const actual = caesar(inputString, shift, true);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const inputString = "this is my test";
      const shift = -30;
      const actual = caesar(inputString, shift, true);

      expect(actual).to.be.false;
    });

     it("should encode the input string by shifting the letters by +3", () => {
      const inputString = "this is my test";
      const shift = 3;
      const actual = caesar(inputString, shift, true);
      const expected = "wklv lv pb whvw";

      expect(actual).to.equal(expected);
    });

     it("should encode the input string by shifting the letters by -3", () => {
      const inputString = "this is my test";
      const shift = -3;
      const actual = caesar(inputString, shift, true);
      const expected = "qefp fp jv qbpq";

      expect(actual).to.equal(expected);
    });

     it("should decode the input string by shifting the letters by +3", () => {
      const inputString = "wklv lv pb whvw";
      const shift = 3;
      const actual = caesar(inputString, shift, false);
      const expected = "this is my test";

      expect(actual).to.equal(expected);
    });

     it("should decode the input string by shifting the letters by -3", () => {
      const inputString = "qefp fp jv qbpq";
      const shift = -3;
      const actual = caesar(inputString, shift, false);
      const expected = "this is my test";

      expect(actual).to.equal(expected);
    });

  });
