import Charachter from "./Charachter";

export default class Swordsman extends Charachter {
  constructor(name){
    super(name);
    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  }
}