import Bowerman from "../Bowerman";
  
  test("Bowerman object", () => {
    const result = new Bowerman("Andrew");
    expect(result.health).toBe(100);
    expect(result.level).toBe(1);
    expect(result.type).toBe("Bowerman");
    expect(result.attack).toBe(25);
    expect(result.defence).toBe(25);
  })