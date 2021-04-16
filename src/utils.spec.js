import { sortCardArray, accumulatePoints } from "./utils";

const sampleCardValues = ["9", "ACE", "KING", "4"];
const oneAceExample = ["9", "4", "ACE"];
const elevenAceExample = ["9", "ACE"];

test("Sorts ACE to end of array", () => {
  expect(sampleCardValues.sort(sortCardArray)[3]).toBe("ACE");
});

test("Expect ACE to be worth 1 point", () => {
    expect(oneAceExample.reduce(accumulatePoints, 0)).toBe(14);
});

test("Expect ACE to be worth 11 points", () => {
    expect(elevenAceExample.reduce(accumulatePoints, 0)).toBe(20);
});
