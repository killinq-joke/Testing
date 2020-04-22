const helpers = require("./project-1");

// start testing!
describe("project-1", () => {
  describe("multiplyByTen()", () => {
    it("returns the argument multiplied by 10", () => {
      expect(helpers.multiplyByTen(10)).toBe(100);
      expect(helpers.multiplyByTen(4)).toBe(40);
      expect(helpers.multiplyByTen(511)).toBe(5110);
    });
  });
  describe("subtractFive()", () => {
    it("returns the argument minus 5", () => {
      expect(helpers.subtractFive(10)).toBe(5);
      expect(helpers.subtractFive(4)).toBe(-1);
      expect(helpers.subtractFive(511)).toBe(506);
    });
  });
  describe("areSameLength()", () => {
    it("returns true if the two strings are the same length", () => {
      expect(helpers.areSameLength("cool", "abbb")).toBe(true);
      expect(helpers.areSameLength("bro", "omg")).toBe(true);
      expect(helpers.areSameLength("p", "m")).toBe(true);
    });
    it("returns false if the two strings aren't the same length", () => {
      expect(helpers.areSameLength("cool", "abbbn")).toBe(false);
      expect(helpers.areSameLength("broo", "omg")).toBe(false);
      expect(helpers.areSameLength("p", "mo")).toBe(false);
    });
  });
  describe("areEqual()", () => {
    it("returns true if both values are equal", () => {
      expect(helpers.areEqual(10, 10)).toBe(true);
      const arr = [];
      expect(helpers.areEqual(arr, arr)).toBe(true);
      expect(helpers.areEqual("truth", "truth")).toBe(true);
    });
    it("returns false if both values aren't equal", () => {
      expect(helpers.areEqual(10, "10")).toBe(false);
      expect(helpers.areEqual(4, 1)).toBe(false);
      expect(helpers.areEqual("truth", "lie")).toBe(false);
    });
  });
  describe("lessThanNinety()", () => {
    it("returns true if value is less than 90", () => {
      expect(helpers.lessThanNinety(10)).toBe(true);
      expect(helpers.lessThanNinety(4)).toBe(true);
      expect(helpers.lessThanNinety(89.9)).toBe(true);
    });
    it("returns false if value is equal or greater than 90", () => {
      expect(helpers.lessThanNinety(90)).toBe(false);
      expect(helpers.lessThanNinety(170)).toBe(false);
      expect(helpers.lessThanNinety(5119.9)).toBe(false);
    });
  });
  describe("greaterThanFifty()", () => {
    it("returns true if value is greater than 50", () => {
      expect(helpers.greaterThanFifty(50.1)).toBe(true);
      expect(helpers.greaterThanFifty(1000)).toBe(true);
      expect(helpers.greaterThanFifty(511)).toBe(true);
    });
    it("returns false if value is equal of lower than 50", () => {
      expect(helpers.greaterThanFifty(49.9)).toBe(false);
      expect(helpers.greaterThanFifty(1)).toBe(false);
      expect(helpers.greaterThanFifty(-100)).toBe(false);
    });
  });
  describe("add()", () => {
    it("returns the sum of two args", () => {
      expect(helpers.add(10, 2)).toBe(12);
      expect(helpers.add(4, -10)).toBe(-6);
      expect(helpers.add(511, 9)).toBe(520);
    });
  });
  describe("subtract()", () => {
    it("returns the difference of two args", () => {
      expect(helpers.subtract(10, 2)).toBe(8);
      expect(helpers.subtract(4, -10)).toBe(14);
      expect(helpers.subtract(511, 9)).toBe(502);
    });
  });
});
