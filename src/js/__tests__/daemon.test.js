import Daemon from "../Daemon";
  
  test("Daemon object", () => {
    const result = new Daemon("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Daemon");
    expect(result.attack).toBe(10);
    expect(result.defence).toBe(40);
  })