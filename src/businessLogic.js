export class Game {
  constructor (){
    this.infectionRate = 3;
    this.economy = 1000;
    this.population = 10000;
    this.budget = 1000000; 
    this.day = 1;
  }

  changeDistancing(amount){
    this.economy -= amount*100;
    this.infectionRate -= amount*1;
    this.day += 1;
  }

  dayPassing(){
    this.population -= this.infectionRate*100;
    this.budget += this.economy;
    this.day += 0;
  }

  investDivest(){
    // add code that 
  }

  endGame(){
    if (this.population <= 0) {
      return `everyone except you is dead! Game over.`;
    } 
  }
}

export class Player {
  constructor (name){
    this.name = name;
  }
}