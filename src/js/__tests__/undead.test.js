import Undead from "../Undead";

  test("Undead object", () => {
    const result = new Undead("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Undead");
    expect(result.attack).toBe(25);
    expect(result.defence).toBe(25);
  })