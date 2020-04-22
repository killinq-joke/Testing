const helpers = require('./project-1');

// start testing!
describe("project-1", () => {
    describe("multiplyByTen()", () => {
        it("returns the argument multiplied by 10", () => {
            expect(helpers.multiplyByTen(10)).toBe(100)
            expect(helpers.multiplyByTen(4)).toBe(40);
            expect(helpers.multiplyByTen(511)).toBe(5110);
        })
    })
    describe("subtractFive()", () => {
      it("returns the argument minus 5", () => {
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(4)).toBe(-1);
        expect(helpers.subtractFive(511)).toBe(506);
      });
    });
})
