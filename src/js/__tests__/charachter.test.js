import Charachter from "../Charachter";


test('small name', () => {
  const result = new Charachter("B");
  const expected = new Error("Имя персонажа слишком короткое!")
  expect(result).toEqual(expected);
});

test('long name', () => {
  const result = new Charachter("Bdadadadadadadaaadadada");
  const expected = new Error("Имя персонажа слишком длинное!")
  expect(result).toEqual(expected);
});

test("Character object", () => {
  const result = new Charachter("Andrew");
  expect(result).toEqual({
    name: "Andrew",
    level: 1,
    health: 100,
    type: null,
    attack: null,
    defence: null,
  })});

test("level up deadman", () => {
  const result = new Charachter("Andrew");
  result.health = 0;
  expect(result.levelUp()).toStrictEqual(new Error("Нельзя повысить уровень умершего!"))
})

test("correct level up", ()=>{
  const result = new Charachter("Andrew");
  result.health = 80;
  result.attack = 10;
  result.defence = 10;
  result.levelUp();
  expect(result).toEqual({
    name: "Andrew",
    type: null,
    health: 100,
    attack: 12,
    defence: 12,
    level: 2,
  });
})

test("correct damage", ()=>{
  const result = new Charachter("Andrew");
  result.attack = 10;
  result.defence = 10;
  result.damage(10);
  expect(result).toEqual({
    name: "Andrew",
    type: null,
    health: 91,
    attack: 10,
    defence: 10,
    level: 1,
  });
})