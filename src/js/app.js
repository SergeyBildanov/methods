import Bowerman from "./Bowerman";
import Daemon from "./Daemon";
import Magician from "./Magician";
import Swordsman from "./Swordsman";
import Undead from "./Undead";
import Zombie from "./Zombie";

let bowerman = new Bowerman("Jeremy");
let swordsman = new Swordsman("Jacket");
let daemon = new Daemon("Will");
let magician = new Magician("Nick");
let undead = new Undead("UncleDrew");
let zombie = new Zombie("Phill");

console.log(bowerman, swordsman, daemon, magician, undead, zombie);