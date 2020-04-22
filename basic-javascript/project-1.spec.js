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
  describe("divide()", () => {
    it("returns the division of two args", () => {
      expect(helpers.divide(10, 2)).toBe(5);
      expect(helpers.divide(4, -10)).toBe(-0.4);
      expect(helpers.divide(100, 1)).toBe(100);
    });
  });
  describe("multiply()", () => {
    it("returns the product of two args", () => {
      expect(helpers.multiply(10, 2)).toBe(20);
      expect(helpers.multiply(4, -10)).toBe(-40);
      expect(helpers.multiply(100, 1)).toBe(100);
    });
  });
  describe("getRemainder()", () => {
    it("returns the remainder of two args", () => {
      expect(helpers.getRemainder(10, 2)).toBe(0);
      expect(helpers.getRemainder(4, -10)).toBe(4);
      expect(helpers.getRemainder(100, 9)).toBe(1);
    });
  });
  describe("isEven()", () => {
    it("returns true if arg is even", () => {
      expect(helpers.isEven(10)).toBe(true);
      expect(helpers.isEven(4)).toBe(true);
      expect(helpers.isEven(512)).toBe(true);
    });
    it("returns false if arg isn't even", () => {
      expect(helpers.isEven(11)).toBe(false);
      expect(helpers.isEven(1)).toBe(false);
      expect(helpers.isEven(512.1)).toBe(false);
    });
  });
  describe("isOdd()", () => {
    it("returns true if arg is odd", () => {
      expect(helpers.isOdd(11)).toBe(true);
      expect(helpers.isOdd(5)).toBe(true);
      expect(helpers.isOdd(513)).toBe(true);
    });
    it("returns false if arg is even", () => {
      expect(helpers.isOdd(10)).toBe(false);
      expect(helpers.isOdd(4)).toBe(false);
      expect(helpers.isOdd(512)).toBe(false);
    });
  });
  describe("square()", () => {
    it("returns arg squared", () => {
      expect(helpers.square(10)).toBe(100);
      expect(helpers.square(4)).toBe(16);
      expect(helpers.square(100)).toBe(10000);
    });
  });
  describe("cube()", () => {
    it("returns num cubed", () => {
      expect(helpers.cube(10)).toBe(1000);
      expect(helpers.cube(4)).toBe(64);
      expect(helpers.cube(100)).toBe(1000000);
    });
  });
  describe("raiseToPower()", () => {
    it("returns num raised to exponent", () => {
      expect(helpers.raiseToPower(10, 2)).toBe(100);
      expect(helpers.raiseToPower(4, 4)).toBe(256);
      expect(helpers.raiseToPower(0, 0)).toBe(1);
    });
  });
  describe("roundNumber()", () => {
    it("returns num rounded up", () => {
      expect(helpers.roundNumber(10.5)).toBe(11);
      expect(helpers.roundNumber(4.1)).toBe(4);
      expect(helpers.roundNumber(0.49999)).toBe(0);
    });
  });
  describe("roundUp()", () => {
    it("returns num rounded up", () => {
      expect(helpers.roundUp(10.5)).toBe(11);
      expect(helpers.roundUp(4.1)).toBe(5);
      expect(helpers.roundUp(0.49999)).toBe(1);
    });
  });
  describe("addExclamationPoint()", () => {
    it("returns the str with ! at the end", () => {
      expect(helpers.addExclamationPoint("hello")).toBe("hello!");
      expect(helpers.addExclamationPoint("brotha")).toBe("brotha!");
      expect(helpers.addExclamationPoint("stop")).toBe("stop!");
    });
  });
  describe("combineNames()", () => {
    it("returns the firstname & lastname", () => {
      expect(helpers.combineNames("zak", "touzri")).toBe("zak touzri");
      expect(helpers.combineNames("sam", "ovens")).toBe("sam ovens");
      expect(helpers.combineNames("nathan", "drake")).toBe("nathan drake");
    });
  });
  describe("getGreeting()", () => {
    it("returns a string containing hello followed by name", () => {
      expect(helpers.getGreeting("zak")).toBe("Hello zak!");
      expect(helpers.getGreeting("sam")).toBe("Hello sam!");
      expect(helpers.getGreeting("nathan")).toBe("Hello nathan!");
    });
  });
  describe("getRectangleArea()", () => {
    it("returns the product of length & width", () => {
      expect(helpers.getRectangleArea(1, 2)).toBe(2);
      expect(helpers.getRectangleArea(5, 5)).toBe(25);
      expect(helpers.getRectangleArea(20, 20)).toBe(400);
    });
  });
  describe("getTriangleArea()", () => {
    it("returns the product of base & height divided by 2", () => {
      expect(helpers.getTriangleArea(1, 2)).toBe(1);
      expect(helpers.getTriangleArea(5, 5)).toBe(12.5);
      expect(helpers.getTriangleArea(20, 20)).toBe(200);
    });
  });
  describe("getCircleArea()", () => {
    it("returns the circle area by radius", () => {
      expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
      expect(helpers.getCircleArea(10)).toBe(314.1592653589793);
      expect(helpers.getCircleArea(442.1)).toBe(614031.8553824202);
    });
  });
});
