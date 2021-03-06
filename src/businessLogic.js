export class Game {
  constructor (){
    this.infectionRate = 3;
    this.economy = 1000;
    this.population = 10000;
    this.budget = 1000000; 
    this.day = 1;
    this.playerName = "";
    this.hoursLeftToday = 24;
  }

  changeDistancing(amount){
    this.economy -= amount*100;
    this.infectionRate -= amount*1;
  }

  investDivest(amount){
    this.infectionRate += 1;
    this.budget -= amount*1000;
  }

  endGame(){
    if (this.population <= 0) {
      this.population = 0;
      location.reload();
      alert (`wow, ${this.playerName} everyone except you is dead! Game over.`);
    } 
  }

  dayPassing(){
    this.population -= this.infectionRate*100;
    this.budget += this.economy;
    this.day += 1;
    this.hoursLeftToday = 24;
    this.endGame();
  }
  
}