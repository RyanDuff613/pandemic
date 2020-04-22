export class Game {
  constructor (){
    this.infectionRate = 3;
    this.economy = 1000;
    this.population = 10000;
    this.budget = 1000000; 
    this.day = 1;
  }

  dayPassing(){
    this.population -= this.infectionRate*100;
    this.budget += this.economy;
    this.day += 1;
  }


  changeDistancing(){
    this.economy -= 100;
    this.infectionRate -= 1;
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