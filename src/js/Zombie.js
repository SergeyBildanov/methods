import Charachter from "./Charachter";

export default class Zombie extends Charachter {
  constructor(name){
    super(name);
    this.type = "Zombie";
    this.attack = 40;
    this.defence = 10;
  }
}