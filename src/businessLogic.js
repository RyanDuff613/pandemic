class Game {
  constructor (){
    this.infectionLevel = 3;
    this.economy = 1000;
    this.population = 10000;
    this.budget = 1000000; 
    this.day = 1;
  }

  dayPassing(){
      this.population -= this.infectionLevel*100;
      this.budget += this.economy;
      this.day += 1;
  }

  endGame(){
    if (this.population <= 0) {
    return `everyone except you is dead! Game over.`;
  }
}

class Player {
  constructor(){
    this.name = "president";
  }

  changeDistancing(amount){
    // add code that changes rate of economy, changes rate of infection in instance of game
  }

  investDivest(){
    // add code that 
  }

}