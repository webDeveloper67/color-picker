import utils from "./utils";

test("should return color with hex", () => {
  utils.componentToHex = jest.fn().mockReturnValue();
  const result = utils.rgbToHex("QJ", "Li", "ff");
  expect(result).toBe("#QJLiff");
});
