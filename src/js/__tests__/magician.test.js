import Magician from "../Magician";
  
  test("Magician object", () => {
    const result = new Magician("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Magician");
    expect(result.attack).toBe(10);
    expect(result.defence).toBe(40);
  })