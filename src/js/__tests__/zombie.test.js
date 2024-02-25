import Zombie from "../Zombie";
  
  test("Zombie object", () => {
    const result = new Zombie("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Zombie");
    expect(result.attack).toBe(40);
    expect(result.defence).toBe(10);
  })