import { describe, expect, it } from "vitest";
import { normalizeUsername } from "./normalize-username.js";

describe("normalizeUsername", () => {
  it("trims surrounding whitespace and lowercases the username", () => {
    expect(normalizeUsername("  Alice  ")).toBe("alice");
  });

  it("lowercases uppercase usernames", () => {
    expect(normalizeUsername("BOB")).toBe("bob");
  });

  it("preserves internal characters", () => {
    expect(normalizeUsername("John Doe")).toBe("john doe");
  });
});
