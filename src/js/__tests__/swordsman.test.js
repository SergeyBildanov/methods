import Swordsman from "../Swordsman";

  test("Swordsman object", () => {
    const result = new Swordsman("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Swordsman");
    expect(result.attack).toBe(40);
    expect(result.defence).toBe(10);
  })