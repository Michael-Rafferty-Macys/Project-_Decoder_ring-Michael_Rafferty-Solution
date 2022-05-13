const { expect } = require("chai");
const { substitution } = require("../src/substitution");

  describe("Test substitution function", () => {

    it("should return true if function exists", () => {
      const actual = typeof substitution === "function";

      expect(actual).to.be.true;
    });

    it("should return false if the alphabet is missing", () => {
      const inputString = "this is my test";
      const actual = substitution(inputString);
      expect(actual).to.be.false;
    });

    it("should return false if the alphabet is not 26 characters", () => {
      const inputString = "this is my test";
      const alphabet = "missing";
      const actual = substitution(inputString, alphabet, true);
      expect(actual).to.be.false;
    });

    it("should return false if the alphabet has duplicate characters", () => {
      const inputString = "this is my test";
      const alphabet = "(mississippi-mississippi)!";
      const actual = substitution(inputString, alphabet, true);
      expect(actual).to.be.false;
    });

    it("should encode a message by using the alphabet", () => {
      const inputString = "this is my test";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(inputString, alphabet, true);
      const expected = "djbr br ya dkrd";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by using the alphabet", () => {
      const inputString = "djbr br ya dkrd";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(inputString, alphabet, false);
      const expected = "this is my test";

      expect(actual).to.equal(expected);
    });

    it("should encode a message by using the special character alphabet", () => {
      const inputString = "this is my test";
      const alphabet = "0123456789;:!@#$%&()-+=?.,";
      const actual = substitution(inputString, alphabet, true);
      const expected = ")78( 8( !. )4()";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by using the special character alphabet", () => {
      const inputString = ")78( 8( !. )4()";
      const alphabet = "0123456789;:!@#$%&()-+=?.,";
      const actual = substitution(inputString, alphabet, false);
      const expected = "this is my test";

      expect(actual).to.equal(expected);
    });

  });
