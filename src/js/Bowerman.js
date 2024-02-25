import Charachter from "./Charachter";

export default class Bowerman extends Charachter {
  constructor(name){
    super(name);
    this.type = "Bowerman";
    this.attack = 25;
    this.defence = 25;
  }
}
