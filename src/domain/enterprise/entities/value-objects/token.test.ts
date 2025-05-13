import { Token } from "./token";

describe("Token", () => {
  it("should be able to create a unique token", () => {
    const tokenRecord = new Token();
    const token = tokenRecord.getValue();

    expect(token).toHaveLength(6);
    expect(token).toStrictEqual(expect.any(String));
  });
});
