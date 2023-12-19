import { randomBetween } from "./demo";

const randomSpy = jest.spyOn(Math,'random')
// we record howmany times and what and all the function has been called

describe("random between", () => {
  describe("when Math.random() returns 0.5", () => {
    beforeEach(()=>{
        randomSpy.mockReturnValue(0);
    })

    it("called with min=3 and max=5 returns 3", () => {
      expect(randomBetween(3, 5)).toBe(3);
    });
  }); 
});
